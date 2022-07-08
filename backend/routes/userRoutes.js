const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getUser} = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/logins',loginUser)

router.get('/getUser',getUser)





  
module.exports = router;
 