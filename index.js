require('dotenv').config()

const { ApolloServer } = require( '@apollo/server');
//const { startStandaloneServer } = require( '@apollo/server/standalone');
const { expressMiddleware } = require( '@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require( '@apollo/server/plugin/drainHttpServer');
const express = require( 'express');
const http = require( 'http');
const cors = require( 'cors');
const knex = require('knex');
const { typeDefs, resolvers } = require( './lib/graph/index.js');
const { MockDatasource } = require( './lib/datasources/mock.js');
const {DbFlowdown} = require('./lib/datasources/DbFlowdown.js');
const knexConfig = require('./knexfile.js');

const app = express();
const httpServer = http.createServer(app);

const dbFlowdownConnection = knex(knexConfig);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const createDatasources = () => {
    if (process.env.MOCK_DATASOURCES === 'true') {
        console.log('Creating mock datasource')
        return {
            db: new MockDatasource()
        }
    }
    return {
        db: new DbFlowdown(dbFlowdownConnection)
    }
}

var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const PORT = process.env.PORT ? process.env.PORT : 4000;

server.start().then(() => {
    app.get('/health-check', (req, res) => {
        res.status(200).send('Okay!');
    });
    app.use(
        '/',
        cors(corsOptions),
        //null,
        // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
        //bodyParser.json({ limit: '50mb' }),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => {
                const { token } = req.headers;
                return {
                    token,
                    datasources: createDatasources()
                }
            },
        }),
    );
    return app;
}).then((app) => {
    httpServer.listen({ port: PORT })
    return { app, httpServer }
}).then(({app, httpServer}) => {
    
    console.log(`🚀  Server ready at: ${PORT} `);
});
