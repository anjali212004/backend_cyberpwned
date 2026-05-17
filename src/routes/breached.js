const { checkBreached } = require('../controllers/breached')

const router = require('express').Router()

router.route('/').post(checkBreached)

module.exports = router
