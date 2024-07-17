'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

import { AiOutlineDesktop } from 'react-icons/ai'
import { useScrolled } from '@/useScrolled'

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [ligthMode, setLightMode] = useState('System')
  const { isScrolled } = useScrolled()
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.textContent
    if (value === 'Light') {
      setLightMode('Light')
    } else if (value === 'Dark') {
      setLightMode('Dark')
    } else {
      setLightMode('System')
    }
    setShowMenu(!showMenu)
  }
  return (
    <header className={`text-sm text-gray-700 font-medium max-w-fit m-auto  mt-2 py-2  fixed right-0 left-0 z-10 ${isScrolled ? 'bg-white bg-opacity-65 px-6 shadow-lg rounded-3xl' : ''}`} >
      <nav className='flex place-items-center gap-4' >
        <Link href={'#education'} className='hover:text-yellow-500'>Formación</Link>
        <Link href={'#projects'} className='hover:text-yellow-500'>Proyectos</Link>
        <Link href={'#about'} className='hover:text-yellow-500'>Sobre Mí</Link>
        <a href={'mailto:dmedinasm@gmail.com'} className='hover:text-yellow-500'>Contacto</a>
        <button onClick={() => setShowMenu(!showMenu)}>
          {ligthMode === 'Light' && <MdOutlineLightMode className='size-5 hover:scale-125 transition duration-300' />}
          {ligthMode === 'Dark' && <MdOutlineDarkMode className='size-5 hover:scale-125 transition duration-300' />}
          {ligthMode === 'System' && <AiOutlineDesktop className='size-5 hover:scale-125 transition duration-300' />}
        </button>
        <div className={`fixed top-12 z-10 right-[37%] i ${showMenu ? '' : 'hidden'}`}>
          <ul className='bg-white bg-opacity-90 flex flex-col py-1 px-1  rounded-lg drop-shadow-md w-full'>
            <li onClick={handleClick} className='hover:bg-gray-300 py-2 pl-2 pr-12 w-full cursor-pointer  rounded-sm'>Light</li>
            <li onClick={handleClick} className='hover:bg-gray-300 py-2 pl-2 pr-12 w-full cursor-pointer rounded-sm'>Dark</li>
            <li onClick={handleClick} className='hover:bg-gray-300  py-2 pl-2 pr-12 w-full cursor-pointer rounded-sm'>System</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
