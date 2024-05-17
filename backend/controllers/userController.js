const User = require('../models/userModel')
const mongoose = require('mongoose')

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

//delete user
const deleteUser = async(req, res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
    const user = await User.findByIdAndDelete({_id: id})
    if(!user){
        return res.status(400).json({error: 'No such user'})
    }
    res.status(200).json(user)
}

//update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' });
    }
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get all users
const getUsers = async(req, res)=>{
    const users = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

//get single user
const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
};


module.exports = {loginUser, signupUser, deleteUser,updateUser, getUsers, getUser }