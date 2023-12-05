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

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'delete a workout'});
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({message: 'update a workout'});
})


module.exports = router;
