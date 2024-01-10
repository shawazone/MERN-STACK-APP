import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import SingleWorkoutDetail from '../components/SingleWorkoutDetail';



export default function WorkoutPage() {


return (
<div>
        
  <SingleWorkoutDetail />
</div>
)

}

