import Link from 'next/link'
import React from 'react'

export default function Footer () {
  return (
    <footer className='my-24 flex items-center justify-between text-sm '>
        <p className='text-gray-500'>&copy; 2024 Daniel Miguel Medina Mateo</p>
        <ul className='flex items-center gap-4'>
            <li className='hover:underline'><Link href='#'>Sobre Mí</Link></li>
            <li><Link href='#' className='hover:underline'>Contacto</Link></li>
        </ul>
    </footer>
  )
}
