const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require("./routes/Routes");
const Api = require("./Api/ApiController");

// Middleware para permitir solicitações de diferentes origens (CORS)
app.use(cors());

// Middleware para fazer o parse de dados no corpo das requisições em formato JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use('/', Routes);




// Inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log("API RODANDO!");
});