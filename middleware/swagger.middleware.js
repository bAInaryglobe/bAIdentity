"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger")); // Assuming swagger.ts/js exports a valid spec
const app = (0, express_1.default)();
// ... other middleware
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
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
