const route = require('express').Router()

route.use('/airplanes', require('./airplanes'))
route.use('/airlines', require('./airlines'))
route.use('/airport', require('./airport'))
route.use('/checkinrows', require('./check_in_rows'))
route.use('/terminals', require('./terminals'))

module.exports = route;