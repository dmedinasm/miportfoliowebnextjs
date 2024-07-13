import Image from 'next/image'
import React from 'react'
import { BsPersonCheckFill } from 'react-icons/bs'
export default function AboutMe () {
  return (
        <section>
            <h2 id='about' className='text-4xl flex items-center text-gray-700 font-semibold gap-8 mb-10'><BsPersonCheckFill />Sobre Mí</h2>
            <div className='flex items-center gap-6 flex-1'>
                <div className='flex flex-col justify-start gap-6 leading-[1.7] '>
                    <p>Durante mis estudios en la <span className='text-yellow-500  font-medium'>Tecnicatura en Informática</span>, adquirí las <span className='text-yellow-500 font-medium'>bases fundamentales de la programación y el pensamiento lógico</span>. Esta formación inicial me permitió desarrollar una comprensión sólida de los conceptos esenciales de la informática.</p>
                    <p>La carrera de Ingeniería en Telecomunicaciones, me permitió fortalecer mis conocimientos de <span className='text-yellow-500 font-medium'>lógica computacional mediante materias como  lenguaje ensamblador aplicado a sistemas con microprocesadores</span>.Luego me desempeñé como Ingeniero en Telecomunicaciones, desarrollando habilidades de gestión y trabajo en equipo.</p>
                    <p>En 2022, retomé mi pasión por la programación, <span className='text-yellow-500 font-medium'>enfocándome en el Desarrollo Web. He completado varios cursos y proyectos</span>, y actualmente estoy comprometido en aportar valor a partir de los conocimientos adquiridos.</p>
                </div>
                <Image src='/about.jpg' alt='about_image' width={400} height={400} />
            </div>
        </section>
  )
}
