import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define interfaces for your data structures
interface IUser extends Document {
    username: string;
    email: string;
    password?: string; // Optional for alternative auth methods
    webauthnCredentials: Array<object>; // Replace 'Object' with a suitable interface if you have one
    totpSecret?: string;
    products: Array<mongoose.Schema.Types.ObjectId>; // Array of Product IDs

    // ... other fields
}

const userSchema = new mongoose.Schema<IUser>({ // Use our interface
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    webauthnCredentials: [Object],
    totpSecret: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],

    // ... other fields
});

// Hash password (if using traditional auth)
userSchema.pre('save', async function(this: IUser, next) { // Adjust 'this' type
    if (this.password && this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

export default mongoose.model<IUser>('User', userSchema);










