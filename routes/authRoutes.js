const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route untuk registrasi user baru
router.post('/register', authController.register);

// Route untuk login user
router.post('/login', authController.login);

module.exports = router;