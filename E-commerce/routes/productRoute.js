import express from 'express';
import { 
   createProductController, 
   getProductController, 
   getSingleProductController,
   productPhotoController,
   productDeleteController,
   updateProductController,
 } from '../controllers/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)
router.post('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)
router.get('/get-product', getProductController)
router.get('/get-single-product/:slug', getSingleProductController)
router.get('/product-photo/:pid', productPhotoController)
router.delete('/product/:pid', productDeleteController)

export default router;