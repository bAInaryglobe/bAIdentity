"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Configure options
const options = {
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
                url: "https://bAIdentity.onrender.com/",
                description: "Live server"
            },
        ]
    },
    // looks for configuration in specified directories
    apis: ['src/routes/*.js'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Type-safe Swagger Docs function
function swaggerDocs(app, port) {
    // ... rest of your function ...
    // Swagger Page
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}
exports.default = swaggerDocs;
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
