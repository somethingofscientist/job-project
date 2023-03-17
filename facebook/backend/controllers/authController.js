const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// register
const register = async(req, res) => {
   try {
      const isEmpty = Object.values(req.body).some((v) => !v)
      if (isEmpty) {
         throw new Error("Fill All The Fields!")
      }

      const isExisting = await User.findOne({ username: req.body.username })
      if (isExisting) {
         throw new Error("Username already taken!")
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = await User.create({
         ...req.body,
         password: hashedPassword
      })

      const payload = { id: newUser._id, username: newUser.username };
      const token = jwt.sign(payload, process.env.secret)

      const { password, ...others } = newUser._doc

      return res.status(201).send({
         token,
         others
      })

   } catch (error) {
      res.status(500).send({
         error: error.message,
         msg: 'error occured in the authController --> register'
      })
      console.log(error.message)
   }
}


// login
const login = async (req, res) => {
   try {
      const isEmpty = Object.values(req.body).some((v) => v === '')
      if (isEmpty) {
         throw new Error("Fill All The Fields!")
      }

      const user = await User.findOne({ email: req.body.email })
      if (!user) {
         throw new Error("Wrong Id or Password")
      }

      const comparePass = await bcrypt.compare(req.body.password, user.password)
      if (!comparePass) {
         throw new Error("Wrong Id or Password")
      }

      const payload = {id:user._id, username: user.username}
      const {password, ...others} = user._doc
      const token = jwt.sign(payload, process.env.secret)

      return res.status(200).send({
         others,
         token
      })

   } catch (error) {
      res.status(500).send({
         error: error.message,
         msg: 'error occured in the authController --> login'
      })
      console.log(error.message)
   }
}

module.exports = {register, login} ;