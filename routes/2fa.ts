import { Request, Response, NextFunction } from 'express';

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void

// ... imports


router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP as RequestHandler);
router.post('/2fa/webauthn/register', ensureAuthenticated, registerWebAuthn as RequestHandler);


// TOTP Setup
router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP);
//
// // WebAuthn Registration
// router.post('2fa/webauthn/register', ensureAuthenticated, registerWebAuthn);


function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
    // Your authentication logic here
    if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}




interface TOTPSetupRequest {
    secret: string; // Example
    // ... other properties
}

// ... inside setupTOTP
function setupTOTP(req: Request<unknown, unknown, TOTPSetupRequest>, res: Response, next: NextFunction) {
    // Access the setup data: req.body.secret
    // ... your setup logic
}

// ... similar routes for login using WebAuthn, TOTP verification, etc.




