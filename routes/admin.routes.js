"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const productController_1 = __importDefault(require("../controllers/productController")); // Assuming this is already TypeScript
const adminRouter = express_1.default.Router();
adminRouter.post('/products', auth_1.isAuthenticated, auth_1.isAdmin, productController_1.default.createProduct);
// ... other routes
exports.default = adminRouter;
