const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// CORS
app.use(cors())

app.use(bodyParser.json())

// Router
app.use('/', require('./app/routes'))

const PORT = process.env.PORT || 8888;
app.listen(
  PORT,
  console.log(`Blog running in ${process.env.NODE_ENV} Port : ${PORT}`)
)
