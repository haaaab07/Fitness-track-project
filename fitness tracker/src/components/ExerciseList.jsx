import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ExerciseList() {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('https://wger.de/api/v2/exercise/')
        setExercises(response.data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching exercises:', error)
        setLoading(false)
      }
    }

    fetchExercises()
  }, [])

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Exercise List</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {loading ? (
          <p>Loading exercises...</p>
        ) : (
          exercises.map((exercise) => (
            <div key={exercise.id} className="bg-gray-700 p-4 rounded">
              <h3 className="text-lg font-semibold">{exercise.name}</h3>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: exercise.description }} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}