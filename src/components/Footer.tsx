import Link from 'next/link'
import React from 'react'

export default function Footer () {
  return (
    <footer className='w-full mx-auto container sm:max-w-2xl md:max-w-4xl '>
      <div className='py-20 flex items-center justify-between text-sm'>
        <p className='text-gray-500 dark:text-gray-300'>&copy; 2024 Daniel Miguel Medina Mateo</p>
        <ul className='flex items-center gap-4'>
          <li className='hover:underline dark:text-white'><Link href='#about'>Sobre Mí</Link></li>
          <li><a href='mailto:dmedinasm@gmail.com' className='hover:underline dark:text-white'>Contacto</a></li>
        </ul>
      </div>

    </footer>
  )
}
