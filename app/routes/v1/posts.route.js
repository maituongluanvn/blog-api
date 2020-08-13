const express = require('express')
const router = express.Router()
const jwt = require('../../middlewares/verifyToken')

const { GetListPosts, create } = require('../../controllers/v1/post.controller')

/** GET /post - Get post list */
router.get('/', jwt, GetListPosts)

/** POST /post - Create one post */
// router.post('/', create)

module.exports = router
