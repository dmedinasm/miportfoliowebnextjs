import React from 'react'

export default function TimelineItem ({ title, content }:{title:string, content:string}) {
  return (
    <div className="flex items-start mb-8">
    <div className="relative hidden sm:flex items-center  justify-center w-6 flex-shrink-0 mr-4">
      <div className="w-3 h-3  bg-yellow-500 rounded-full z-10"></div>
    </div>
    <div className="bg-gray-100 dark:bg-gray-500 p-4 text-center sm:text-start rounded drop-shadow-lg flex-grow">
      <h3 className="font-bold text-lg text-yellow-500 mb-2">{title}</h3>
      <p className='text-gray-700 text-sm ss:text-[16px] dark:text-white leading-[1.5]'>{content}</p>
    </div>
  </div>
  )
}
