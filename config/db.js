const { Pool } = require('pg')

const pool = new Pool({
  user: 'pjfneujs',
  host: 'topsy.db.elephantsql.com',
  database: 'pjfneujs',
  password: 'yxcNyYCIyo0I53zkb5B1FJGbKrCcdpvE',
  port: 5432,
  max: 100,
})

pool.on('error', (err, client) => {
  console.error('Database Error :', err)
})
