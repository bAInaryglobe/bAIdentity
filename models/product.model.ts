import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    // Other product details (description, pricing, etc.)
}

const productSchema = new mongoose.Schema<IProduct>({
    name: { type: String, required: true, unique: true },
    // ... other product fields
});

export default mongoose.model<IProduct>('Product', productSchema);
