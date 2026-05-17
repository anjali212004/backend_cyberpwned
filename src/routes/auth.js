const { register, login } = require('../controllers/auth')

const router = require('express').Router()

// routes
router.route('/register').post(register)

router.route('/login').post(login)

module.exports = router
