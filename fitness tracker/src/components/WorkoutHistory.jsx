import React from 'react'

export default function WorkoutHistory({ workouts = [] }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Workout History</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {workouts.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          workouts.map((workout, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded">
              <h3 className="text-lg font-semibold">{workout.exercise}</h3>
              <p>
                {workout.sets} sets of {workout.reps} reps, {workout.weight} kg
              </p>
              <p className="text-sm text-gray-400">
                Logged on {new Date(workout.date).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}