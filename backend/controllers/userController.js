const User = require('../models/userModel');
const jwt = require('jsonwetoken');

const createToken = (_id) => {
    jwt.sign({_id:_id},process.env.);// do not put sensetive data here like password or email or anything that can be used to identify the user
}
//login user
const loginUser = (req, res) => {
res.json({message: 'login user'});
};


//signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password);
   
        res.status(201).json({email, user});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }

// res.json({message: 'signup user'});
};


module.exports = {
loginUser,
signupUser
};