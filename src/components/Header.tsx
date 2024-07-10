import Link from 'next/link'
import React from 'react'

export default function Header () {
  return (
    <nav className='text-sm text-gray-700 font-medium max-w-fit m-auto flex  place-items-center gap-4 py-4'>
        <Link href={'#'} className='hover:text-yellow-500'>Formación</Link>
        <Link href={'#'} className='hover:text-yellow-500'>Proyectos</Link>
        <Link href={'#'} className='hover:text-yellow-500'>Sobre Mí</Link>
        <Link href={'#'} className='hover:text-yellow-500'>Contacto</Link>
    </nav>
  )
}
