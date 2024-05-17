const Comment = require('../models/commentModel')
const mongoose = require('mongoose')

//create comment
const createComment = async (req, res)=>{
    const {prodID, username, comment: commentText, replies} = req.body // Renamed 'comment' to 'commentText'
    try{
        const comment = await Comment.create({prodID, username, comment: commentText, replies})
        res.status(200).json({message: 'comment successful'})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {createComment}