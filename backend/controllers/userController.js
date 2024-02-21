const User = require('../models/userModel');

//login user
const loginUser = (req, res) => {
res.json({message: 'login user'});
};


const signupUser = (req, res) => {
res.json({message: 'signup user'});
};
//signup user


module.exports = {
loginUser,
signupUser
};