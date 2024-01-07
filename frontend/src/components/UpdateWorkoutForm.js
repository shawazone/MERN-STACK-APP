import React from 'react'
import { useState,useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdateWorkoutForm =  ({workouts}) => {
  const { id } = useParams(); 
  // Use the useParams hook to get the blogId from the URL

//   console.log(id); 
   // Log the blogId to the console to make sure it's working
  const navigate  = useNavigate();  
 
  // console.log(workouts)

 const [content, setContent] = useState('')
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts/${id}`)
      const json = await response.json()
     
      if (response.ok) {
        console.log(json.title)
        setTitle(json.title)
        setLoad(json.load)
        setReps(json.reps)
        // dispatch({type:'SET_WORKOUTS', payload:json})
        // console.log(json)

      } }

    fetchWorkouts()
  },[])



  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emtyFields, setEmtyFields] = useState([])

 

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

   const response=  await fetch(`/api/workouts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(workout), // we need to convert the object to a string
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmtyFields(json.emtyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      setEmtyFields([])
      console.log('workout added', json)
      dispatch({type:'UPDATE_WORKOUT', payload:json})
      navigate('/')
    }
  }

    return (
  <form className='create' onSubmit={handleSubmit}>
    <h3>Update Workout</h3>
    <label>Exersice Title </label>
    <input
    type='text'
    onChange={(e) => setTitle(e.target.value)}
    value={title}
    className={emtyFields.includes('title') ? 'error' : ''}
    />

    <label>Exersice load</label>
    <input
    type='number'
    onChange={(e) => setLoad(e.target.value)}
    value={load}
    className={emtyFields.includes('load') ? 'error' : ''}

    />

    <label>Exersice reps</label>
    <input
    type='number'
    onChange={(e) => setReps(e.target.value)}
    value={reps}
    className={emtyFields.includes('reps') ? 'error' : ''}

    />

    <button>Update Workout</button>
    {error && <div className='error'>{error}</div>}
  </form>
  )
}

export default UpdateWorkoutForm
