const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { fetchUser } = require('../middleware/authMiddleware');


router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/addtocard', fetchUser, userController.addToCart);
router.post('/removefromcart',fetchUser, userController.removeFromCart);
router.post('/getcard',fetchUser, userController.getCartData);




module.exports = router;
