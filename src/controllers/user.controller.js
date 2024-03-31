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
const user_model_1 = __importDefault(require("../models/user.model")); // Assuming User is your Mongoose model interface
// ... other imports ...
function getUserPhoneNumber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate userId from query parameters ...
        // ... Fetch user from database by userId...
        // ... Return phoneNumber or handle errors (not found, etc.) ..
    });
}
function changeUserPhoneNumber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate data from request body ...
        // ... Check if newPhoneNumber is valid (format) ...
        // ... Update user with newPhoneNumber in database ...
        // ... Return success or handle errors ...
    });
}
// ... other imports ...
function getUserEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate userId from query parameters ...
        // ... Fetch user from database by userId...
        // ... Return email or handle errors (not found, etc.) ..
    });
}
function changeUserEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate data from request body ...
        // ... Check if newEmail is valid (format) ...
        // ... Check if newEmail is already taken ...
        // ... Update user with new email in database ...
        // ... Return success or handle errors (conflict, etc.) ...
    });
}
// ... other imports ...
function getUserIdByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate username from query parameters ...
        // ... Fetch user from database by username...
        // ... Return userId or handle errors (not found, etc.) ...
    });
}
function changeUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... Validate data from request body ...
        // ... Check if newUsername is already taken ...
        // ... Update user in database ...
        // ... Return success or handle errors (conflict, etc.) ...
    });
}
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_model_1.default(req.body);
        yield user.save();
        res.status(201).json({ message: 'User created!' });
    }
    catch (error) { // Generalize the error type
        if (error instanceof Error) { // Check if it's a standard Error
            res.status(400).json({ error: error.message });
        }
        else {
            console.error(error); // For unexpected errors
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
});
// ... other controller functions
