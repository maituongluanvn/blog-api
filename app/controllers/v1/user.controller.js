const UserModel = require('../../models/users.model')

// @method [POST] Get many user with Params
async function GetManyUsers(req, res, next) {
  const { skip = 0, limit = 10 } = req.query
  res.status(200).send({})
}

module.exports = {
  GetManyUsers,
}
