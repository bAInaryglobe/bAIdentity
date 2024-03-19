"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controllers/authController");
const auth_1 = require("../middleware/auth");
// # Configure the authentication routes
// const authRouter: Router = express.Router();
//
// // ... original auth routes...
//
// // 2FA Routes
// const twoFARouter: Router = Router();
// twoFARouter.post('/totp/setup', ensureAuthenticated, setupTOTP);
// // ... other 2FA routes
//
// authRouter.use('/2fa', twoFARouter);
//
// // ... session routes if needed ...
//
// export default authRouter;
// 2FA Router for better organization
const authRouter = express_1.default.Router(); // Main router for auth
// Existing Routes (from auth.ts)
authRouter.post('/register', authController_1.registerUser);
authRouter.post('/login', passport_1.default.authenticate('local'), authController_1.loginUser);
// 2FA Routes (from 2fa.ts)
const twoFARouter = (0, express_1.Router)();
twoFARouter.post('/totp/setup', auth_1.ensureAuthenticated, setupTOTP);
// ... (Add your 2FA routes here from 2fa.ts)
authRouter.use('/2fa', twoFARouter);
// Session Routes (if needed)
const sessionRouter = (0, express_1.Router)();
// ... (Add any session-specific routes if needed)
authRouter.use('/session', sessionRouter);
exports.default = authRouter;
