import express from 'express';
import { 
   createProductController, 
   getProductController, 
   getSingleProductController,
   productPhotoController,
 } from '../controllers/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)
router.get('/get-product', getProductController)
router.get('/get-single-product/:slug', getSingleProductController)
router.get('/product-photo/:pid', productPhotoController)

export default router;