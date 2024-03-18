import { configureSwaggerUI } from './swagger-config'; // We'll create this
import express, { Application, Request, Response, NextFunction  } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger'; // Assuming this has proper typing

const app: Application = express();

// ... other middleware

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ... your routes
app.use('/api-docs', (req: Request, res: Response, next: NextFunction) => {
    try {
        swaggerUi.serve(req, res);
        swaggerUi.setup(swaggerSpec)(req, res);
    } catch (err) {
        console.error('Swagger UI Error:', err);
        res.status(500).json({ error: 'Failed to load Swagger UI' });
    }
});



// ...

configureSwaggerUI(app);

// ...
//
// import express, { Application  } from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './swagger';

export function configureSwaggerUI(app: Application) {
    app.use('/api-docs', (req, res, next) => {
        // ... error handling from previous example
    });
}











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
