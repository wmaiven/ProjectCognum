const express = require('express');
const router = express.Router();
const axios = require('axios');
//criando rota do tipo GET /hello 
router.get('/hello', (req, res) => {
    const message = {
        message: 'Hello , Cognum!'
    }
    res.json(message);
});


//  consumindo Api
axios.get('http://localhost:3000/hello', (req, res) => {
}).then((res) => {
    res.status = 400;
    console.log(res.data);
}).catch((err) => {
    console.error(err);
});

module.exports = router;