const { DataTypes } = require('sequelize');
const connection = require('../data/DataBase');

const Employee = connection.define('Employees', {
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
	role: {
		type: DataTypes.STRING,
		allowNull: false
		},
})
module.exports = Employee;