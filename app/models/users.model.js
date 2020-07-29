var mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
var usersSchema = new mongoose.Schema(
	{
		// _id: { type: Number, autoIndex: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		// userID: { type: mongoose.Types.ObjectId, ref: 'users' },
		role: { type: Number, required: true, default: 20, ref: 'roles' },
	},
	{ timestamps: true }
)
usersSchema.plugin(autoIncrement.plugin, 'users')

module.exports = mongoose.model('users', usersSchema)
