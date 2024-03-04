const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Import your schema and resolvers
const typeDefs = require('./src/schema/user.gql');
const resolvers = require('./src/resolvers/user.js');









const connectDB = require('./db'); // Import your connection function
const User = require('./user.model');

// Establish connection
connectDB();

// ... your application logic, example to create a user:
const newUser = new User({
    username: 'johndoe',
    email: 'john@example.com',
    password: 'securepassword'
});

newUser.save()
    .then(user => console.log('User created:', user))
    .catch(err => console.error(err));









// ... (We'll add in the rest later)

// activate microservices

