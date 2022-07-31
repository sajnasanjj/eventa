const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin, getUser, changeUserStatus, getBanner, getBannerDetails, editBanner, deleteBanner,
     addGallery, getGalleryDetails, editGallery, deleteGallery, addService, getService, editService, deleteService,
     getAlbum, addAlbum, editAlbum, deleteAlbum } = require('../controllers/admin/adminController');
// const { protect } = require('../middleware/adminAuthMiddleware')

router.post('/adminregister', registerAdmin)
router.post('/adminlogin', loginAdmin)
//.......user
router.get('/getUser', getUser)
router.put('/changeUserStatus/:id', changeUserStatus)
//.........banner
router.post('/addBanner', getBanner)
router.get('/getBanner', getBannerDetails)
router.put('/editBanner/:id', editBanner)
router.delete('/deleteBanner/:id', deleteBanner)
//.....Gallery
router.post('/addGallery',addGallery)
router.get('/getGallery', getGalleryDetails)
router.put('/editGallery/:id', editGallery)
router.delete('/deleteGallery/:id', deleteGallery)
//......Service
router.get('/getService', getService)
router.post('/addService', addService)
router.put('/editService/:id', editService)
router.delete('/deleteService/:id', deleteService)
//......Album
router.get('/getAlbum', getAlbum)
router.post('/addAlbum', addAlbum)
router.put('/editAlbum/:id', editAlbum)
router.delete('/deleteAlbum/:id', deleteAlbum)

module.exports = router;
