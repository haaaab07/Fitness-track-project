import React from 'react'

export default function ProgressChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Progress Chart</h2>
      <div className="bg-gray-700 p-4 rounded">
        <p>Charts will be shown here to visualize progress over time.</p>
        {/* You can add a chart library like Chart.js or Recharts here */}
      </div>
    </div>
  )
}