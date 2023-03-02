
import User from '../models/User.js';
import { hash } from '../helper/authHelper.js';

export const registerController = async (req, res) => {
   try {
      const { name, email, password } = req.body
      if (!name || !email || !password) {
         return res.status(400).send('All Fields Are Mandatory')
      }

      // existing user
      const existingUser = await User.findOne({ email })
      if (existingUser) {
         return res.status(400).send('Already Registered :( ')
      }

      const hashedPassword = await hash(password)
      // save
      const user = await new User({ name, email, password: hashedPassword }).save();

      res.status(201).send({
         status: true,
         message: "user created",
         user
      })

   } catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in registration',
         error: error.message
      });
   }
}