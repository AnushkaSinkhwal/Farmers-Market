const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const farmerSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
farmerSchema.statics.signupFarmer = async function (fname, phoneNumber, address, email, password) {
    //validation
    if (!fname ||!phoneNumber ||!address ||!email ||!password) {
        throw Error("fields cannot be empty")
    }
    if (!validator.isEmail(email)) {
        throw Error("email must be a valid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("password must contain at least 8 characters with one uppercase, one lowercase, one symbol and one number")
    }
    const exist = await this.findOne({ email })
    if (exist) {
        throw Error('Email already exists')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const farmer = await this.create({ fname, phoneNumber, email: email.toLowerCase(), password: hashedPassword, address });
    return farmer
}

//static login method
farmerSchema.statics.loginFarmer = async function (email, password) {
    if (!email ||!password) {
        throw Error("fields cannot be empty")
    }
    const farmer = await this.findOne({ email: email.toLowerCase() })
    if (!farmer) {
        throw Error("email does not exist")
    }
    const match = await bcrypt.compare(password, farmer.password)
    if (!match) {
        throw Error("password incorrect")
    }
    return farmer
}

module.exports = mongoose.model('Farmer', farmerSchema)