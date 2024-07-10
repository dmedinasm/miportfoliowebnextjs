import React from 'react'

export default function EducationItem () {
  return (
    <div className="flex items-start mb-8">
    <div className="relative flex items-center justify-center w-6 flex-shrink-0 mr-4">
      <div className="w-3 h-3 bg-blue-500 rounded-full z-10"></div>
    </div>
    <div className="bg-white p-4 rounded shadow-md flex-grow">
      <h3 className="font-bold text-lg mb-2">titulo</h3>
      <p>contenido</p>
    </div>
  </div>
  )
}
