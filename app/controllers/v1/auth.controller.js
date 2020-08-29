const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require(`${global.MODEL}/users.model`)

// @method [POST] check User and respone TOKEN
async function SignIn(req, res) {
  // check email and password is exist
  try {
    const user = await UserModel.findOne({ email: req.body.email })
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    console.log(req.body.password, user.password)
    if (!user || !validPassword) return res.status(400).send({ message: 'Email or password is not already exist' })
    // create token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send({
      token: token,
      email: user.email,
    })
  } catch (error) {
    res.status(400).send(error)
  }
}

// @method [POST] register user
async function SignUp(req, res) {
  // check email exist
  const emailExist = await UserModel.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send({ message: 'Email already exist' })
  // has password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  // create new user
  const user = await new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  })
  try {
    // save
    await UserModel.create(user)
    res.status(200).send({ status: 'success' })
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  SignIn,
  SignUp,
}
