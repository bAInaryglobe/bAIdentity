const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

// ... other middleware

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ... your routes
