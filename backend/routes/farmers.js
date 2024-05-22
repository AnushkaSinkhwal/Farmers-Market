const express = require('express');
const { loginFarmer, signupFarmer, deleteFarmer, updateFarmer, getFarmers, getFarmer } = require('../controllers/farmerController');

const router = express.Router();

//get a farmer
router.get('/:id', getFarmer);

//get all farmers
router.get('/', getFarmers);

//login route
router.post('/farmerlogin', loginFarmer);

//signup route
router.post('/farmersignup', signupFarmer);

//delete route
router.delete('/deletefarmer/:id', deleteFarmer);

//update route
router.patch('/updatefarmer/:id', updateFarmer);

module.exports = router;