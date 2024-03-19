import mongoose, { Schema, Document } from 'mongoose';

// Interface for Device/Browser information
interface DeviceInfo {
    ip: string;
    browser?: string;
    operatingSystem?: string;
    deviceType: 'desktop' | 'mobile' | 'browser';
}

// Interface for Session document
interface ISession extends Document {
    userId: string;
    token: string;
    devices: DeviceInfo[];
    sessionExpiry: {
        default: number; // Default expiry in days
        customizations: {
            [deviceId: string]: number; // Custom expiry per device
        }
    }
    createdAt: Date;
}

const sessionSchema: Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true, unique: true },
    devices: {
        type: [ // Array for multiple devices
            {
                ip: { type: String, required: true },
                browser: String,
                operatingSystem: String,
                deviceType: {
                    type: String,
                    enum: ['desktop', 'mobile', 'browser'],
                    required: true
                }
            }
        ]
    },
    sessionExpiry: {
        default: { type: Number, default: 14 }, // Default 7 days
        customizations: {
            type: Map,
            of: Number, // Value will be expiry in days
        }
    },
    createdAt: { type: Date, default: Date.now }
});



// Helper functions to calculate expiry dates based on device type
function calculateBrowserExpiry(): Date {
    return addDaysToDate(7);
}

function calculateMobileExpiry(): Date {
    return addDaysToDate(30);  // Approximately 1 month
}

function calculateDesktopExpiry(): Date {
    return addDaysToDate(14);  // 2 weeks
}

function addDaysToDate(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}




// When creating or updating a session:
const deviceInfo = {
    // ... your device information
};

if (deviceInfo.deviceType === 'browser') {
    session.sessionExpiry.default = calculateBrowserExpiry().getTime();
} else if (deviceInfo.deviceType === 'mobile') {
    session.sessionExpiry.default = calculateMobileExpiry().getTime();
} else if (deviceInfo.deviceType === 'desktop') {
    session.sessionExpiry.default = calculateDesktopExpiry().getTime();
}


export default mongoose.model<ISession>('Session', sessionSchema);



























// import mongoose, { Schema, Document } from 'mongoose';
//
// // Interface for a Session document
// export interface ISession extends Document {
//     userId: string; // Reference to the associated user
//     token: string; // Unique session token
//     createdAt: Date;
//     expiresAt: Date;
//     // Other optional fields: userAgent, ipAddress, ...
// }
//
// const sessionSchema: Schema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     token: { type: String, required: true, unique: true },
//     createdAt: { type: Date, default: Date.now },
//     expiresAt: { type: Date, default: () => calculateExpiry(), required: true },
// });
//
// // Helper function to calculate expiry with custom logic
// function calculateExpiry(): Date {
//     const now = new Date();
//     now.setDate(now.getDate() + 7); // Example: Session expires in 7 days
//     return now;
// }
//
// export default mongoose.model<ISession>('Session', sessionSchema);
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
//
//
//
//
//
//
//
