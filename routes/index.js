const route = require('express').Router()

route.use('/airplanes', require('./airplanes'));
route.use('/airlines', require('./airlines'));
route.use('/airport', require('./airport'));
route.use('/check_in_rows', require('./check_in_rows'));
route.use('/terminals', require('./terminals'));
route.use('/runways', require('./runways'));
route.use('/gates', require('./gates'));
route.use('/baggage_counters', require('./baggage_counters'));
route.use('/flights', require('./flights'));
route.use('/flights_dept', require('./flights_dept'));


module.exports = route;