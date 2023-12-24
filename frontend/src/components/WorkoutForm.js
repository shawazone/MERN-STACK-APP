import React from 'react'
import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

   const response=  await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout), // we need to convert the object to a string
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('workout added', json)
      dispatch({type:'CREATE_WORKOUT', payload:json})
    }
  }

    return (
  <form className='create' onSubmit={handleSubmit}>
    <h3>Add a New Workout</h3>
    <label>Exersice Title</label>
    <input
    type='text'
    onChange={(e) => setTitle(e.target.value)}
    value={title}
    />

    <label>Exersice load</label>
    <input
    type='number'
    onChange={(e) => setLoad(e.target.value)}
    value={load}
    />

    <label>Exersice reps</label>
    <input
    type='number'
    onChange={(e) => setReps(e.target.value)}
    value={reps}
    />

    <button>Add Workout</button>
    {error && <div className='error'>{error}</div>}
  </form>
  )
}

export default WorkoutForm
