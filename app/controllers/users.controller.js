const bcrypt = require('bcrypt')
const userDB = require('../models/users.model')
const jwt = require('jsonwebtoken')
module.exports = {
	signin: async (req, res) => {
		// check email and password is exist
		const user = await userDB.findOne({ email: req.body.email })
		const validPassword = await bcrypt.compare(req.body.password, user.password)
		if (!user || !validPassword) return res.status(400).send({ message: 'Email or password is not already exist' })
		// create token
		const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
		res.header('auth-token', token).send('sucess')
	},
	signup: async (req, res) => {
		// check email exist
		const emailExist = await userDB.findOne({ email: req.body.email })
		if (emailExist) return res.status(400).send({ message: 'Email already exist' })
		// has password
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		// create new user
		const user = await new userDB({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashedPassword,
		})
		try {
			// save
			const data = await userDB.create(user)
			res.send({ data })
		} catch (error) {
			res.status(400).send(error)
		}
	},
}
