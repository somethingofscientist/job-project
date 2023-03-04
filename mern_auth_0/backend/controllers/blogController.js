import Blog from '../models/Blog.js';
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
      if (blogs.userId !== req.user.id) {
         return res.status(500).send({ message: 'You cannot authorize to update this post' })
      }

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
export const updateBlogByLikeController = async (req, res) => {
   try {
      const blogs = await Blog.findById(req.param.id);
      if (blogs.userId !== req.user.id) {
         return res.status(500).send({ message: 'You cannot authorize to update this post' })
      }

      const updateBlog = await Blog
      .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .populate("userId", '-password')

      return res.status(200).send({ updateBlog })
   }
   catch (error) {
      console.log(error.message)
      res.status(500).send({
         message: 'error in update likes blogs',
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
