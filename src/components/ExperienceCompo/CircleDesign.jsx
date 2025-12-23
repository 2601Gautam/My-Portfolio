import React from 'react'

const CircleDesign = () => {
  return (
    <div className="flex flex-col items-center pt-1">
        <div className="w-4 h-4 rounded-full bg-blue-600 shadow-lg shadow-blue-300 group-hover:scale-125 transition-transform duration-300"></div>
        <div className="h-full w-0.5 bg-gradient-to-b from-blue-600 to-transparent mt-2"></div>
      </div>
  )
}

export default CircleDesign