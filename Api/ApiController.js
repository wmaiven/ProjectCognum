const express = require('express');
const router = express.Router();

//criando rota do tipo GET /hello 
router.get('/hello',(req, res) => {
    const message = {
        message: 'Hello , Cognum!'
    }
    res.json(message);
});

module.exports = router;