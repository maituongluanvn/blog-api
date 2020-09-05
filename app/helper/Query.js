const { Pool } = require('pg')
const pool = new Pool({
  host: 'topsy.db.elephantsql.com',
  port: 5432,
  user: 'pjfneujs',
  password: 'yxcNyYCIyo0I53zkb5B1FJGbKrCcdpvE',
  database: 'pjfneujs',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

async function QuerySelectOne(sql) {
  try {
    const result = await pool.query(sql)
    await pool.end()
    return [null, result.rows[0]]
  } catch (err) {
    return [err, null]
  }
}

async function QuerySelectMany(sql) {
  try {
    const result = await pool.query(sql)
    await pool.end()
    return [null, result.rows]
  } catch (err) {
    return [err, null]
  }
}

async function InsertData(sql) {
  try {
    console.log(sql)
    await pool.query(sql)
    await pool.end()
    return [null, { status: true }]
  } catch (err) {
    return [err, null]
  }
}

module.exports = {
  QuerySelectOne,
  QuerySelectMany,
  InsertData,
}
