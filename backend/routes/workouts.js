const express = require('express');
const Workout = require('../models/WorkoutModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'});
});



//GET a single workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single workout'});
})


//POST a workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
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
