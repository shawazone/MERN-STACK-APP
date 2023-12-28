const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');



const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) // black object to get all workouts

    res.status(200).json(workouts)
}


const getSingleWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        res.status(400).json({error: 'Workout not found'})
    }
    res.status(200).json(workout)
} 

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    let emtyFields = []
    
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}


const deleteWorkout = async (req, res) => {
    const {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
    }
    const deletedWorkout = await Workout.findByIdAndDelete(id)
    if (!deletedWorkout) {
        res.status(400).json({error: 'Workout not found'})
    }
    res.status(200).json(deletedWorkout)
}


const updateWorkout = async (req, res) => {
  const {id} = req.params
  // const {title, load, reps} = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
  }
  const workout = await Workout.findOneAndUpdate({_id:id},{
    ...req.body,
  })

  res.status(200).json(workout)

}

module.exports = {
    getWorkouts,
    createWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout,
}