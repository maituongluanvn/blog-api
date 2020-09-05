const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('pjfneujs', 'pjfneujs', 'yxcNyYCIyo0I53zkb5B1FJGbKrCcdpvE', {
  host: 'topsy.db.elephantsql.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize('sqlite::memory:')

const users = sequelize.define(
  'user',
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
    timestamps: false,
    // Other model options go here
  }
)
// `sequelize.define` also returns the model
module.exports = users
