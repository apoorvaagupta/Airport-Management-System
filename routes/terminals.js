const express = require('express')
const route = express.Router();
const db = require('../db/models').db;

route.post('/add', function (req, res) {

  db.query(`INSERT INTO terminals values('${req.body.terminal_id}','${req.body.name}')`).then((data) => {
    console.log(data)
    res.send("Terminal added");
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })
})


route.get('/viewAll', (req, res) => {
  db.query("SELECT * FROM terminals ORDER BY terminal_id;").then((terminals) => {
    console.log(terminals)
    res.send(terminals[0])
  })
})


module.exports = route;