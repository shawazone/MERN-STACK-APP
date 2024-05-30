const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    title :{
        type: String,
        required: true
    },


    reps :{
        type: Number,
        required: true
    },


    load:{  
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
 

    },{timestamps: true})// this will automatically create a timestamp for each workout

    module.exports= mongoose.model('Workout', workoutSchema); 
