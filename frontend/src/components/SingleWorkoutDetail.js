import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { Link } from 'react-router-dom';
export default function SingleWorkoutDetail() {

    const { id } = useParams();
  
    

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
    
    
    
      
      const [title, setTitle] = useState('');
      const [load, setLoad] = useState('')
      const [reps, setReps] = useState('')
    


  return (
    <div>
      {title ? (
        <div className='workout-details'>
          <h4>{title}</h4>
          <p><strong>Load (kg):</strong>{load}</p>
          <p><strong>Reps:</strong>{reps}</p>
          {/* <span className='updateBtn'><Link to={`/Update/${workout._id}`} style={{ textDecoration: 'none' }}>update</Link></span> */}
        </div>
      ) : (
        <p>No workouts available</p>
      )}
    </div>
  );
}
