const db = require('./../models').db;
const queries = require('../queries');


db.query(queries.airport.createTable).then((data) => {
  db.query(queries.airlines.createTable).then((data) => {
    db.query(queries.airplanes.createTable).then((data) => {
      db.query(queries.terminals.createTable).then((data) => {
        db.query(queries.runways.createTable).then((data) => {
          db.query(queries.check_in_rows.createTable).then((data) => {
            db.query(queries.baggage_counters.createTable).then((data) => {
              db.query(queries.gates.createTable).then((data) => {
                db.query(queries.flights.createTable).then((data) => {
                  // db.query(queries.landing_flights.createTable).then((data) => {
                  //   db.query(queries.takeoff_flights.createTable).then((data) => {
                  //
                  //   });
                  // });
                });
              });
            });
          });
        });
      });
    });
  });
});




















