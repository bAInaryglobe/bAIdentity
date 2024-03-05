import express, { Router } from 'express';
import { isAuthenticated, isAdmin, requiresMultiFactorAuth } from '../middlewares/auth';
import productController from '../controllers/productController'; // Assuming this is already TypeScript

const adminRouter: Router = express.Router();

adminRouter.post('/products', isAuthenticated, isAdmin, productController.createProduct);
// ... other routes

export default adminRouter;
