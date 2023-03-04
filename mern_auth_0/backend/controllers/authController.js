
import User from '../models/User.js';
import { compare, hash } from '../helper/authHelper.js';
import JWT from 'jsonwebtoken';



export const registerController = async (req, res) => {
   try {
      const { username, email, password } = req.body
      if (!username || !email || !password) {
         return res.status(400).send('All Fields Are Mandatory')
      }

      // existing user
      const existingUser = await User.findOne({ email })
      if (existingUser) {
         return res.status(409).send({msg : "Already Registered" })
      }

      const hashedPassword = await hash(password)
      // save
      const user = await new User({ username, email, password: hashedPassword }).save();
      // token
      const token = await JWT.sign({ _id: user._id }, process.env.secret, { expiresIn: '7d' })

      res.status(201).send({
         status: true,
         message: "user created",
         user,
         token
      })

   } catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in registration',
         error: error.message
      });
   }
}

// LOGIN
export const loginController = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).send('All Fields Are Mandatory :( ')
      }

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).send('Email is not registered')
      }

      const match = await compare(password, user.password)
      if (!match) {
         return res.status(404).send('Email or password is wrong')
      }

      // token
      const token = await JWT.sign({ _id: user._id }, process.env.secret, { expiresIn: '7d' })

      return res.status(200).send({
         status: true,
         message: "Login in Successful",
         user: {
            username: user.username,
            email: user.email,
         },
         token,
      })

   } catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in registration',
         error: error.message
      });
   }
}


export const testController = (req, res) => {
   res.send('protected routes')
}
