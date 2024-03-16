import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Prefer the 'import' syntax
dotenv.config(); // Load environment variables

const connectDB = async (): Promise<void> => { // Added return type
    try {
        await mongoose.connect(process.env.MONGODB_URI || ''); // Handle missing URI
        console.log('MongoDB Connected!');
    } catch (err: unknown) { // Generalize the error type
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;






























// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables
//
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log('MongoDB Connected!');
//     } catch (err) {
//         console.error(err);
//         process.exit(1); // Exit with an error
//     }
// }
//
// module.exports = connectDB;
