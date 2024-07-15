'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`text-sm text-gray-700 font-medium max-w-fit m-auto  mt-2 py-2 fixed right-0 left-0 z-10 ${isScrolled ? 'bg-white bg-opacity-65 px-6 shadow-lg rounded-3xl' : ''}`} >
      <nav className='flex place-items-center gap-4' >
        <Link href={'#education'} className='hover:text-yellow-500'>Formación</Link>
        <Link href={'#projects'} className='hover:text-yellow-500'>Proyectos</Link>
        <Link href={'#about'} className='hover:text-yellow-500'>Sobre Mí</Link>
        <a href={'mailto:dmedinasm@gmail.com'} className='hover:text-yellow-500'>Contacto</a>
      </nav>
    </header>
  )
}
