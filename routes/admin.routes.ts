import express, { Router, Request, Response, NextFunction } from 'express';
import { isAuthenticated, isAdmin, requiresMultiFactorAuth } from '../middlewares/auth';
import productController from '../controllers/productController';

const adminRouter: Router = express.Router();

// Define a type for admin route handlers
type AdminRequestHandler = (req: Request, res: Response, next: NextFunction) => void;

adminRouter.post('/products', isAuthenticated, isAdmin, productController.createProduct as AdminRequestHandler);
// ... other routes

export default adminRouter;

















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
