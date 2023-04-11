const { Product } = require('../models');

const productData = [
    {
        product_name: 'Plain Sweatshirt',
        price: 14.99,
        stock: 34,
        category_id: 1,
    },
    {
        product_name: 'Walking Sneakers',
        price: 90.0,
        stock: 65,
        category_id: 5,
    },
    {
        product_name: 'Black Beanie',
        price: 22.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: 'Record Player',
        price: 120.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Graphic T-Shirt',
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;