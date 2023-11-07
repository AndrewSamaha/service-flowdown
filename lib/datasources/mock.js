const { flows } = require( './mock/flows.js');
const { asanas } = require( './mock/asanas.js');
const { sections } = require( './mock/sections.js');
const { songs } = require( './mock/songs.js');
const { users } = require( './mock/users.js');

module.exports.MockDatasource = class MockDatasource {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getFlows() {
        return flows;
    }

    async getAsanas() {
        return asanas;
    }

    async getSections() {
        return sections;
    }

    async getSongs() {
        return songs;
    }

    async getUsers() {
        return users;
    }
}
