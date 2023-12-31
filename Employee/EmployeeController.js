const express = require('express');
const router = express.Router();
const Employee = require('./Employee');
const Api = require("../Api/ApiController");
const axios = require("axios");

// lendo banco de dados
router.get("/employees/read", (req, res) => {
    Employee.findAll()
        .then((employees) => {
            res.json(employees); // Retorne os dados como JSON aqui dentro do .then()
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' }); // Trate o erro, se houver
        });
});

// colocando dados no banco de dados
router.post("/employees/create", (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    if (name && role != undefined && name && role != null) {
        Employee.create({
            name: name,
            role: role
        }).then(() => {
            res.status(200);
            res.json({
                message: "Cadastro realizado com sucesso"
            });
        }).catch((err) =>{
            res.status(400).json({
                error: err
            })
        });
    } else {
        res.status(400).json({
            error: "Preencha todos os campos"
        })
    }
});

// alterando dados no banco de dados
router.put("/employees/update", (req, res) => {
    const id = req.body.id;
    console.log(id);
    const name = req.body.name;
    console.log(name);
    const role = req.body.role;
    if (id && name && role!= undefined && id && name && role!= null) {
        Employee.update({
            name: name,
            role: role
        }, {
            where: {
                id: id
            }
        }).then(() => 
        {
        res.status(200).json({message: "Alteração feita com sucesso!"})
        }).catch(err => {
            res.status(400).json({
                error: err
            });
        });
    } else {
        res.status(400).json({
            error: "Preencha todos os campos"
        })
    }
});

// deletando dados no banco de dados
router.delete("/employees/delete", (req, res) => {
    const id = req.body.id;
    if (id!= undefined && id!= null) {
        Employee.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.status(200).json({
                message: "Deletado com sucesso!"
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });     
        });  
    } else {
        res.status(400).json({
            error: "Preencha todos os campos"
        })
    }
});

//populando com usuarios o banco de dados com a Api
router.get("/populate", async (req, res) => {
    try {
      const Users = await Api;
      Users.map(async (User) => {
        try {
          await axios.post("http://localhost:3000/employees/create", {
            name: User.name,
            role: User.role
          });
          console.log(`Usuário ${User.name} adicionado com sucesso`);
        } catch (error) {
          console.error(`Erro ao adicionar usuário ${User.name}:`, error);
        }
      });
  
      res.status(200).json({ message: "Banco de dados populado com sucesso!" });
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
      res.status(500).json({ error: "Erro ao obter os usuários" });
    }
  });

module.exports = router;




