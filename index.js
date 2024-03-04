const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Import your schema and resolvers
const typeDefs = require('./src/schema/user.gql');
const resolvers = require('./src/resolvers/user.js');

// ... (We'll add in the rest later)

// activate microservices


