const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const connectDB = async () => {
  try {
    autoIncrement.initialize(mongoose)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
