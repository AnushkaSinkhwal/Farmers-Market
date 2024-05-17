const Farmer = require('../models/farmerModel')
const mongoose = require('mongoose')

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

//delete farmer
const deleteFarmer = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such farmer'});
    }
    try {
        const farmer = await Farmer.findByIdAndDelete(id);
        if (!farmer) {
            return res.status(404).json({error: 'Farmer not found'});
        }
        res.status(200).json(farmer);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


//update farmer
const updateFarmer = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such farmer' });
    }
    try {
        const farmer = await Farmer.findByIdAndUpdate(id, req.body, { new: true });
        if (!farmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }
        res.status(200).json(farmer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//get all farmers
const getFarmers = async(req, res)=>{
    const farmers = await Farmer.find({}).sort({createdAt: -1})
    res.status(200).json(farmers)
}

//get single farmer
const getFarmer = async (req, res) => {
    const { id } = req.params;
    const farmer = await Farmer.findById(id);
    if (!farmer) {
        return res.status(404).json({ error: 'Farmer not found' });
    }
    res.status(200).json(farmer);
};

module.exports = {loginFarmer, signupFarmer, deleteFarmer, updateFarmer, getFarmers, getFarmer}