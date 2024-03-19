"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSessionExpired(session) {
    var _a;
    const now = new Date().getTime();
    // Check default expiry
    const defaultExpiryTime = session.sessionExpiry.default || (7 * 24 * 60 * 60 * 1000); // Default 7 days in ms
    if (now > defaultExpiryTime) {
        return true;
    }
    // Check custom expiry (if any)
    const deviceId = getDeviceIdFromRequest(); // You'll need to implement this
    if ((_a = session.sessionExpiry.customizations) === null || _a === void 0 ? void 0 : _a.has(deviceId)) {
        const customExpiryTime = session.sessionExpiry.customizations.get(deviceId);
        if (now > customExpiryTime) {
            return true;
        }
    }
    return false;
}
// Placeholder - You'll need a way to get the device ID from the request
function getDeviceIdFromRequest() {
    // Example if you store it as a cookie
    return req.cookies.deviceId;
}
