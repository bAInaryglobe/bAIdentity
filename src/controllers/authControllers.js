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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// ... Other necessary imports (e.g., User model)
// Example Authentication Middleware (replace as needed)
const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // ... Token validation logic
});
// Registration
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, confirmPassword } = req.body;
        // 1. Input Validation (Passwords match, etc.)
        // 2. Check if the user already exists
        // 3. Hash Password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // 4. Create new User object
        const newUser = yield User.create({
            username,
            password: hashedPassword,
            // ... any other fields
        });
        // 5. Generate and send JWT
        // ... (Logic Below)
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        next(error); // Pass error to middleware for handling
    }
});
exports.registerUser = registerUser;
// Login Endpoint
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // ... Retrieve user from database
        // ... Compare submitted password to hashed password
        // ... Generate JWT (see below)
        res.json({ message: 'Login successful', token });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
// ... Other auth-related functions
// **Helper: Generate JWT**
const generateJWT = (user) => {
    const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
