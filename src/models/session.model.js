"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const sessionSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: () => calculateExpiry(), required: true },
});
// Helper function to calculate expiry with custom logic
function calculateExpiry() {
    const now = new Date();
    now.setDate(now.getDate() + 7); // Example: Session expires in 7 days
    return now;
}
exports.default = mongoose_1.default.model('Session', sessionSchema);
