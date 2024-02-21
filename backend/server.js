require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/user');

//express app
const app = express();


//middleware
app.use(express.json()); //this is a middleware that parses the request body as JSON
app.use((req, res, next) => {
    console.log('middleware running');
    next();
})


//routes
app.use('/api/workouts',workoutsRouter); 
 // it graps all the routes from workouts.js
 // the first argument is the path, the second argument is the router object 
 // when we get to the path /api/workouts, we will use the workoutsRouter object to handle the request

app.use('/api/user',usersRouter)



// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
     console.log(`listening on port ${process.env.PORT} uwu`);
     console.log('connected to db')
     });   
})
.catch((err) => console.log(err));




//listen for requests
