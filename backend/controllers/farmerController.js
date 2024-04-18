const Farmer = require('../models/farmerModel')

//login farmer
const loginFarmer = async (req,res)=>{
    const { email, password } = req.body
    try{
        const farmer = await Farmer.loginFarmer(email, password)
        res.status(200).json({email: farmer.email, message: 'Login successful'})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


//signup farmer
const signupFarmer = async (req,res)=>{
    const { fname, phoneNumber, address, email, password } = req.body
    try{
        const farmer = await Farmer.create({fname, phoneNumber,address, email, password})
        res.status(200).json({message: 'Signup successful', farmer: {id: farmer.id, fname: farmer.fname}})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginFarmer, signupFarmer}