const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected!');
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit with an error
    }
}

module.exports = connectDB;