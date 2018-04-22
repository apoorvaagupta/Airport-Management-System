const express = require('express');
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

    db.query(`INSERT INTO runways values('${req.body.terminal_id}','${req.body.runway_id}',${req.body.weight})`).then((data) => {
        console.log(data);
        res.send("Runways added");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
});


route.get('/viewAll', (req, res) => {
    db.query("SELECT * FROM runways ORDER BY terminal_id, runway_id;").then((runways) => {
        console.log(runways);
        res.send(runways[0]);
    })
});

route.get('/getAll', (req, res) => {

    db.query("SELECT * FROM runways WHERE terminal_id='"+req.query.terminal_id+"';").then((runways) => {
        console.log(runways);
        res.send(runways[0]);
    })
});

module.exports = route;