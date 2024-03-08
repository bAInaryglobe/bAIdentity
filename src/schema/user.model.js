"use strict";
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    twofa: {
        type: String,
        required: false
    }
    // ... other fields as needed
});
module.exports = mongoose.model('User', userSchema);
