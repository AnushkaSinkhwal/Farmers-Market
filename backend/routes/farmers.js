const express = require('express')
const { loginFarmer, signupFarmer } = require('../controllers/farmerController')

const router = express.Router()

//login route
router.post('/farmerlogin', loginFarmer)

//signup route
router.post('/farmersignup', signupFarmer)

module.exports = router