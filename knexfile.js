require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_DATABASE
    },
    migrations: {
        directory: './lib/db/knex/migrations',
    },
    seeds: {
        directory: './lib/db/knex/seeds',
    },
};
