const userModel = require('../models/userModel.js');

// register 
exports.registerController = async (req, res) => {
   try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
         return res.status(400).send({
            success: false,
            msg: "Please fill all the fields"
         })
      }
   }
   catch (error) {
      console.log(error);
      return res.status(500).send({
         msg: 'Error in register',
         success: false,
      });
   }
};


// login 
exports.loginController = () => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).send({
            success: false,
            msg: "Please fill all the fields"
         })
      }
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
      
   }
   catch (error) {
      console.log(error);
      return res.status(500).send({
         msg: 'Error in get all users',
         success: false,
      });
   }
};
