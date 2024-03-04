const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import schema, resolvers, database config
const typeDefs = require('./src/schema/user.gql');
const resolvers = require('./src/resolvers/user.js');
const connectDB = require('./db');
const User = require('./user.model');

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
const PORT = process.env.PORT || 4000; // Use port from environment variables
app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});




































// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables
//
// // Import your schema and resolvers
// const typeDefs = require('./src/schema/user.gql');
// const resolvers = require('./src/resolvers/user.js');
//
//
//
//
//
//
//
//
//
// const connectDB = require('./db'); // Import your connection function
// const User = require('./user.model');
//
// // Establish connection
// connectDB();
//
// // ... your application logic, example to create a user:
// const newUser = new User({
//     username: 'johndoe',
//     email: 'john@example.com',
//     password: 'securepassword'
// });
//
// newUser.save()
//     .then(user => console.log('User created:', user))
//     .catch(err => console.error(err));
//
//
//
//
//
//
//
//
//
// // ... (We'll add in the rest later)
//
// // activate microservices
//
