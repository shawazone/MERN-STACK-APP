import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const WorkoutDetails = ({workout}) => {



  const {dispatch} = useWorkoutsContext() 
  
  const handleClick = async() => {
   const response = await fetch('/api/workouts/'+workout._id, {
    method : 'DELETE',
   })  
   const json = await response.json()
  
    if (response.ok) {
      console.log(json)
      dispatch({type:'DELETE_WORKOUT', payload:json})
    }
  }

  const navigate = useNavigate()
   const handelUpdateClick = async() => {
      navigate('/Update/'+workout._id)
   }
  


  return (
    
    <div className='workout-details'>
      <div className='link-border'>
      <Link to={ `/WorkoutPage/${workout._id}`}  style={{ textDecoration: 'none'}}>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{workout.ceated}</p>
        </Link>
      </div>
        <div className='buttons-spacing'>
        <span className='updateBtn'><Link to={`/Update/${workout._id}`} style={{ textDecoration: 'none' , color: 'green'}} onClick={handelUpdateClick}>update</Link></span>
        <span className='deleteBtn' onClick={handleClick} style={{ textDecoration: 'none' , color: 'red'}}>delete</span>
        </div>
    </div>
  )
}

export default WorkoutDetails
