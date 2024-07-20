import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import VerticalTimeline from './VerticalTimeline'
export default function Education () {
  return (
   <section className='w-full mx-auto container mb-20 sm:max-w-2xl md:max-w-4xl'>
    <h2 id='education' className='text-4xl flex items-center text-gray-700 font-semibold gap-4 pb-10 dark:text-white'><FaUserGraduate />Formación</h2>
    <VerticalTimeline/>
   </section>
  )
}
