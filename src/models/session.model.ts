import mongoose, { Schema, Document } from 'mongoose';

// Interface for a Session document
export interface ISession extends Document {
    userId: string; // Reference to the associated user
    token: string; // Unique session token
    createdAt: Date;
    expiresAt: Date;
    // Other optional fields: userAgent, ipAddress, ...
}

const sessionSchema: Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: () => calculateExpiry(), required: true },
});

// Helper function to calculate expiry with custom logic
function calculateExpiry(): Date {
    const now = new Date();
    now.setDate(now.getDate() + 7); // Example: Session expires in 7 days
    return now;
}

export default mongoose.model<ISession>('Session', sessionSchema);
