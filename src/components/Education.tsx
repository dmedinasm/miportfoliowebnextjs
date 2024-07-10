import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import VerticalTimeline from './VerticalTimeline'
export default function Education () {
  return (
   <section className='mb-20'>
    <h2 className='text-4xl flex items-center text-gray-700 font-semibold gap-4 pb-20'><FaUserGraduate />Formación</h2>
    <VerticalTimeline/>
   </section>
  )
}
