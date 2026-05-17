const router = require('express').Router()

// Route Modules
const AUTH = require('./routes/auth')
const BREACHED = require('./routes/breached')
const error = require('./utils/error')

// Routes
router.use('/auth', AUTH)
router.use('/breached', BREACHED)

router.route('*').all((req, res, next) => {
  return next(error(404, 'Route not found!'))
})

module.exports = router
