const express = require('express')
const router = express.Router()
const { GetManyUsers } = require('../../controllers/v1/user.controller')

/**
 *
 *
 *
 *
 * @method [GET] v1/user
 * @method [POST] v1/signup
 *
 *
 *
 *
 */

router.post('/user', GetManyUsers)
// router.post('/signup', SignUp)

module.exports = router
