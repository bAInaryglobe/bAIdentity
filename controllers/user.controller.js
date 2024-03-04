
const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ... other controller functions
