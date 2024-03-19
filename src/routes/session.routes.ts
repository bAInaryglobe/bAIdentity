// src/routes/user.routes.ts
import express from 'express';
import sessionValidationMiddleware from '../middleware/session.middleware';


const router = express.Router();


// Routes that require session validation
router.get('/profile', sessionValidationMiddleware, (req, res) => {
    // Access session data: req.session
    // ... your route logic
});


router.post('/update-settings', sessionValidationMiddleware, (req, res) => {
    // ...
});


// Routes that don't require session validation (if any)
router.get('/about', (req, res) => {
    // ...
});


export default router;
