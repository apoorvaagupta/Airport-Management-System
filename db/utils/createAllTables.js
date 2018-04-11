const db = require('./../models').db;
const queries = require('../queries');


db.query(queries.airport.createTable).then((data) => {

});