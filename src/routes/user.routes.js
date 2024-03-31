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
/** POST Methods */
/**
 * @openapi
 * '/api/user/register':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/register').post(controller.register); // register user
/**
 * @openapi
 * '/api/user/login':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Login as a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/login').post(controller.verifyUser, controller.login); // login in app
/**
 * @openapi
 * '/api/user/verify':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Verify a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/verify').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
/** GET Methods */
/**
 * @openapi
 * '/api/user/{username}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by username
 *     parameters:
 *      - name: username
 *        in: path
 *        description: The username of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/:username').get(controller.getUser); // user with username
/** PUT Methods */
/**
 * @openapi
 * '/api/user/update':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Modify a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: string
 *                default: ''
 *              firstName:
 *                type: string
 *                default: ''
 *              lastName:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/update').put(controller.updateUser); // is use to update the user profile
// import { Router } from 'express'; // Assuming you're using Express
// import { controller } from './user.controller'; // Assuming your controller logic is here
//
// const router = Router();
/** GET Method */
/**
 * @openapi
 * '/api/user/account/tier':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user's account tier
 *     responses:
 *      200:
 *        description: Successful retrieval
 *        content:
 *          application/json:
 *            schema:
 *              type: integer
 *              enum: [1, 2, 3]
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/account/tier').get(controller.getUserTier);
/** POST Method */
/**
 * @openapi
 * '/api/user/account/tier':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Update user's account tier
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: integer
 *             enum: [1, 2, 3]
 *     responses:
 *      200:
 *        description: Tier updated
 *      400:
 *        description: Invalid tier value
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/account/tier').post(controller.updateUserTier);
/** GET Method */
/**
 * @openapi
 * '/api/user/username':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user ID by username
 *     parameters:
 *      - name: username
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: Successful retrieval
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *      400:
 *        description: Missing username parameter
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/username').get(controller.getUserIdByUsername);
/** PUT Method */
/**
 * @openapi
 * '/api/user/username':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Change username
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *              - newUsername
 *            properties:
 *              userId:
 *                type: string
 *              newUsername:
 *                type: string
 *     responses:
 *      200:
 *        description: Username updated
 *      400:
 *        description: Bad Request (Invalid data)
 *      404:
 *        description: User not found
 *      409:
 *        description: Username already exists (Conflict)
 *      500:
 *        description: Server Error
 */
router.route('/username').put(controller.changeUsername);
// ... (Your existing imports and routes) ...
/** GET /user/email */
/**
 * @openapi
 * '/api/user/email':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user email by userID
 *     parameters:
 *      - name: userId
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: Successful retrieval
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *      400:
 *        description: Missing userId parameter
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/email').get(controller.getUserEmail);
/** PUT /user/email */
/**
 * @openapi
 * '/api/user/email':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Change user email
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *              - newEmail
 *            properties:
 *              userId:
 *                type: string
 *              newEmail:
 *                type: string
 *     responses:
 *      200:
 *        description: Email updated
 *      400:
 *        description: Bad Request (Invalid data)
 *      404:
 *        description: User not found
 *      409:
 *        description: Email already exists (Conflict)
 *      500:
 *        description: Server Error
 */
router.route('/email').put(controller.changeUserEmail);
// ... (Rest of your file) ...
// ... (Your existing imports and routes) ...
/** GET /user/phone */
/**
 * @openapi
 * '/api/user/phone':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user phone number by userID
 *     parameters:
 *      - name: userId
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: Successful retrieval
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  type: string
 *      400:
 *        description: Missing userId parameter
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/phone').get(controller.getUserPhoneNumber);
/** PUT /user/phone */
/**
 * @openapi
 * '/api/user/phone':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Change user phone number
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *              - newPhoneNumber
 *            properties:
 *              userId:
 *                type: string
 *              newPhoneNumber:
 *                type: string
 *     responses:
 *      200:
 *        description: Phone number updated
 *      400:
 *        description: Bad Request (Invalid data)
 *      404:
 *        description: User not found
 *      500:
 *        description: Server Error
 */
router.route('/phone').put(controller.changeUserPhoneNumber);
// ... (Rest of your file) ...
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
//
// /** DELETE Methods */
// /**
//  * @openapi
//  * '/api/user/{userId}':
//  *  delete:
//  *     tags:
//  *     - User Controller
//  *     summary: Delete user by Id
//  *     parameters:
//  *      - name: userId
//  *        in: path
//  *        description: The unique Id of the user
//  *        required: true
//  *     responses:
//  *      200:
//  *        description: Removed
//  *      400:
//  *        description: Bad request
//  *      404:
//  *        description: Not Found
//  *      500:
//  *        description: Server Error
//  */
// router.route('/:userId').delete(controller.deleteUser);
