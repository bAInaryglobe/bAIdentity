import mongoose from 'mongoose';
require('dotenv').config();

interface ConnectionOptions {  // Define an interface for options
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
}

const connectDB = async () => {
    try {
        const options: ConnectionOptions = {  // Use the interface
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        const conn = await mongoose.connect(process.env.MONGO_URI, options);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: unknown) { // Unknown for broader error catching
        if (error instanceof Error) { // Check if it's an Error object
            console.error(`Error connecting to MongoDB: ${error.message}`);
        } else {
            console.error('Unexpected error:', error);
        }
        process.exit(1);
    }
};




export default connectDB;

































//
//
//
//
// import mongoose from 'mongoose';
// require('dotenv').config(); // Ensure dotenv is loaded
//
// interface ConnectionOptions {
//     useNewUrlParser: boolean;
//     useUnifiedTopology: boolean;
// }
//
// const connectDB = async () => {
//     try {
//         const options: ConnectionOptions = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         };
//
//         const conn = await mongoose.connect(process.env.MONGO_URI, options);
//
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             console.error(`Error connecting to MongoDB: ${error.message}`);
//         } else {
//             console.error('Unexpected error:', error);
//         }
//         process.exit(1);
//     }
// };
//
// export default connectDB;
