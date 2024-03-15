import { Request, Response, NextFunction } from 'express';

interface User {
    // Add properties of your User object
}

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // ... your authentication logic
    // Access the User object on the request if needed: req.user as User
}

function isAdmin(req: Request, res: Response, next: NextFunction) {
    // ... your admin check logic
}

function requiresMultiFactorAuth(req: Request, res: Response, next: NextFunction) {
    // ... your MFA logic
}

export { isAuthenticated, isAdmin, requiresMultiFactorAuth };