import { Request, Response, NextFunction, Router } from 'express';
import { ensureAuthenticated } from '../middleware/auth'; // Assuming auth middleware

// Interfaces for requests
interface TOTPSetupRequest {
    secret: string;
    // ... other TOTP setup properties
}

interface WebAuthnRegisterRequest {
    // ... WebAuthn registration properties
}

// 2FA Router for better organization
const twoFARouter: Router = Router();

// 1. TOTP Endpoints
twoFARouter.post('/totp/setup', ensureAuthenticated, setupTOTP);
twoFARouter.post('/totp/verify', ensureAuthenticated, verifyTOTP); // Example additional endpoint

// 2. WebAuthn Endpoints
twoFARouter.post('/webauthn/register', ensureAuthenticated, registerWebAuthn);
twoFARouter.post('/webauthn/login', ensureAuthenticated, loginWebAuthn); // Example

// ... other 2FA endpoints

// Handlers with improved typing
function setupTOTP(req: Request<unknown, unknown, TOTPSetupRequest>, res: Response, next: NextFunction) {
    // ... setup logic using req.body
}

function registerWebAuthn(req: Request<unknown, unknown, WebAuthnRegisterRequest>, res: Response, next: NextFunction) {
    // ... registration logic using req.body
}

// ... similar handlers for other 2FA methods

export default twoFARouter;
























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
