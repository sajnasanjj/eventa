const express = require('express');
const router = express.Router();
const { loginAdmin,registerAdmin,getUser} = require('../controllers/adminController');
// const { protect } = require('../middleware/adminAuthMiddleware')

router.post('/adminregister',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.get('/getUser',getUser)

module.exports = router;
  