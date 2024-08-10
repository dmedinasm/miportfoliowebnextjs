import Image from 'next/image'
import React from 'react'
import Badge from './Badge'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TbMailForward } from 'react-icons/tb'
export default function Hero () {
  return (
    <section className='py-16 md:py-36 w-full mx-auto container md:max-w-4xl sm:max-w-2xl'>
      <div className='max-w-xl'>
        <div className='flex items-center gap-4 mb-4'>
        <Image src={'/hero.png'} alt={'photo_hero'} width={75} height={75} className='rounded-full size-14 '/>
        <a href='https://www.linkedin.com/in/dmedinam'><Badge title='Disponible para Trabajar'/></a>
        </div>
        <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-5xl text-gray-700">Daniel Miguel Medina Mateo</h1>
        <p className='mt-6 text-xl text-gray-700 dark:text-white'>Desarrollador Web Jr. <span className='text-yellow-500 dark:text-yellow-300 font-bold'>Especializado en el desarrollo de aplicaciones web modernas.</span> Conocimientos en  tecnologías como <span className='text-yellow-500 font-bold dark:text-yellow-300'>React, Nextjs y TypeScript</span></p>
        <nav className='flex flex-wrap gap-4 mt-8'>
        <a href="mailto:dmedinasm@gmail.com" target='_blank' className='px-4 py-2 rounded-full border border-gray-300 dark:border-gray-100 hover:text-white hover:bg-gray-900 dark:text-white'><p className='flex items-center gap-2'><TbMailForward/>Contáctame</p></a>
        <a href='https://www.linkedin.com/in/dmedinam' target='_blank' className='px-4 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-gray-900 dark:text-white'><p className='flex items-center gap-2'><AiOutlineLinkedin />LinkedIn</p></a>
        </nav>
      </div>
    </section>
  )
}
