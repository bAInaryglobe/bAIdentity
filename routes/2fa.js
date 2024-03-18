"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth"); // Assuming auth middleware
// 2FA Router for better organization
const twoFARouter = (0, express_1.Router)();
// 1. TOTP Endpoints
twoFARouter.post('/totp/setup', auth_1.ensureAuthenticated, setupTOTP);
twoFARouter.post('/totp/verify', auth_1.ensureAuthenticated, verifyTOTP); // Example additional endpoint
// 2. WebAuthn Endpoints
twoFARouter.post('/webauthn/register', auth_1.ensureAuthenticated, registerWebAuthn);
twoFARouter.post('/webauthn/login', auth_1.ensureAuthenticated, loginWebAuthn); // Example
// ... other 2FA endpoints
// Handlers with improved typing
function setupTOTP(req, res, next) {
    // ... setup logic using req.body
}
function registerWebAuthn(req, res, next) {
    // ... registration logic using req.body
}
// ... similar handlers for other 2FA methods
exports.default = twoFARouter;
// import { Request, Response, NextFunction } from 'express';
//
// type RequestHandler = (req: Request, res: Response, next: NextFunction) => void
//
// // ... imports
//
//
// router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP as RequestHandler);
// router.post('/2fa/webauthn/register', ensureAuthenticated, registerWebAuthn as RequestHandler);
//
//
// // TOTP Setup
// router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP);
// //
// // // WebAuthn Registration
// // router.post('2fa/webauthn/register', ensureAuthenticated, registerWebAuthn);
//
//
// function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
//     // Your authentication logic here
//     if (!req.isAuthenticated()) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }
//     next();
// }
//
//
//
//
// interface TOTPSetupRequest {
//     secret: string; // Example
//     // ... other properties
// }
//
// // ... inside setupTOTP
// function setupTOTP(req: Request<unknown, unknown, TOTPSetupRequest>, res: Response, next: NextFunction) {
//     // Access the setup data: req.body.secret
//     // ... your setup logic
// }
//
// // ... similar routes for login using WebAuthn, TOTP verification, etc.
//
//
//
//
