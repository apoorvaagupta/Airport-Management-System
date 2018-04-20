const express = require('express')
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

  db.query(`INSERT INTO airplanes values('${req.body.reg_no}','${req.body.icao_code}','${req.body.name}',${req.body.capacity},${req.body.weight})`).then((data) => {
    console.log(data)
    res.send("Airplane added");
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })
})


route.get('/viewAll', (req, res) => {
  db.query("SELECT * FROM airplanes;").then((airplanes) => {
    console.log(airplanes)
    res.send(airplanes[0])
  })
})


module.exports = route;