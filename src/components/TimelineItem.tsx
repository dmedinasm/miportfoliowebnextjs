import React from 'react'

export default function TimelineItem ({ title, content }:{title:string, content:string}) {
  return (
    <div className="flex items-start mb-8">
    <div className="relative flex items-center justify-center w-6 flex-shrink-0 mr-4">
      <div className="w-3 h-3 bg-yellow-500 rounded-full z-10"></div>
    </div>
    <div className="bg-white p-4 rounded shadow-md flex-grow">
      <h3 className="font-bold text-lg text-yellow-500 mb-2">{title}</h3>
      <p className='text-gray-700 leading-[1.5]'>{content}</p>
    </div>
  </div>
  )
}
