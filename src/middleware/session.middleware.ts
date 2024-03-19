import { NextFunction, Request, Response } from 'express';
import Session from '../models/session.model'; // Assuming your Session model file
import { isSessionExpired } from '../utils/session.utils';

async function sessionValidationMiddleware(req: Request, res: Response, next: NextFunction) {
    // ... (code remains the same as in the previous example) ...
}
