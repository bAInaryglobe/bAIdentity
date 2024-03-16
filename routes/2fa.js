"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ... imports
router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP);
router.post('/2fa/webauthn/register', ensureAuthenticated, registerWebAuthn);
// TOTP Setup
router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP);
//
// // WebAuthn Registration
// router.post('2fa/webauthn/register', ensureAuthenticated, registerWebAuthn);
function ensureAuthenticated(req, res, next) {
    // Your authentication logic here
    if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}
// ... inside setupTOTP
function setupTOTP(req, res, next) {
    // Access the setup data: req.body.secret
    // ... your setup logic
}
// ... similar routes for login using WebAuthn, TOTP verification, etc.
