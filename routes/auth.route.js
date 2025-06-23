const authController = require('../controllers/auth.controller');
const validateUser = require('../middlewares/user.validator');
const express = require('express');
const router = express.Router();



router.post('/register', validateUser.registerValidator, authController.registerUser);
router.post('/login', validateUser.loginValidator, authController.loginUser);

module.exports = router;