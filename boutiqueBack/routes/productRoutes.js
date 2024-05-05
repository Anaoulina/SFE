const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.post('/addproduct', productController.addProduct);
router.post('/removedproduct', productController.removeProduct);
router.get('/allproducts', productController.getAllProducts);
router.get('/product/:id' , productController.getProductById);

module.exports = router;
