const express = require('express')
const { loginUser, signupUser, deleteUser, updateUser, getUsers, getUser } = require('../controllers/userController.js')

const router = express.Router()
//get a user
router.get('/:id', getUser)
//get all users
router.get('/', getUsers)
//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

//delete route
router.delete('/delete/:id', deleteUser)

//update route
router.patch('/update/:id', updateUser)

module.exports = router