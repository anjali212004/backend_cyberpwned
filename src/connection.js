const mysql = require('mysql2/promise')

// Connection details

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Anjali123@#',
  database: 'cyber',
  waitForConnections: true,
})

// export
module.exports = pool
