const express = require('express');
const app = express();
const db = require('./db/models').db;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/index'))

app.use(express.static(__dirname + '/public-html'))
app.use('/flights', express.static(__dirname + '/public-html/admin/flights.html'))
app.use('/airlines', express.static(__dirname + '/public-html/admin/airlines.html'))
app.use('/airplanes', express.static(__dirname + '/public-html/admin/airplanes.html'))
app.use('/airports', express.static(__dirname + '/public-html/admin/airports.html'))
app.use('/baggagecounters', express.static(__dirname + '/public-html/admin/baggage_counters.html'))
app.use('/checkinrows', express.static(__dirname + '/public-html/admin/check_in_rows.html'))
app.use('/gates', express.static(__dirname + '/public-html/admin/gates.html'))
app.use('/runways', express.static(__dirname + '/public-html/admin/runways.html'))
app.use('/terminals', express.static(__dirname + '/public-html/admin/terminals.html'))

app.listen(4000, () => { console.log("Server running on http://localhost:4000")})