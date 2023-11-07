const { v4: uuid } = require( 'uuid');
const { asanas } = require( './asanas.js');
const { sections } = require( './sections.js');
const { songs } = require( './songs.js');

module.exports.flows = [
    {
        id: uuid(),
        name: "Hot Power Express Oct",
        sections,
        songs,
        asanas
    },
    {
        id: uuid(),
        name: "Hot Power Express Nov",
        sections,
        songs,
        asanas
    },
    {
        id: uuid(),
        name: "Hot Power Express Dec",
        sections,
        songs,
        asanas
    },
];
