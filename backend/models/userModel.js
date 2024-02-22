const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true, // security layer
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }
});

//static signup method

userSchema.statics.signup = async function(email, password) {
//  this key word doesnt work with arrow function
    const exists = await this.findOne({email})
  //this is a reference to the model object
 
  if(exists){
    throw  Error('Email already exists')
 }

 const salt = await bcrypt.genSalt(10);// used await  because it takes time by design
 const hash = await bcrypt.hash(password, salt);

 const user = await this.create({email, password: hash}); 

 return user;
}

module.exports = mongoose.model('User', userSchema); //export the model object
