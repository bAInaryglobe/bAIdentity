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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
    // ... your user fields like name, email, etc.
    password: {
        type: String,
        required: true,
        select: false
    }
});
// Hash password before saving (pre-save hook)
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.password && this.isModified('password')) { // Only hash if necessary
            this.password = yield bcrypt_1.default.hash(this.password, 10);
        }
        next();
    });
});
exports.default = mongoose_1.default.model('User', UserSchema);
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
//
// const UserSchema = new mongoose.Schema({
//     // ... your user fields like name, email, etc.
//     password: {
//         type: String,
//         required: true,
//         select: false // Prevent returning the password hash by default
//     }
// });
//
// // Hash password before saving (pre-save hook)
// UserSchema.pre('save', async function(next) {
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });
//
// module.exports = mongoose.model('User', UserSchema);
