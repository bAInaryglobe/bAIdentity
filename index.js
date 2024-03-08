"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const dotenv_1 = __importDefault(require("dotenv")); // Prefer the 'import' syntax
dotenv_1.default.config();
// Import types
const user_gql_1 = __importDefault(require("./src/schema/user.gql"));
const user_1 = __importDefault(require("./src/resolvers/user"));
const db_1 = __importDefault(require("./db"));
// Establish database connection
(0, db_1.default)();
// Create Express app
const app = (0, express_1.default)();
// Create Apollo Server
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: user_gql_1.default,
    resolvers: user_1.default,
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
