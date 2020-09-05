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
