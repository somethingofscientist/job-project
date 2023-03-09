const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');


// register 
exports.registerController = async (req, res) => {
   try {
      // getting data from the user
      const { name, email, password } = req.body;
      // validation for the user
      if (!name || !email || !password) {
         return res.status(400).send({
            success: false,
            msg: "Please fill all the fields"
         })
      }
      // existing user
      const existingUser = await userModel.findOne({ email })
      if (existingUser) {
         return res.status(401).send({ msg: 'Already register' })
      }
      const hashedpassword = await bcrypt.hash(password, 10);

      // saving the user
      const user = new userModel({ name, email, password: hashedpassword })
      await user.save();

      return res.status(201).send({
         success: true,
         msg: 'New user created',
         user
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in register',
         error: error.message,
         success: false,
      });
   }
};


// login 
exports.loginController = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(401).send({
            success: false,
            msg: "Please fill all the fields"
         })
      }
      const user = await userModel.findOne({ email })
      if (!user) {
         return res.status(200).send({ msg: 'email is not register' })
      }
      // isMatch
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(401).send({
            success: false,
            msg: "Wrong Email or Password"
         })
      }
      return res.status(200).send({
         success: true,
         msg: "Login successful", 
         user
      })
   }
   catch (error) {
      console.log(error);
      return res.status(500).send({
         msg: 'Error in login',
         success: false,
      });
   }
};


// get all users
exports.getAllUsers = async (req, res) => {
   try {
      const users = await userModel.find({});
      return res.status(200).send({
         userCount: users.length,
         success: true,
         users
      })
   }
   catch (error) {
      console.log(error);
      return res.status(500).send({
         msg: 'Error in get all users',
         success: false,
      });
   }
};
