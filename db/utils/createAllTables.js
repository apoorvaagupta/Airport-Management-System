const db = require('./../models');
const queries = require('../queries');


db.query(queries.airport.createTable).then((data) => {

});