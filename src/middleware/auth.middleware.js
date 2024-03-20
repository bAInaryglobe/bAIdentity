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
const auth_models_1 = __importDefault(require("../models/auth.models"));
const user_model_1 = __importDefault(require("../models/user.model")); // Assuming you have a User model
const HttpError_1 = require("../utils/HttpError"); // Assuming an HttpError class
//
// interface User {
//     // Define the properties of your User object
//     username: string;
//     email: string;
//     // Add other properties as needed
// }
// Middleware for basic authentication
function isAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionToken = req.cookies.sessionToken; // Example: retrieve from cookie
        if (!sessionToken) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        try {
            const session = yield auth_models_1.default.findOne({ token: sessionToken });
            if (!session) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            // Fetch the associated user:
            req.user = yield user_model_1.default.findById(session.userId); // Assuming you have a User model
            next(); // Proceed if the session is valid
        }
        catch (error) {
            console.error('Session Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.isAuthenticated = isAuthenticated;
// function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
//     // ... your authentication logic
//     // Access the User object on the request if needed: req.user as User
// }
//
// function isAdmin(req: Request, res: Response, next: NextFunction): void {
//     // ... your admin check logic
// }
//
function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.user) { // Ensure user was fetched by 'isAuthenticated'
            return next(new HttpError_1.HttpError(401, 'Unauthorized'));
        }
        if (!req.user.isAdmin) {
            return next(new HttpError_1.HttpError(403, 'Forbidden'));
        }
        next();
    });
}
exports.isAdmin = isAdmin;
//
// function requiresMultiFactorAuth(req: Request, res: Response, next: NextFunction): void {
//     // ... your MFA logic
// }
// ... your User model, assuming it has 'mfaEnabled' property
function requiresMultiFactorAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.user) {
            return next(new HttpError_1.HttpError(401, 'Unauthorized'));
        }
        if (!req.user.mfaEnabled) {
            // Handle the case where MFA is not enabled for the user
            return next(new HttpError_1.HttpError(400, 'MFA not enabled for this user'));
        }
        // Placeholder - your MFA verification logic would go here
        const mfaCode = req.body.mfaCode; // Assuming code sent in the request
        if (!isValidMfaCode(mfaCode, req.user)) {
            return next(new HttpError_1.HttpError(401, 'Invalid MFA code'));
        }
        // MFA success!
        // ... update session or user data if needed
        next();
    });
}
exports.requiresMultiFactorAuth = requiresMultiFactorAuth;
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
//
//
// import mongoose, { Schema, Document } from 'mongoose';
// import bcrypt from 'bcrypt';
// ... other imports and interfaces
const userSchema = new Schema({
// ... your existing schema fields ...
});
// Hash password before saving
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... your existing password hashing logic ...
        // Update lastLogin (only if user is already present in the database)
        if (this._id) {
            this.lastLogin = new Date();
        }
        next();
    });
});
const User = mongoose.model('User', userSchema);
exports.default = User;
