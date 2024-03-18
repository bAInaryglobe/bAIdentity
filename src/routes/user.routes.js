"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req, res) => {
    // ... your user fetching logic (add type definitions as needed)
});
exports.default = router; // Assuming you want to export
// // users.js
// const express = require('express');
// const router = express.Router();
//
// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     description: Get all users
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.get('/', (req, res) => {
//     // ... your user fetching logic
// });
