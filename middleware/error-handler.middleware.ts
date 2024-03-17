import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HttpError } from './utils/HttpError'; // We'll create this shortly

interface ErrorDetails {
    message: string;
    statusCode: number;
    stack?: string; // Optional stack trace for debugging
}

const errorHandlerMiddleware: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // 1. Determine error details
    let errorDetails: ErrorDetails = {
        message: err.message,
        statusCode: 500 // Default to internal server error
    };

    if (err instanceof HttpError) {
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

export default errorHandlerMiddleware;
