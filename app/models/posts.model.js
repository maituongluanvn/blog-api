var mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
var postSchema = new mongoose.Schema(
	{
		_id: { type: Number },
		title: { type: String, required: true },
		content: { type: String, required: true },
		isPriority: { type: Boolean, required: true, default: false },
		// userID: { type: mongoose.Types.ObjectId, ref: 'users' },
	},
	{ timestamps: true }
)
postSchema.plugin(autoIncrement.plugin, 'posts')
module.exports = mongoose.model('posts', postSchema)
