const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'rock music',
    },
    {
        tag_name: 'hiphop music',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'yellow',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'hiphop culture',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;