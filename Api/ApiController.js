const express = require('express');
const axios = require('axios');
const roles = require('../data/RolesData');

//aleatorizando os cargos
const getRandomRole = () => {
    const randomIndex = Math.floor(Math.random() * roles.roles.length);
    return roles.roles[randomIndex];
  };

//  consumindo Api
const getUsers = axios.get("https://randomuser.me/api/?results=11")
.then((res) => {
    let employees = [];
    res.data.results.map((user) => {
        const randomIndex = getRandomRole();
        const name = user.name.first+" "+user.name.last; 
        employees.push({name: name, role: randomIndex});
    });
    return employees;
}).catch((err) => {
    console.error(err);
});





module.exports = getUsers;