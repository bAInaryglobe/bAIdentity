import express, { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { registerUser, loginUser } from '../controllers/authController';

type AuthRequestHandler = (req: Request, res: Response, next: NextFunction) => void;

const router: Router = express.Router();

router.post('/register', registerUser as AuthRequestHandler);

router.post('/login', passport.authenticate('local'), loginUser as AuthRequestHandler);

// ... Other routes

export default router;






















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
