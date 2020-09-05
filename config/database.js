const { Pool } = require('pg')
const pool = new Pool({
  host: 'topsy.db.elephantsql.com',
  port: 5432,
  user: 'pjfneujs',
  password: 'yxcNyYCIyo0I53zkb5B1FJGbKrCcdpvE',
  database: 'pjfneujs',
  max: 10,
})
module.exports = pool
// sequelize = new Sequelize('sqlite::memory:', {
//   // Choose one of the logging options
//   logging: console.log, // Default, displays the first parameter of the log function call
//   logging: (...msg) => console.log(msg), // Displays all log function call parameters
//   logging: false, // Disables logging
//   logging: (msg) => logger.debug(msg), // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
//   logging: logger.debug.bind(logger), // Alternative way to use custom logger, displays all messages
// })
