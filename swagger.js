"use strict";
// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'API for managing users',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Replace with your base URL
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to API route files
};
const swaggerSpec = swaggerJsdoc(options);
