const express = require('express')
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

  db.query(`INSERT INTO airport values('${req.body.airport_code}','${req.body.name}','${req.body.city}','${req.body.country}','${req.body.contact_no}' )`).then((data) => {
    console.log(data);
    res.send("Airport added");
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })
})


route.get('/viewAll', (req, res) => {
  db.query("SELECT * FROM airport ORDER BY country, city, name;").then((airports) => {
    console.log(airports)
    res.send(airports[0])
  })
})


module.exports = route;