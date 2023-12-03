require('dotenv').config();
const express = require('express');


//express app
const app = express();


//middleware

app.use((req, res, next) => {
    console.log('middleware running');
    next();
})

//routes
app.get('/' , (req, res) => {
    res.json({message: 'Hello World'});
})


//listen for requests
app.listen(process.env.PORT, () => {

    console.log(`listening on port ${process.env.PORT} uwu`);
});