// const PostModel = require('../models/posts.model')
// const users = require(`${global.MODEL}/users.model`)
// const dum = require('../models/dummy/users.json')

async function GetListPosts(req, res) {
  const { skip = 0, limit } = req.query
  res.status(200).send({ skip, limit })
}
module.exports = { GetListPosts }
