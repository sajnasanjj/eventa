const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/profile',protect,getMe)



  
module.exports = router;
 