const express = require('express');
const app = express();
const db = require('./db/models').db;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/index'))

app.use(express.static(__dirname + '/public-html'))

app.listen(4000, () => { console.log("Server running on http://localhost:4000")})