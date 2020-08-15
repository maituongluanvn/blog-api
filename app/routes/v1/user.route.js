const express = require('express')
const router = express.Router()
const { GetManyUsers } = require(`${global.CONTROLLER_V1}/user.controller`)

/**
 * @method [GET] v1/user
 * @method [POST] v1/signup
 */
router.get('/', GetManyUsers)
// router.post('/signup', SignUp)

module.exports = router
