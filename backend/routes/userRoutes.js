const express = require('express');
const { editBanner,deleteBanner,getGalleryDetails } = require('../controllers/admin/adminController');
const {addOrder,getOrder} = require('../controllers/userController')
const router = express.Router();
const { registerUser,loginUser,getUser,getBanner} = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/logins',loginUser)

router.get('/getUser',getUser)
router.get('/banner',getBanner)
router.put('/editBanner',editBanner)
router.delete('/deleteBanner',deleteBanner)


router.get('/getgallery',getGalleryDetails)

router.post('/addOrder',addOrder)
router.get('/getOrder',getOrder)


  
module.exports = router;
 