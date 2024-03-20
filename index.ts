import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// ... your imports
import authRoutes from './src/routes/auth.routes';
import connectDB from './src/db/index'; // Assuming your connectDB function is within src/db


// Environment-based Config (example)
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 4000;

// ... your database connection function


async function startServer() {
    try {
        await connectDB();

        const app = express(); // Initialize Express app

        // ... (Your Apollo Server setup)

        // Apply auth routes
        app.use('/api/auth', authRoutes);

        // Error Handling Middleware (Place this after other routes)
        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error('Unhandled error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });

        // ... (Server Start with error handling)
        app.listen(PORT, () => {
            console.log(
                `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
            );
        }).on('error', (err) => {
            console.error('Server startup error:', err);
        });


    } catch (error) {
        // ... (Your existing error handling logic)
        console.error('Unable to connect to bAIdentity database:', error);

    }
}

startServer();





//
// async function startServer() {
//     try {
//         await connectDB();
//
//         // ... your Apollo Server setup
//
//         // Server Start with error handling
//         app.listen(PORT, () => {
//             console.log(
//                 `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
//             );
//         }).on('error', (err) => {
//             console.error('Server startup error:', err);
//         });
//
//     } catch (error) {
//         console.error('Unable to connect to database:', error);
//     }
// }
//
// startServer();
//
//
//

















// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv'; // Prefer the 'import' syntax
// dotenv.config();
//
// // Import types
// import typeDefs from './src/schema/user.gql';
// import resolvers from './src/resolvers/user';
// import connectDB from './db';
// import User from './user.model';
//
// // Establish database connection
// connectDB();
//
// // Create Express app
// const app = express();
//
// // Create Apollo Server
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
//
// // Apply Apollo middleware to the Express app
// server.start().then(() => {
//     server.applyMiddleware({ app });
// });
//
// // Start the Express server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
// });
//




























//
//
//
//
//
// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
//
// // Import routes
// import authRoutes from './src/routes/auth.routes';
//
// // ... (Rest of your imports)
//
// // ... (Environment-based Config)
//
// // ... (Database connection function)
//
// async function startServer() {
//     try {
//         await connectDB();
//
//         const app = express(); // Initialize Express app
//
//         // ... (Your Apollo Server setup)
//
//         // Apply auth routes
//         app.use('/api/auth', authRoutes);
//
//         // Error Handling Middleware (Place this after other routes)
//         app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//             console.error('Unhandled error:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
//
//         // ... (Server Start with error handling)
//         app.listen(PORT, () => {
//             console.log(
//                 `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
//             );
//         }).on('error', (err) => {
//             console.error('Server startup error:', err);
//         });
//
//
//     } catch (error) {
//         // ... (Your existing error handling logic)
//         console.error('Unable to connect to bAIdentity database:', error);
//
//     }
// }
//
// startServer();

