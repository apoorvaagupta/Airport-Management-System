const route = require('express').Router()

route.use('/airplanes', require('./airplanes'))
route.use('/airlines', require('./airlines'))
route.use('/airport', require('./airport'))
route.use('/check_in_rows.html', require('./check_in_rows'))
route.use('/terminals', require('./terminals'))



module.exports = route;