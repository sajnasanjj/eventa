const express = require('express');
const router = express.Router();
const { loginAdmin,registerAdmin,getUser,getBanner,getBannerDetails,editBanner,deleteBanner,getGallary,getGallaryDetails, editGallary, deleteGallary} = require('../controllers/adminController');
// const { protect } = require('../middleware/adminAuthMiddleware')

router.post('/adminregister',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.get('/getUser',getUser)
router.post('/getBanner',getBanner)
router.get('/getBanner',getBannerDetails)
router.put('/editBanner/:id',editBanner)
router.delete('/deleteBanner/:id',deleteBanner)
router.post('/getGallary',getGallary)
router.get('/getGallaryDetails',getGallaryDetails)
router.put('/editGallary/:id',editGallary)
router.delete('/deleteGallary/:id',deleteGallary)


module.exports = router;
  