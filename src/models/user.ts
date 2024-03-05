const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    // ... your user fields like name, email, etc.
    password: {
        type: String,
        required: true,
        select: false // Prevent returning the password hash by default
    }
});

// Hash password before saving (pre-save hook)
UserSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);
