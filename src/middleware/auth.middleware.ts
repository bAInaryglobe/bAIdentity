import { Request, Response, NextFunction } from 'express';
import SessionModel from './session.model'; // Assuming your session model file

interface User {
    // Define the properties of your User object
    username: string;
    email: string;
    // Add other properties as needed
}

// Middleware for basic authentication
async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const sessionToken = req.cookies.sessionToken; // Example: retrieve from cookie

    if (!sessionToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const session = await SessionModel.findOne({ token: sessionToken });

        if (!session) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Fetch the associated user:
        req.user = await UserModel.findById(session.userId); // Assuming you have a User model

        next(); // Proceed if the session is valid
    } catch (error) {
        console.error('Session Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    // ... your authentication logic
    // Access the User object on the request if needed: req.user as User
}

function isAdmin(req: Request, res: Response, next: NextFunction): void {
    // ... your admin check logic
}

function requiresMultiFactorAuth(req: Request, res: Response, next: NextFunction): void {
    // ... your MFA logic
}

export { isAuthenticated, isAdmin, requiresMultiFactorAuth };




































//
//
// import { Request, Response, NextFunction } from 'express';
// import SessionModel from './session.model'; // Assuming your session model file
//
// // ... your User interface
//
// // Middleware for basic authentication
// async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
//     const sessionToken = req.cookies.sessionToken; // Example: retrieve from cookie
//
//     if (!sessionToken) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }
//
//     try {
//         const session = await SessionModel.findOne({ token: sessionToken });
//
//         if (!session) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }
//
//         // Fetch the associated user:
//         req.user = await UserModel.findById(session.userId); // Assuming you have a User model
//
//         next(); // Proceed if the session is valid
//     } catch (error) {
//         console.error('Session Error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// ... your other middleware functions (isAdmin, requiresMultiFactorAuth)














// import { Request, Response, NextFunction } from 'express';
//
// interface User {
//     // Add properties of your User object
// }
//
// function isAuthenticated(req: Request, res: Response, next: NextFunction) {
//     // ... your authentication logic
//     // Access the User object on the request if needed: req.user as User
// }
//
// function isAdmin(req: Request, res: Response, next: NextFunction) {
//     // ... your admin check logic
// }
//
// function requiresMultiFactorAuth(req: Request, res: Response, next: NextFunction) {
//     // ... your MFA logic
// }
//
// export { isAuthenticated, isAdmin, requiresMultiFactorAuth };
