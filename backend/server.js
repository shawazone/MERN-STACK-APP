require('dotenv').config();
const express = require('express');
const workoutsRouter = require('./routes/workouts');

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



//listen for requests
app.listen(process.env.PORT, () => {

    console.log(`listening on port ${process.env.PORT} uwu`);
});