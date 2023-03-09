const express = require('express');
const { 
   getAllBlogController,
   createBlogController,
   getSingleBlogController,
   updateBlogController,
   deleteBlogController,
} = require('../controllers/blogController');
const router = express.Router();


// users
router.get('/all-blog', getAllBlogController)
router.post('/create-blog', createBlogController)
router.get('/single-blog/:id', getSingleBlogController)
router.put('/update-blog/:id', updateBlogController)
router.delete('/delete-blog/:id', deleteBlogController)


module.exports = router;