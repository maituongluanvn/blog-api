const postsDB = require('../models/posts.model')
// const users = require('../models/users.model')

module.exports = {
	get: async function (req, res, next) {
		const data = await postsDB.find().exec()
		res.json({ data })
	},
	create: async function (req, res) {
		// const dummy = require('../models/dummy/users.json')
		const data = await users.create({})
		res.json({data})
	},
}
