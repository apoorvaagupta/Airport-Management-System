const express = require('express')
const route = express.Router();
const db = require('../db/models');

route.post('/add', function (req, res) {

  db.query(`INSERT INTO check_in_rows values(${req.body.terminal_id},${req.body.row_id}, ${req.body.num_cntrs})`).then((data) => {
    console.log(data)
    res.send("Check_in_row added");
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })
})


route.get('/viewAll', (req, res) => {
  db.query("SELECT * FROM check_in_rows;").then((check_in_rows) => {
    console.log(check_in_rows)
    res.send(check_in_rows[0])
  })
})


module.exports = route;