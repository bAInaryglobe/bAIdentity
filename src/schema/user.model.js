"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    twofa: {
        type: String,
        required: false // Marked as optional
    }
    // ... other fields as needed
});
exports.default = mongoose_1.default.model('User', userSchema);
// const mongoose = require('mongoose');
//
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     twofa: {
//         type: String,
//         required: false
//     }
//
//     // ... other fields as needed
// });
//
// module.exports = mongoose.model('User', userSchema);
