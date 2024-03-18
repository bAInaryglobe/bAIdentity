import { Request, Response } from 'express';
import User from '../models/user.model'; // Assuming User is your Mongoose model interface

interface UserRequestBody {
    // Define the expected properties of req.body and their types
    // Example:
    username: string;
    email: string;
    // ... other properties
}

exports.createUser = async (req: Request<unknown, unknown, UserRequestBody>, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created!' });
    } catch (error: unknown) { // Generalize the error type
        if (error instanceof Error) { // Check if it's a standard Error
            res.status(400).json({ error: error.message });
        } else {
            console.error(error); // For unexpected errors
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
};

// ... other controller functions
