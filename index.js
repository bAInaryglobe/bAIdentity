"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// ... your imports
const auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
const index_1 = __importDefault(require("./src/db/index")); // Assuming your connectDB function is within src/db
// Environment-based Config (example)
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 4000;
// ... your database connection function
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, index_1.default)();
            const app = (0, express_1.default)(); // Initialize Express app
            // ... (Your Apollo Server setup)
            // Apply auth routes
            app.use('/api/auth', auth_routes_1.default);
            // Error Handling Middleware (Place this after other routes)
            app.use((err, req, res, next) => {
                console.error('Unhandled error:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
            // ... (Server Start with error handling)
            app.listen(PORT, () => {
                console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
            }).on('error', (err) => {
                console.error('Server startup error:', err);
            });
        }
        catch (error) {
            // ... (Your existing error handling logic)
            console.error('Unable to connect to bAIdentity database:', error);
        }
    });
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
