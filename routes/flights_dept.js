const express = require('express');
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

    db.query(`INSERT INTO flights values(${req.body.flightID},'${req.body.flightCode}', 
                '${req.body.airlineCode}','${req.body.dept_time}','${req.body.arr_time}', 
                'D','${req.body.aircraft_no}','${req.body.terminal_id}',
                '${req.body.runway_id}','${req.body.gate_id}');
                INSERT INTO takeoff_flights values(${req.body.flightID},'${req.body.flightCode}', 
                '${req.body.arr_at}','${req.body.terminal_id}',
                '${req.body.row_id}');`).then((data) => {
        console.log(data);
        res.send("Departure flight added");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })

});


route.get('/viewAll', (req, res) => {
    db.query("SELECT * FROM flights NATURAL INNER JOIN takeoff_flights ORDER BY dept_time, arr_at;").then((flights) => {
        console.log(flights);
        res.send(flights[0]);
    })
});


module.exports = route;