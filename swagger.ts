import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express, { Request, Response } from 'express'; // Assuming you're using Express

// Interfaces for Options and Swagger Specification
interface SwaggerOptions {
    definition: swaggerJsdoc.Options['definition'];
    apis: swaggerJsdoc.Options['apis'];
}

interface SwaggerSpec extends swaggerJsdoc.Specs {
    // Add any custom properties here if needed
}

// Configure options
const options: SwaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'bAIdentity',
            description: "API endpoints for a mini blog services documented on swagger",
            contact: {
                name: "bAIdentity",
                email: "Official-support@bainaryglobe.com",
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Local server"
            },
            {
                url: "<your live url here>",
                description: "Live server"
            },
        ]
    },
    // looks for configuration in specified directories
    apis: ['./router/*.js'],
};

const swaggerSpec: SwaggerSpec = swaggerJsdoc(options);

// Type-safe Swagger Docs function
function swaggerDocs(app: express.Application, port: number) { // Type the parameters
    // ... rest of your function ...
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}


export default swaggerDocs;














//
//
// import swaggerJsdoc from 'swagger-jsdoc'
// import swaggerUi from 'swagger-ui-express'
// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'bAIdentity',
//             description: "API endpoints for a mini blog services documented on swagger",
//             contact: {
//                 name: "bAIdentity",
//                 email: "Official-support@bainaryglobe.com",
//             },
//             version: '1.0.0',
//         },
//         servers: [
//             {
//                 url: "http://localhost:8080/",
//                 description: "Local server"
//             },
//             {
//                 url: "<your live url here>",
//                 description: "Live server"
//             },
//         ]
//     },
//     // looks for configuration in specified directories
//     apis: ['./router/*.js'],
// }
// const swaggerSpec = swaggerJsdoc(options)
// function swaggerDocs(app, port) {
//     // Swagger Page
//     app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
//     // Documentation in JSON format
//     app.get('/docs.json', (req, res) => {
//         res.setHeader('Content-Type', 'application/json')
//         res.send(swaggerSpec)
//     })
// }
// export default swaggerDocs