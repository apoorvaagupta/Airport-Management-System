const express = require('express');
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

    db.query(`INSERT INTO baggage_counters values('${req.body.terminal_id}','${req.body.counter_id}',${req.body.capacity})`).then((data) => {
        console.log(data);
        res.send("Baggage counters added");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
});


route.get('/viewAll', (req, res) => {
    db.query("SELECT * FROM baggage_counters;").then((baggage_counters) => {
        console.log(baggage_counters);
        res.send(baggage_counters[0]);
    })
});

route.get('/getAll', (req, res) => {

    db.query("SELECT * FROM baggage_counters WHERE terminal_id='"+req.query.terminal_id+"';").then((runways) => {
        console.log(runways);
        res.send(runways[0]);
    })
});


module.exports = route;