const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser, loginUser } = require('../controllers/authController'); // Your own controller file

// Registration
router.post('/register', registerUser);

// Login
router.post('/login', passport.authenticate('local'), loginUser);

// ... Other routes (password reset, etc.)

module.exports = router;
