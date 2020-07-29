const express = require('express')
const router = express.Router()
const jwt = require('../midlerwares/verifyToken')

const { get, create } = require('../controllers/post.controller')

router.get('/', jwt, get)
router.post('/', create)

module.exports = router
