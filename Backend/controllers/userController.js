const User = require('../models/userModel')

//login user
const loginUser = async(req,res)=>{
    const {username, password} = req.body
    try{
        const user = await User.login(username, password)
        response.status(200).json({username, password})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async(req,res)=>{
    const {username, phoneNumber, address, email, password} = req.body
    try{
        const user = await User.signup(username, phoneNumber, address, email, password)
        res.status(200).json({username, phoneNumber, address, email, password})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}