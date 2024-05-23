const express  = require('express')
const {createComment} = require('../controllers/commentController')

const router = express.Router()

//create comment
router.post('/', createComment)

module.exports = router