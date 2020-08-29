const express = require('express')
const router = express.Router()
const { GetManyUsers, GetOneUserByID, UpdateProfileUserByUser } = require(`${global.CONTROLLER_V1}/user.controller`)

/**
 * @method [GET] v1/user
 * @method [GET] v1/user/:_id
 */
router.get('/', GetManyUsers)
router.get('/:_id', GetOneUserByID)
router.get('/:_id/update', UpdateProfileUserByUser)

module.exports = router
