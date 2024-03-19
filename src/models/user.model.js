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
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Sanitize whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Normalize email
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8 // Enforce a minimum length
    },
    twoFactorEnabled: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date
    },
    twoFactorBackupCode: {
        type: String
    },
    totpKey: {
        type: String
    },
    nin: {
        type: String
    }
});
// Hash password before saving (using pre-save middleware)
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return next(); // Only hash if modified
        const salt = yield bcrypt_1.default.genSalt(10);
        this.password = yield bcrypt_1.default.hash(this.password, salt);
        if (this._id) {
            this.lastLogin = new Date();
        }
        next();
    });
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
// import mongoose, { Schema, Document } from 'mongoose';
// import bcrypt from 'bcrypt';
//
// // Define interfaces for your data structures
// interface IUser extends Document {
//     username: string;
//     email: string;
//     password?: string; // Optional for alternative auth methods
//     webauthnCredentials: Array<object>; // Replace 'Object' with a suitable interface if you have one
//     totpSecret?: string;
//     products: Array<mongoose.Schema.Types.ObjectId>; // Array of Product IDs
//
//     // ... other fields
// }
//
// const userSchema = new mongoose.Schema<IUser>({ // Use our interface
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String },
//     webauthnCredentials: [Object],
//     totpSecret: { type: String },
//     products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
//
//     // ... other fields
// });
//
// // Hash password (if using traditional auth)
// userSchema.pre('save', async function(this: IUser, next) { // Adjust 'this' type
//     if (this.password && this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });
//
// export default mongoose.model<IUser>('User', userSchema);
//
//
//
//
//
//
//
//
//
//
