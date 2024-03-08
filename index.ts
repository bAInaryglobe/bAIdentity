import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Prefer the 'import' syntax
dotenv.config();

// Import types
import typeDefs from './src/schema/user.gql';
import resolvers from './src/resolvers/user';
import connectDB from './db';
import User from './user.model';

// Establish database connection
connectDB();

// Create Express app
const app = express();

// Create Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Apply Apollo middleware to the Express app
server.start().then(() => {
    server.applyMiddleware({ app });
});

// Start the Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});

