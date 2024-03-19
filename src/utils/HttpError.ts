export class HttpError extends Error {
    constructor(public statusCode: number, public message: string) {
        super(message);

        // Ensure the name of this class is used as the constructor name for proper stack traces
        this.name = this.constructor.name;

        // Capture a stack trace if available (for debugging)
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
