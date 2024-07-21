import Image from 'next/image'
import React from 'react'
import { BsPersonCheckFill } from 'react-icons/bs'
export default function AboutMe () {
  return (
        <section className='w-full mx-auto container sm:max-w-2xl md:max-w-4xl mt-32'>
            <h2 id='about' className='text-4xl flex items-center text-gray-700 dark:text-white font-semibold gap-8 mb-10'><BsPersonCheckFill />Sobre Mí</h2>
            <div className='flex flex-col-reverse sm:flex-row items-center gap-6 '>
                <div className='flex flex-col justify-start gap-6 text-[14px] leading-[1.7] dark:text-white'>
                    <p>Durante mis estudios en la <span className='text-yellow-500 dark:text-yellow-300  font-medium'>Tecnicatura en Informática</span>, adquirí las <span className='text-yellow-500 dark:text-yellow-300 font-medium'>bases fundamentales de la programación y el pensamiento lógico</span>. Esta formación inicial me permitió desarrollar una comprensión sólida de los conceptos esenciales de la informática.</p>
                    <p>La carrera de Ingeniería en Telecomunicaciones, me permitió fortalecer mis conocimientos de <span className='text-yellow-500 dark:text-yellow-300 font-medium'>lógica computacional mediante materias como  lenguaje ensamblador aplicado a sistemas con microprocesadores</span>. Luego me desempeñé como Ingeniero en Telecomunicaciones, desarrollando habilidades de gestión y trabajo en equipo.</p>
                    <p>En 2022, retomé mi pasión por la programación, <span className='text-yellow-500 dark:text-yellow-300 font-medium'>enfocándome en el Desarrollo Web. He completado varios cursos y proyectos</span>, y actualmente estoy comprometido en aportar valor a partir de los conocimientos adquiridos.</p>
                </div>
                <Image src='/about.jpg' alt='about_image' width={300} height={300} />
            </div>
        </section>
  )
}
