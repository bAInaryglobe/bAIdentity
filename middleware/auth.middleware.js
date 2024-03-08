"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresMultiFactorAuth = exports.isAdmin = exports.isAuthenticated = void 0;
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
