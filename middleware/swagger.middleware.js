"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSwaggerUI = void 0;
const swagger_config_1 = require("./swagger-config"); // We'll create this
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger")); // Assuming this has proper typing
const app = (0, express_1.default)();
// ... other middleware
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// ... your routes
app.use('/api-docs', (req, res, next) => {
    try {
        swagger_ui_express_1.default.serve(req, res);
        swagger_ui_express_1.default.setup(swagger_1.default)(req, res);
    }
    catch (err) {
        console.error('Swagger UI Error:', err);
        res.status(500).json({ error: 'Failed to load Swagger UI' });
    }
});
// ...
(0, swagger_config_1.configureSwaggerUI)(app);
// ...
//
// import express, { Application  } from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './swagger';
function configureSwaggerUI(app) {
    app.use('/api-docs', (req, res, next) => {
        // ... error handling from previous example
    });
}
exports.configureSwaggerUI = configureSwaggerUI;
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
// import express, { Application } from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './swagger'; // Assuming swagger.ts/js exports a valid spec
//
// const app: Application = express();
//
// // ... other middleware
//
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//
// // ... your routes
//
//
