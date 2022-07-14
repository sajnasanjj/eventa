const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin, getUser, getBanner, getBannerDetails, editBanner, deleteBanner,
     getGallary, getGallaryDetails, editGallary, deleteGallary} = require('../controllers/admin/adminController');
const { addService,getService,editService,deleteService} = require('../controllers/admin/serviceContoller')
// const { protect } = require('../middleware/adminAuthMiddleware')

router.post('/adminregister', registerAdmin)
router.post('/adminlogin', loginAdmin)

router.get('/getUser', getUser)
router.post('/addBanner', getBanner)
router.get('/getBanner', getBannerDetails)
router.put('/editBanner/:id', editBanner)
router.delete('/deleteBanner/:id', deleteBanner)

router.post('/getGallary', getGallary)
router.get('/getGallaryDetails', getGallaryDetails)
router.put('/editGallary/:id', editGallary)
router.delete('/deleteGallary/:id', deleteGallary)

router.get('/getService',getService)
router.post('/addService',addService)
router.put('/editService/:id',editService)
router.delete('/deleteService/:id',deleteService)


module.exports = router;
