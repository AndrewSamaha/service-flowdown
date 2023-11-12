require('dotenv').config()

const { ApolloServer } = require( '@apollo/server');
//const { startStandaloneServer } = require( '@apollo/server/standalone');
const { expressMiddleware } = require( '@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require( '@apollo/server/plugin/drainHttpServer');
const express = require( 'express');
const http = require( 'http');
const cors = require( 'cors');
const bodyParser = require('body-parser')
const { typeDefs, resolvers } = require( './lib/graph/index.js');
const { MockDatasource } = require( './lib/datasources/mock.js');

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const createDatasources = () => {
    if (process.env.MOCK_DATASOURCES) {
        return {
            db: new MockDatasource()
        }
    }
    return {
        db: {}
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



// // Modified server startup
// new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
// console.log(`🚀 Server ready at http://localhost:${PORT}/`);

// startStandaloneServer(server, {
//     listen: { port: PORT },
//     context: async ({req}) => {
//         if (process.env.MOCK_DATASOURCES) {
//             return {
//                 datasources: {
//                     db: new MockDatasource()
//                 }
//             }
//         }
//         return {
//             datasources: {
//                 db: {}
//             }
//         }
//     }
// }).then(({url}) => {
//     console.log(`🚀  Server ready at: ${url}`);
// });
