const { v4: uuid } =require('uuid');

module.exports.sections = [
    {
        id: uuid(),
        name: "before class",
        duration: "15:00"
    },
    {
        id: uuid(),
        name: "class",
        duration: "45:00"
    },
    {
        id: uuid(),
        name: "after class",
        duration: "15:00"
    },
];
