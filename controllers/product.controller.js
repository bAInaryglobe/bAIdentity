"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const product_model_1 = __importDefault(require("./product.model"));
function subscribeUserToProduct(userId, productName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findById(userId);
            const product = yield product_model_1.default.findOne({ name: productName });
            if (!user || !product) {
                throw new Error('User or Product not found');
            }
            user.products.push(product._id);
            yield user.save();
        }
        catch (error) {
            console.error('Subscription failed:', error);
            // Handle the error appropriately
        }
    });
}
// Expose as part of a route handler:
app.post('/products/:productName/subscribe', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield subscribeUserToProduct(req.user.id, req.params.productName);
        res.status(200).json({ message: 'Subscription successful!' });
    }
    catch (error) {
        // ... error handling
    }
}));
