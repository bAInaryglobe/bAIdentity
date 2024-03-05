// ... imports

// TOTP Setup
router.post('/2fa/totp/setup', ensureAuthenticated, setupTOTP);

// WebAuthn Registration
router.post('2fa/webauthn/register', ensureAuthenticated, registerWebAuthn);


// ... similar routes for login using WebAuthn, TOTP verification, etc.




