const express = require('express')
const router = express.Router()

// [CRUD] Posts
router.use('/posts', require('./v1/posts.route'))

// [CRUD] Users & Auth
router.use('/user', require('./v1/users.route'))

module.exports = router
