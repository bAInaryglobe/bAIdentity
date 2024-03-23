"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    // ... other product fields
});
exports.default = mongoose_1.default.model('Product', productSchema);
