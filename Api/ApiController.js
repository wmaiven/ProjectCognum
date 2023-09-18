const express = require('express');
const axios = require('axios');


//  consumindo Api
const Hello = axios.get('http://localhost:3000/hello', (req, res) => {
}).then((res) => {
    res.status = 400;
    console.log(res.data);
}).catch((err) => {
    console.error(err);
});

module.exports = Hello;