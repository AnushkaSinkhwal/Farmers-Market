const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value)
            },
            message: 'Invalid email format',
        },
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: (value) => {
                return validator.isStrongPassword(value)
            },
            message: 'Password must contain at least one uppercase, one lowercase, one number, one special character and one symbol',
        },
    },
})

//static signup method
userSchema.statics.signup = async function(username, phoneNumber, address, email, password){
    if(!username || !phoneNumber || !address || !email || !password){
        throw Error("fields cannot be empty")
    }
    //validator
    if(!validator.isEmail(email)){
        throw Error("email must be a valid email")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("password must contain at least 8 characters with one uppercase, one lowercase, one symbol and one number")
    }
    const exists = await this.findOne({username})
    if(exists){
        throw Error('Username already exists')
    }
    const user = await this.create({username, phoneNumber, address, email, password})
    return user
}

//static login method
userSchema.statics.login = async function(credentials){
    const {username, password} = credentials
    if(!username || !password){
        throw Error('fields cannot be empty')
    }
    const user = await this.findOne({username})
    if(!user){
        throw Error('incorrect username')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('incorrect password')
    }
    return user
}

module.exports = mongoose.model('User', userSchema)