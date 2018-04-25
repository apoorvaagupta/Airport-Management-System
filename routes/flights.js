const express = require('express');
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

    db.query(`INSERT INTO flights values(${req.body.flightID},'${req.body.flightCode}', 
                '${req.body.airlineCode}','${req.body.dept_time}','${req.body.arr_time}', 
                'L','${req.body.aircraft_no}','${req.body.terminal_id}',
                '${req.body.runway_id}','${req.body.gate_id}');
                INSERT INTO landing_flights values(${req.body.flightID},'${req.body.flightCode}', 
                '${req.body.dept_from}','${req.body.terminal_id}',
                '${req.body.counter_id}');`).then((data) => {
        console.log(data);
        res.send("Arrival flight added");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })

});


route.get('/viewAll', (req, res) => {
    db.query("SELECT * FROM flights NATURAL INNER JOIN landing_flights ORDER BY arr_time, dept_from;").then((flights) => {
        console.log(flights);
        res.send(flights[0]);
    })
});


module.exports = route;