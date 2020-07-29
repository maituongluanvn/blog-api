const express = require('express')
const router = express.Router()


// CRUD Posts
router.use('/posts', require('./posts.route'))



// CRUD Users & Auth
router.use('/user', require('./users.route'))

module.exports = router
