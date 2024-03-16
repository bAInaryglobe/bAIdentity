"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post('/register', authController_1.registerUser);
router.post('/login', passport_1.default.authenticate('local'), authController_1.loginUser);
// ... Other routes
exports.default = router;
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const { registerUser, loginUser } = require('../controllers/authController'); // Your own controller file
//
// // Registration
// router.post('/register', registerUser);
//
// // Login
// router.post('/login', passport.authenticate('local'), loginUser);
//
// // ... Other routes (password reset, etc.)
//
// module.exports = router;
