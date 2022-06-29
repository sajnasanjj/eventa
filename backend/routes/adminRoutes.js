const express = require('express');
const router = express.Router();
const { loginAdmin,registerAdmin,getMe } = require('../controllers/adminController');
const { protect } = require('../middleware/adminAuthMiddleware')


router.post('/adminregister',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.post('/profile',protect,getMe)
module.exports = router;
  