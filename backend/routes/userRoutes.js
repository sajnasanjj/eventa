const express = require('express');
const { editBanner,deleteBanner,getGallaryDetails } = require('../controllers/adminController');

const router = express.Router();
const { registerUser,loginUser,getUser,getBanner} = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/logins',loginUser)

router.get('/getUser',getUser)
router.get('/banner',getBanner)
router.put('/editBanner',editBanner)
router.delete('/deleteBanner',deleteBanner)
router.get('/getGallery',getGallaryDetails)



  
module.exports = router;
 