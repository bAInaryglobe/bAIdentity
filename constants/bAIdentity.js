"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const backendConstants = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    API_PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    // ... more constants
};
//
// // ... (rest of your constants file)
//
// const backendConstants: BackendConstants = {
//     // ... your other constants ...
//     DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3000,
//     API_PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
// };
//
exports.default = backendConstants;
