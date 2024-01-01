import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';

import UpdateWorkoutForm from '../components/UpdateWorkoutForm'

export default function Update() {
    const { id } = useParams(); // Use the useParams hook to get the blogId from the URL

    const [content, setContent] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts/${id}`)
      const json = await response.json()
     
      if (response.ok) {
        console.log(json.title)
        setContent(json)
      } }

    fetchWorkouts()
  },[])

// console.log(content)


  return (
    <div>
        <UpdateWorkoutForm   content={content}/>
    </div>
  )
}
