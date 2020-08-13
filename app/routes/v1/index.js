const express = require('express')
const router = express.Router()

// [CRUD] Posts
router.use('/posts', require('./posts.route'))

// [CRUD] Authencation
router.use('/auth', require('./auth.route'))

// [CRUD] Users
router.use('/user', require('./user.route'))

module.exports = router
