const express = require('express');
const { editBanner,deleteBanner,getGalleryDetails } = require('../controllers/admin/adminController');
// const {addCart,getCart} = require('../controllers/userController')
const router = express.Router();
const { registerUser,loginUser,getUser,getBanner} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware')
const { getOrder,addOrder,getRazorKey,createOrder,verifyPayment } = require('../controllers/paymentController')
router.post('/register',registerUser)
router.post('/logins',loginUser)

router.get('/getUser',getUser)
router.get('/banner',getBanner)
router.put('/editBanner',editBanner)
router.delete('/deleteBanner',deleteBanner)
router.get('/getgallery',getGalleryDetails)

router.post('/addOrder',addOrder)
router.get('/getOrder',getOrder)

// router.get('/getCart',getCart)
// router.post('/addCart',addCart)

router.get('/get-razor-key',getRazorKey);
router.post('/create-order',createOrder);
router.post('/verify-payment',verifyPayment);
module.exports = router;
 