// var mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')
// var postSchema = new mongoose.Schema(
//   {
//     _id: { type: Number },
//     title: { type: String, required: true },
//     content: { type: String, required: true },
//     isPriority: { type: Boolean, required: true, default: false },
//     // userID: { type: mongoose.Types.ObjectId, ref: 'users' },
//   },
//   { timestamps: true }
// )
// postSchema.plugin(autoIncrement.plugin, 'posts')
// module.exports = mongoose.model('posts', postSchema)
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
    },
  },
  {
    // Other model options go here
  }
)

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User) // true
