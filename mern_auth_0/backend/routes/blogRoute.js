import express from 'express';

import {
   getBlogController,
   getSingleBlogController,
   getFeaturedBlogController,
   createBlogController,
   updateBlogController,
   updateBlogByLikeController
} from '../controllers/blogController.js';

import { requireSignIn } from '../middleware/authMiddleware.js';
const router = express.Router();


// blog routes
router.post('/', requireSignIn, createBlogController)
router.put('/updateBlog/:id', requireSignIn, updateBlogController)
router.put('/likeBlog/:id', requireSignIn, updateBlogByLikeController)
router.get('/getall', getBlogController)
router.get('/get/:id', getSingleBlogController)
router.get('/featured', getFeaturedBlogController)

export default router;