// const UserModel = require(`${global.MODEL}/users.model`)
// @method [POST] Get many user with Params
async function GetManyUsers(req, res) {
  const { skip = 0, limit = 10 } = req.query
  res.status(200).send({})
}

module.exports = {
  GetManyUsers,
}
