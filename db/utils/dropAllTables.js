const db = require('./../models');
const queries = require('../queries');

db.query(queries.airport.dropTable).then((data) => {

});

db.query(queries.airlines.dropTable).then((data) => {

});

db.query(queries.airplanes.dropTable).then((data) => {

});

db.query(queries.baggage_counters.dropTable).then((data) => {

});

db.query(queries.check_in_rows.dropTable).then((data) => {

});

db.query(queries.flights.dropTable).then((data) => {

});

db.query(queries.takeoff_flights.dropTable).then((data) => {

});

db.query(queries.landing_flights.dropTable).then((data) => {

});

db.query(queries.runways.dropTable).then((data) => {

});

db.query(queries.takeoff_flights.dropTable).then((data) => {

});

db.query(queries.terminals.dropTable).then((data) => {

});