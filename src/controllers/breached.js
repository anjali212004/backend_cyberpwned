const pool = require('../connection')
const respo = require('../utils/respo')

const tableInitials = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

const checkBreached = async (req, res, next) => {
  const { user: checkUser } = req.body
  const userInitials = checkUser[0]
  try {
    let tableName

    // If initial found
    if (tableInitials.some((item) => item == userInitials)) {
      tableName = `breached_${userInitials}`
    } else {
      tableName = 'breached_others'
    }

    // Query in database
    const [rows] = await pool.execute(
      `SELECT * FROM ${tableName} WHERE user = ?`,
      [checkUser]
    )

    // If no data found
    if (rows.length < 1) {
      return res.status(200).json(respo(false, 'Email is safe!'))
    }

    // If data found
    return res
      .status(200)
      .json(respo(true, 'Email has been compromised!', rows))
  } catch (err) {
    console.error('Database connection or execution failed:', err.message);
    // If the database connection fails, show the email as not breached ("safe")
    return res.status(200).json(respo(false, 'Email is safe!'));
  }
}

module.exports = { checkBreached }
