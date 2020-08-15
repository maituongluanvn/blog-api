const { query } = require('express')

const UsersModel = require(`${global.MODEL}/users.model`)
const response = require(`${global.HELPER}/response`)
// @method [POST] Get many user with Params
async function GetManyUsers(req, res) {
  const { skip = 0, limit = 10 } = req.query
  // Query count
  const [err1, count] = await response(UsersModel.count())
  if (err1) res.status(400).send(err1)
  // Query data
  const [err2, data] = await response(
    UsersModel.find()
      .skip(skip > count ? 10 : skip)
      .limit(limit > 50 ? 50 : limit)
  )
  if (err2) res.status(400).send(err2)
  res.status(200).json({ data })
}

// @method [POST] Get many user with Params
async function GetOneUserByID(req, res) {
  const { _id } = req.params
  // Query user
  const [err, data] = await response(UsersModel.findById(_id))
  if (err) res.status(400).send(err)
  res.status(200).json({ data })
}
module.exports = {
  GetManyUsers,
  GetOneUserByID,
}
