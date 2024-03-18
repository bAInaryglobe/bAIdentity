"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresMultiFactorAuth = exports.isAdmin = exports.isAuthenticated = void 0;
const session_model_1 = __importDefault(require("./session.model")); // Assuming your session model file
// Middleware for basic authentication
function isAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionToken = req.cookies.sessionToken; // Example: retrieve from cookie
        if (!sessionToken) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        try {
            const session = yield session_model_1.default.findOne({ token: sessionToken });
            if (!session) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            // Fetch the associated user:
            req.user = yield UserModel.findById(session.userId); // Assuming you have a User model
            next(); // Proceed if the session is valid
        }
        catch (error) {
            console.error('Session Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.isAuthenticated = isAuthenticated;
function isAuthenticated(req, res, next) {
    // ... your authentication logic
    // Access the User object on the request if needed: req.user as User
}
exports.isAuthenticated = isAuthenticated;
function isAdmin(req, res, next) {
    // ... your admin check logic
}
exports.isAdmin = isAdmin;
function requiresMultiFactorAuth(req, res, next) {
    // ... your MFA logic
}
exports.requiresMultiFactorAuth = requiresMultiFactorAuth;
// ... your User interface
// Middleware for basic authentication
function isAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionToken = req.cookies.sessionToken; // Example: retrieve from cookie
        if (!sessionToken) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        try {
            const session = yield session_model_1.default.findOne({ token: sessionToken });
            if (!session) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            // Fetch the associated user:
            req.user = yield UserModel.findById(session.userId); // Assuming you have a User model
            next(); // Proceed if the session is valid
        }
        catch (error) {
            console.error('Session Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.isAuthenticated = isAuthenticated;
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
