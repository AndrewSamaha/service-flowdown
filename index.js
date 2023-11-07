require('dotenv').config()

const { ApolloServer } = require( '@apollo/server');
const { startStandaloneServer } = require( '@apollo/server/standalone');
const { typeDefs, resolvers } = require( './lib/graph/index.js');
const { MockDatasource } = require( './lib/datasources/mock.js');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.PORT ? process.env.PORT : 4000;

startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({req}) => {
        if (process.env.MOCK_DATASOURCES) {
            return {
                datasources: {
                    db: new MockDatasource()
                }
            }
        }
        return {
            datasources: {
                db: {}
            }
        }
    }
}).then(({url}) => {
    console.log(`🚀  Server ready at: ${url}`);
});
