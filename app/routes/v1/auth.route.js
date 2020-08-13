const express = require('express')
const router = express.Router()
const { SignIn, SignUp } = require(`${global.CONTROLLER_V1}/auth.controller`)

/**
 * @method [POST] v1/signin
 * @method [POST] v1/signup
 */
router.post('/signin', SignIn)
router.post('/signup', SignUp)

module.exports = router
