const {register, login} = require('../controllers/authController.js')

const authRouter = require("express").Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

module.exports = authRouter