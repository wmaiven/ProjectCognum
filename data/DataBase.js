const Sequelize = require('sequelize');
const connection = new Sequelize('data_cognum', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"

})
//connection.sync({force: true})

module.exports = connection;