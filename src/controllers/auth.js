// Modules
const respo = require('../utils/respo')

// Controllers
const register = (req, res, next) => {
  return res.status(200).json(respo(true, 'Register in production'))
}

const login = (req, res, next) => {
  return res.status(200).json(respo(true, 'Logging in production'))
}

// Export
module.exports = { register, login }
