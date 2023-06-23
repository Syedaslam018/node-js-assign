const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '1q2w3e4r5t', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize