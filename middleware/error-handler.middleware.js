"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./utils/HttpError"); // We'll create this shortly
const errorHandlerMiddleware = (err, req, res, next) => {
    // 1. Determine error details
    let errorDetails = {
        message: err.message,
        statusCode: 500 // Default to internal server error
    };
    if (err instanceof HttpError_1.HttpError) {
        errorDetails.statusCode = err.statusCode; // Use the HttpError's status
    }
    // 2. Logging (Consider a dedicated logger library)
    console.error(err);
    // 3. Environment-specific stack trace
    if (process.env.NODE_ENV === 'development') {
        errorDetails.stack = err.stack;
    }
    // 4. Send formatted response
    res.status(errorDetails.statusCode).json({ error: errorDetails.message });
};
exports.default = errorHandlerMiddleware;
