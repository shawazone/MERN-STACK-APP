const express = require('express');
const Workout = require('../models/WorkoutModel');
const {getWorkouts, createWorkout, getSingleWorkout,deleteWorkout , updateWorkout} = require('../controllers/workoutcontroller');
const router = express.Router();

//GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getSingleWorkout);


//POST a workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)


module.exports = router;
