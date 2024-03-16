import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger'; // Assuming swagger.ts/js exports a valid spec

const app: Application = express();

// ... other middleware

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ... your routes

















// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger');
//
// const app = express();
//
// // ... other middleware
//
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//
// // ... your routes
