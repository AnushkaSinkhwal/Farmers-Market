const Farmer = require('../models/farmerModel')

//login farmer
const loginFarmer = async (req,res)=>{
    try{
        const farmer = await Farmer.loginFarmer(email, password)
        res.status(200).json(email, password)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


//signup farmer
const signupFarmer = async (req,res)=>{
    const {fname, phoneNumber, email, password} = req.body
    try{
        const farmer = await Farmer.signupFarmer(fname, phoneNumber, email, password)
        res.status(200).json(fname, phoneNumber, email, password)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginFarmer, signupFarmer}