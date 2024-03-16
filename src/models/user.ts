import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
    // ... your user fields like name, email, etc.
    password: string; // Required field
}

const UserSchema: Schema = new mongoose.Schema({
    // ... your user fields like name, email, etc.
    password: {
        type: String,
        required: true,
        select: false
    }
});

// Hash password before saving (pre-save hook)
UserSchema.pre<IUser>('save', async function(this: IUser, next) { // Adjust 'this' type
    if (this.password && this.isModified('password')) { // Only hash if necessary
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

export default mongoose.model<IUser>('User', UserSchema);



























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
