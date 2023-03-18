const blogModel = require('../models/blogModel.js');
const userModel = require('../models/userModel.js');
const mongoose = require('mongoose');

// get all blogs
exports.getAllBlogController = async (req, res) => {
   try {
      const blogs = await blogModel.find({});
      if (!blogs) {
         return res.status(200).send({
            success: false,
            msg: "No Blog Found"
         })
      }
      return res.status(200).send({
         success: true,
         BlogCount: blogs.length,
         msg: 'All Blogs',
         blogs
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in get all blogs',
         error: error.message,
         success: false,
      });
   }
}

// create 
exports.createBlogController = async (req, res) => {
   try {
      const { title, image, description, user } = req.body;
      if (!title || !image || !description || !user) {
         return res.status(400).send({ success: false, msg: "All fields are mandatory" })
      }
      const existingUser = await userModel.findById(user)
      if (!existingUser) {
         return res.status(404).send({
            success: false,
            msg: 'Unable to find user'
         })
      }

      const newBlog = new blogModel({ title, description, image, user })
      const session = await mongoose.startSession();
      session.startTransaction();
      await newBlog.save({ session })
      existingUser.blogs.push(newBlog)
      await existingUser.save({ session })
      await session.commitTransaction()

      await newBlog.save();

      return res.status(201).send({
         success: true,
         msg: "Blog created",
         newBlog
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in create blog',
         error: error.message,
         success: false,
      });
   }
};

// get single blog
exports.getSingleBlogController = async (req, res) => {
   try {
      const { id } = req.params;
      const blog = await blogModel.findById(id);
      if (!blog) {
         return res.status(400).send({
            success: false,
            msg: "No blog found"
         })
      }
      return res.status(200).send({
         success: true,
         msg: "fetched single blog",
         blog
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in get single blog',
         error: error.message,
         success: false,
      });
   }
};

// update blog
exports.updateBlogController = async (req, res) => {
   try {
      const { id } = req.params;
      const { title, description, image } = req.body;
      const blog = await blogModel.findByIdAndUpdate(
         id,
         { ...req.body },
         { new: true }
      )
      return res.status(200).send({
         success: true,
         msg: "Blog updated",
         blog
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in update blog',
         error: error.message,
         success: false,
      });
   }
};


exports.deleteBlogController = async (req, res) => {
   try {
      const blog = await blogModel.findByIdAndDelete(req.params.id).populate("user")
      await blog.user.blogs.pull(blog)
      await blog.user.save()
      return res.status(200).send({
         success: true,
         msg: 'Blog deleted',
         blog
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in delete blog',
         error: error.message,
         success: false,
      });
   }
};

exports.userGetBlogController = async (req, res) => {
   try {
      const userBlog = await userModel.findById(req.params.id).populate("blogs")
      if (!userBlog) {
         return res.status(404).send({
            success: false,
            msg: 'blog not found'
         })
      }
      return res.status(200).send({
         success: true,
         msg: 'blog found',
         userBlog
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).send({
         msg: 'Error in last user blogcontroller',
         error: error.message,
         success: false,
      });
   }
}