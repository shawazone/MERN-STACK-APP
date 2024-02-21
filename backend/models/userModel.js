const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }
});
module.exports = mongoose.model('User', userSchema); //export the model object
