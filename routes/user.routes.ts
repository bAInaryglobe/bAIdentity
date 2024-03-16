import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req: Request, res: Response) => {
    // ... your user fetching logic (add type definitions as needed)
});

export default router; // Assuming you want to export


















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
