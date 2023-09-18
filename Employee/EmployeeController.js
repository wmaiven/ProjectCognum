const express = require('express');
const router = express.Router();
const Employee = require('./Employee');

router.get("/employees/read", (req, res) => {
    Employee.findAll()
    .then((Employee) => {
        console.log(Employee);
    }).catch((err) => {
        console.error(err);
    });
    res.json(Employee)
});
router.post("/employees/create", (req, res) => {
    


});





module.exports = router;




