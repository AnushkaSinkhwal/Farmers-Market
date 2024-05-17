const express  = require('express')
const {createComment} = require('../controllers/commentController')

const router = express.Router()

//create comment
router.post('/comment', createComment)

module.exports = router