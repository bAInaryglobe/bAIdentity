"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.routes.ts
const express_1 = __importDefault(require("express"));
const session_middleware_1 = __importDefault(require("../middleware/session.middleware"));
const router = express_1.default.Router();
// Routes that require session validation
router.get('/profile', session_middleware_1.default, (req, res) => {
    // Access session data: req.session
    // ... your route logic
});
router.post('/update-settings', session_middleware_1.default, (req, res) => {
    // ...
});
// Routes that don't require session validation (if any)
router.get('/about', (req, res) => {
    // ...
});
exports.default = router;
