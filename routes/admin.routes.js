"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const productController_1 = __importDefault(require("../controllers/productController"));
const adminRouter = express_1.default.Router();
adminRouter.post('/products', auth_1.isAuthenticated, auth_1.isAdmin, productController_1.default.createProduct);
// ... other routes
exports.default = adminRouter;
// import express, { Router, Request, Response, NextFunction } from 'express';
// import { isAuthenticated, isAdmin, requiresMultiFactorAuth } from '../middlewares/auth';
// import productController from '../controllers/productController';
//
// const adminRouter: Router = express.Router();
//
// // Define a type for admin route handlers
// type AdminRequestHandler = (req: Request, res: Response, next: NextFunction) => void;
//
// adminRouter.post('/products', isAuthenticated, isAdmin, productController.createProduct as AdminRequestHandler);
// // ... other routes
//
// export default adminRouter;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import express, { Router } from 'express';
// // import { isAuthenticated, isAdmin, requiresMultiFactorAuth } from '../middlewares/auth';
// // import productController from '../controllers/productController'; // Assuming this is already TypeScript
// //
// // const adminRouter: Router = express.Router();
// //
// // adminRouter.post('/products', isAuthenticated, isAdmin, productController.createProduct);
// // // ... other routes
// //
// // export default adminRouter;
