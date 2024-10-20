import React, { useState } from 'react'

export default function WorkoutLog({ addWorkout }) {
  const [exercise, setExercise] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!exercise || !sets || !reps || !weight) return

    const workout = {
      exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseInt(weight),
      date: new Date().toISOString(),
    }

    addWorkout(workout)
    setExercise('')
    setSets('')
    setReps('')
    setWeight('')
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Log Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Exercise here"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
        />
        <div className="grid grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <input
            type="number"
            placeholder="Weight (Kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold">
          Log workout
        </button>
      </form>
    </div>
  )
}