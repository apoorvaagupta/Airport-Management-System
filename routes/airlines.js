const express = require('express')
const route = express.Router();
const db = require('../db/models');

route.post('/add', function (req, res) {

  db.query(`INSERT INTO airlines values('${req.body.airline_code}','${req.body.name}')`).then((data) => {
    console.log(data)
    res.send("Airlines added");
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })
})


route.get('/viewAll', (req, res) => {
  db.query("SELECT * FROM airlines;").then((airlines) => {
    console.log(airlines)
    res.send(airlines[0])
  })
})


module.exports = route;