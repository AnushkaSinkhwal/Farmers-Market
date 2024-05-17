const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // prodID: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Post', 
    //     required: true
    // },
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    replies: [{
        username: {
            type: String,
            required: true
        },
        reply: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('Comment', commentSchema);
