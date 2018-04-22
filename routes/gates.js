const express = require('express');
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

    db.query(`INSERT INTO gates values('${req.body.terminal_id}','${req.body.gate_id}',${req.body.capacity})`).then((data) => {
        console.log(data);
        res.send("Gates added");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
});


route.get('/viewAll', (req, res) => {
    db.query("SELECT * FROM gates ORDER BY terminal_id, gate_id;").then((gates) => {
        console.log(gates);
        res.send(gates[0]);
    })
});

route.get('/getAll', (req, res) => {

    db.query("SELECT * FROM gates WHERE terminal_id='"+req.query.terminal_id+"';").then((gates) => {
        console.log(gates);
        res.send(gates[0]);
    })
});



module.exports = route;