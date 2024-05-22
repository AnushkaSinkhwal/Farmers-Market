const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const farmerSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String, // Changed to String
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Static signup method
farmerSchema.statics.signupFarmer = async function (fname, phoneNumber, address, email, password) {
    // Validation
    if (!fname || !phoneNumber || !address || !email || !password) {
        throw new Error("Fields cannot be empty");
    }
    if (!validator.isEmail(email)) {
        throw new Error("Email must be a valid email");
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error("Password must contain at least 8 characters with one uppercase, one lowercase, one symbol, and one number");
    }
    const exist = await this.findOne({ email });
    if (exist) {
        throw new Error('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const farmer = await this.create({ fname, phoneNumber, address, email: email.toLowerCase(), password: hashedPassword });
    return farmer;
};

// Static login method
farmerSchema.statics.loginFarmer = async function (email, password) {
    if (!email || !password) {
        throw new Error("Fields cannot be empty");
    }
    const farmer = await this.findOne({ email: email.toLowerCase() });
    if (!farmer) {
        throw new Error("Email does not exist");
    }
    const match = await bcrypt.compare(password, farmer.password);
    if (!match) {
        throw new Error("Password incorrect");
    }
    return farmer;
};

module.exports = mongoose.model('Farmer', farmerSchema);