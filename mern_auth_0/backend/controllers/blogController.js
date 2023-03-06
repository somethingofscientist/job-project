import Blog from '../models/Blog.js';
import User from '../models/User.js';
import { compare, hash } from '../helper/authHelper.js';
import JWT from 'jsonwebtoken';


// creating blogs
export const createBlogController = async (req, res) => {
   try {
      const blogs = await Blog.create({ ...req.body })
      return res.status(200).send({ blogs })
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in creating blogs',
         error: error.message
      });
   }
}

// updating blogs
export const updateBlogController = async (req, res) => {
   try {
      const blogs = await Blog.findById(req.param.id);
      // console.log(blogs , req.user.id)
      // if (blogs.userId.toString() !== req.user.id) {
      //    return res.status(500).send({ message: 'You cannot authorize to update this post' })
      // }

      const updateBlog = await Blog
      .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .populate("userId", '-password')

      return res.status(200).send({ updateBlog })
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in update blogs',
         error: error.message
      });
   }
}

// updateBlogByLikeController blogs
// -----> 0 -----> not working  
export const LikeController = async (req, res) => {
   try {
      const blogs = await Blog.findById(req.param.id);
      // if (blogs.likes.includes(req.user.id)) {
      //    // blogs.likes = blogs.likes.filter((userId) => userId !== req.user.id)
      //    await blogs.save();

      //    return res.status(200).json({msg: "Unlike the post"});
      // }
      // else{
      //    blogs.likes.push(req.user.id)
      //    await blogs.save()
      //    return res.status(200).json({msg: "Like the post"});
      // }
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in update likes blogs',
         error: error.message
      });
   }
}


// updateBlogByLikeController blogs
export const deleteBlogController = async (req, res) => {
   try {
      const blogs = await Blog.findById(req.param.id);
      if(!blogs){
         return res.status(200).send({msg : "Already Deleted"})
      }
      // if (blogs.userId !== req.user.id) {
      //    return res.status(402).send({ message: 'You cannot authorize to delete this post' })
      // }

      await Blog.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'deleted this blog' })
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in delete blogs',
         error: error.message
      });
   }
}


// getting all blogs
export const getBlogController = async (req, res) => {
   try {
      const blogs = await Blog.find({})
      // if (!blogs) {
      //    return res.status(404).send({ message: "No Blog Found" })
      // }
      return res.status(200).send({ blogs })
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in getting blogs',
         error: error.message
      });
   }
}

// getting single blog 
export const getSingleBlogController = async (req, res) => {
   try {
      const singleBlog = await Blog.findById(req.params.id).populate("userId", '-password')
      if (!singleBlog) {
         return res.status(400).send({ message: "No Blogs Found " })
      }
      singleBlog.views += 1
      await singleBlog.save();
      return res.status(200).json(singleBlog)
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in getting single blog',
         error: error.message
      });
   }
}


// getting featured blog 
export const getFeaturedBlogController = async (req, res) => {
   try {
      const blog = await Blog.find({ featured: true }).populate("userId", '-password').limit(3)

      return res.status(200).json(blog)
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in getting featured blog',
         error: error.message
      });
   }
}
