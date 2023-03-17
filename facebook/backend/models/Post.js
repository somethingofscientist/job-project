const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   userId: {
      type: Stirng,
      required: true
   },
   desc: {
      type: Stirng,
      required: true,
      min:1,
      max:100
   },
   imageUrl: {
      type:String,
      required:true,
   },
   likes: {
      type:[String],
      default:[]
   }
}, {timestamps:true})

module.exports = mongoose.model("Post", postSchema)