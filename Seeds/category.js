const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Sweatshirts',
    },
    {
        category_name: 'T-Shirts',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Shoes',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;