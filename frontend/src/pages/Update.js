import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';

import UpdateWorkoutForm from '../components/UpdateWorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'



export default function Update() {
    const { id } = useParams(); // Use the useParams hook to get the blogId from the URL
    const {workouts, dispatch }= useWorkoutsContext() 

 
// using the context did not solve the issue
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts/${id}`)
      const json = await response.json()
     
      if (response.ok) {
        console.log(json.title)
        // setContent(json)
        dispatch({type:'SET_WORKOUTS', payload:json})

      } }

    fetchWorkouts()
  },[])

// console.log(content)


  return (
    <div>
        <UpdateWorkoutForm   workouts={workouts}/>
    </div>
  )
}
