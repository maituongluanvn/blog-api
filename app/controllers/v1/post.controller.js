// const PostModel = require('../models/posts.model')
// const users = require('../models/users.model')
// const dum = require('../models/dummy/users.json')
module.exports = {
  /**
   *
   * @param {} req
   * @param {*} res
   * @param {*} next
   */
  GetListPosts: async function (req, res) {
    const { skip = 0, limit } = req.query
    res.status(200).send({ skip, limit })
  },
  // create: async function (req, res) {
  //   // const dummy = require('../models/dummy/users.json')
  //   const data = await users.create({})
  //   res.json({ data })
  // },
}
