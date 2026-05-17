// Modules
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Local Modules

// Router Module
const ROUTER = require('./router')
const respo = require('./utils/respo')

// Setups
const PORT = 9909
const server = express()

// Middelwares
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())
server.use(cookieParser())

// Router
server.use('/api', ROUTER)

// Error handling
server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'

  return res.status(status).json(respo(false, message))
})

// Listen server
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`)
})
