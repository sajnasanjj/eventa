const express = require('express');
const router = express.Router();
const { loginAdmin,getMe } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware')

router.post('/login',loginAdmin)
router.post('/profile',protect,getMe)

module.exports = router;
  