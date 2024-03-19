import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
// ... other imports for OTP if needed

// User Interface with optional fields
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    twoFactorEnabled: boolean;
    lastLogin: Date;
    twoFactorBackupCode?: string; // Optional
    totpKey?: string; // Optional
    nin?: string; // Optional NIN
}

const userSchema = new Schema<IUser>({
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
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash if modified

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    if (this._id) {
        this.lastLogin = new Date();
    }

    next();
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;























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
