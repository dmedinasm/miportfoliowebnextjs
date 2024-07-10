import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Badge from './Badge'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TbMailForward } from 'react-icons/tb'
export default function Hero () {
  return (
    <section className='text-gray-700 flex flex-col place-items-start gap-6 max-w-xl pt-24 pb-44'>
        <div className='flex items-center gap-3 '>
            <div ><Image src={'/hero.png'} alt={'photo_hero'} width={75} height={50} className='rounded-full size-16'/></div>
            <Badge title='Disponible para Trabajar'/>
        </div>
      <h1 className="text-5xl font-bold leading-tight">Hola, Soy Daniel Miguel Medina Mateo</h1>
      <p className='text-xl leading-[1.7]'>Desarrollador Web. <span className='text-yellow-500 font-bold'>Especializado en el desarrollo de aplicaciones web modernas.</span> Conocimientos en  tecnologías como <span className='text-yellow-500 font-bold'>React, Nextjs y TypeScript</span></p>
      <div className='flex gap-4 text-md' >
        <Link href="#" className='px-4 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-gray-900'><p className='flex items-center gap-2'><TbMailForward/>Contáctame</p></Link>
        <Link href='#' className='px-4 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-gray-900'><p className='flex items-center gap-2'><AiOutlineLinkedin />LinkedIn</p></Link>
      </div>
    </section>
  )
}