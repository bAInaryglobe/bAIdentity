import { Request, Response } from 'express';
import User from '../models/user.model'; // Assuming User is your Mongoose model interface

interface UserRequestBody {
    // Define the expected properties of req.body and their types
    // Example:
    username: string;
    email: string;
    // ... other properties
}

// ... other imports ...

async function getUserPhoneNumber(req: Request, res: Response) {
    // ... Validate userId from query parameters ...
    // ... Fetch user from database by userId...
    // ... Return phoneNumber or handle errors (not found, etc.) ..
}

async function changeUserPhoneNumber(req: Request, res: Response) {
    // ... Validate data from request body ...
    // ... Check if newPhoneNumber is valid (format) ...
    // ... Update user with newPhoneNumber in database ...
    // ... Return success or handle errors ...
}


// ... other imports ...

async function getUserEmail(req: Request, res: Response) {
    // ... Validate userId from query parameters ...
    // ... Fetch user from database by userId...
    // ... Return email or handle errors (not found, etc.) ..
}

async function changeUserEmail(req: Request, res: Response) {
    // ... Validate data from request body ...
    // ... Check if newEmail is valid (format) ...
    // ... Check if newEmail is already taken ...
    // ... Update user with new email in database ...
    // ... Return success or handle errors (conflict, etc.) ...
}



// ... other imports ...

async function getUserIdByUsername(req: Request, res: Response) {
    // ... Validate username from query parameters ...
    // ... Fetch user from database by username...
    // ... Return userId or handle errors (not found, etc.) ...
}

async function changeUsername(req: Request, res: Response) {
    // ... Validate data from request body ...
    // ... Check if newUsername is already taken ...
    // ... Update user in database ...
    // ... Return success or handle errors (conflict, etc.) ...
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
