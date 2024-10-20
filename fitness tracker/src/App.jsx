import React, { useState } from 'react'
import WorkoutLog from './components/WorkoutLog'
import WorkoutHistory from './components/WorkoutHistory'
import ExerciseList from './components/ExerciseList'
import ProgressChart from './components/ProgressChart'

export default function App() {
  const [workouts, setWorkouts] = useState([])

  const addWorkout = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Fitness Tracker</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <WorkoutLog addWorkout={addWorkout} />
          <WorkoutHistory workouts={workouts} />
        </div>
        <div className="space-y-8">
          <ExerciseList />
          <ProgressChart />
        </div>
      </div>
    </div>
  )
}