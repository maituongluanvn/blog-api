const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../../db')

// @method [POST] check User and respone TOKEN
async function SignIn(req, res) {
  // check email and password is exist
  try {
    const user = await UserModel.findOne({ where: { email: req.body.email } })
    // const user = await UserModel.findOne({ email: req.body.email })
    const validPassword = await bcrypt.compare(req.body.password, user.password)
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
  try {
    const emailExist = await pool.query(`select * from users where email = '${req.body.email}'`)
    if (emailExist.rowCount > 0) return res.status(400).send({ message: 'Email already exist' })
  } catch (err) {
    console.log(err)
  }
  // has password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  try {
    await pool.query(`INSERT INTO users (email, password, name) VALUES ('${req.body.email}','${hashedPassword}','${req.body.name}')`)
    // save
    res.status(200).send({ status: true })
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  SignIn,
  SignUp,
}
