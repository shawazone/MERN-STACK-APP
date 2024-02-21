import React from 'react'

import {useState, useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


export default function Home() {

// const [workouts, setWorkouts] = useState()
const {workouts, dispatch }= useWorkoutsContext() 

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()
     
      if (response.ok) {
        // console.log(json)
        // setWorkouts(json)
        dispatch({type:'SET_WORKOUTS', payload:json})
      } }

    fetchWorkouts() 
  },[])



  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && Array.isArray(workouts) && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout.id} workout={workout} />
          ))
        ) : (
          <p>No workouts available</p>
        )}
      </div>
      <WorkoutForm />
    </div>
  )
  
        }