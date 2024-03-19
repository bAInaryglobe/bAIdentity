import express, { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { registerUser, loginUser } from '../controllers/authController';
import { ensureAuthenticated } from '../middleware/auth';
import sessionValidationMiddleware from '../middleware/session.middleware';


// # Configure the authentication routes
// const authRouter: Router = express.Router();
//
// // ... original auth routes...
//
// // 2FA Routes
// const twoFARouter: Router = Router();
// twoFARouter.post('/totp/setup', ensureAuthenticated, setupTOTP);
// // ... other 2FA routes
//
// authRouter.use('/2fa', twoFARouter);
//
// // ... session routes if needed ...
//
// export default authRouter;



// 2FA Router for better organization
const authRouter: Router = express.Router(); // Main router for auth

// Existing Routes (from auth.ts)
authRouter.post('/register', registerUser);
authRouter.post('/login', passport.authenticate('local'), loginUser);

// 2FA Routes (from 2fa.ts)
const twoFARouter: Router = Router();
twoFARouter.post('/totp/setup', ensureAuthenticated, setupTOTP);

// ... (Add your 2FA routes here from 2fa.ts)

authRouter.use('/2fa', twoFARouter);

// Session Routes (if needed)
const sessionRouter: Router = Router();

// ... (Add any session-specific routes if needed)
authRouter.use('/session', sessionRouter);

export default authRouter;



