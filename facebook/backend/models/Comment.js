const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
   likes: {
      type: String,
      required: true,
   },
   postId: {
      type: Stirng,
      required: true
   },
   userId: {
      type: Stirng,
      required: true
   },
   likes: {
      type: [String],
      default: []
   }
}, { timestamps: true })

module.exports = mongoose.model("Comment", commentSchema)