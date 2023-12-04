const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'});
});



//GET a single workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single workout'});
})


//POST a workout
router.post('/', (req, res) => {
    res.json({message: 'POST a workout'});
})


module.exports = router;
