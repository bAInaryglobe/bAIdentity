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
require('dotenv').config();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const conn = yield mongoose_1.default.connect(process.env.MONGO_URI, options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) { // Unknown for broader error catching
        if (error instanceof Error) { // Check if it's an Error object
            console.error(`Error connecting to MongoDB: ${error.message}`);
        }
        else {
            console.error('Unexpected error:', error);
        }
        process.exit(1);
    }
});
exports.default = connectDB;
//
//
//
//
// import mongoose from 'mongoose';
// require('dotenv').config(); // Ensure dotenv is loaded
//
// interface ConnectionOptions {
//     useNewUrlParser: boolean;
//     useUnifiedTopology: boolean;
// }
//
// const connectDB = async () => {
//     try {
//         const options: ConnectionOptions = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         };
//
//         const conn = await mongoose.connect(process.env.MONGO_URI, options);
//
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             console.error(`Error connecting to MongoDB: ${error.message}`);
//         } else {
//             console.error('Unexpected error:', error);
//         }
//         process.exit(1);
//     }
// };
//
// export default connectDB;
