import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    twofa?: string; // Optional twofa field

    // ... other fields as needed
}

const userSchema: Schema = new mongoose.Schema<IUser>({ // Use our interface
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
        required: false  // Marked as optional
    }

    // ... other fields as needed
});

export default mongoose.model<IUser>('User', userSchema);


























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
