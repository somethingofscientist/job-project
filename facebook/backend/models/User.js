const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: Stirng,
      required: true,
      unique: true
   },
   password: {
      type: Stirng,
      required: true
   },
   profilePic: {
      type: Stirng,
      default: ''
   },
   coverPic: {
      type: Stirng,
      default: ''
   },
   followers: {
      type:[String],
      default:[]
   },
   followings: {
      type:[String],
      default:[]
   },
}, {timestamps:true})

module.exports = mongoose.model("User", userSchema)