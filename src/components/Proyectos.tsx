import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import ProyectItem from './ProyectItem'
import { TAGS } from '../tagstack'
export default function Proyectos () {
  return (
    <section className='w-full mx-auto container sm:max-w-2xl md:max-w-4xl mb-10'>
    <h2 id='projects' className='text-4xl flex items-center text-gray-700 dark:text-white font-semibold gap-4 pb-6 '><FaLaptopCode />Proyectos</h2>
    <div className='flex flex-col gap-y-20'>
    <ProyectItem
     title={'Restaurant Landing Page Template'}
     image='/restaurantuxui.jpg'
     description={'Landing Page Template para un restaurante a partir de un diseño preestablecido en Figma. Creado con TailwindCSS y React.'}
     tags={[TAGS.React, TAGS.Tailwind]}
     linkRepo='https://github.com/dmedinasm/restaurantuxui'
     linkWeb='https://restaurantuxiu.netlify.app/'

    />
    <ProyectItem
     title={'Dietary Planner Tool'}
     image='/dietary.jpg'
     description={'Herramienta online desarrollada con React y TailwindCSS para crear planes de dieta a partir de filtros de información que suministra el usuario.'}
     tags={[TAGS.React, TAGS.Tailwind]}
     linkRepo='https://github.com/dmedinasm/newdietaryplan'
     linkWeb='https://dietaryplannertool.netlify.app/'
    />
    <ProyectItem
     title={'FashionTour - Online Store '}
     image='/fashiontour.jpg'
     description={'Fashion Tour es una tienda en línea ficticia que muestra la implementación de funciones esenciales de comercio electrónico.Creada con Next.js y Prisma.js ORM'}
     tags={[TAGS.Nextjs, TAGS.Prisma]}
     linkRepo='https://github.com/dmedinasm/fashiontour-ecommerce'
     linkWeb='https://fashiontour-ecommerce.vercel.app/'
    />
    </div>

   </section>
  )
}
