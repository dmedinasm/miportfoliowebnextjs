'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

import { AiOutlineDesktop } from 'react-icons/ai'
import { useScrolled } from '@/useScrolled'
import { useTheme } from '@/useTheme'

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [theme, setTheme] = useState('Light')
  useTheme({ themeOption: theme })
  const { isScrolled } = useScrolled()
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.textContent
    if (value === 'Light') {
      setTheme('Light')
    } else if (value === 'Dark') {
      setTheme('Dark')
    } else {
      setTheme('System')
    }
    setShowMenu(!showMenu)
  }
  return (
    <header className={` text-[12px] xs:text-sm text-gray-700 font-medium max-w-fit m-auto  mt-2 py-2  fixed right-0 left-0 z-10 dark:text-white ${isScrolled ? 'backdrop-filter backdrop-blur-lg bg-white bg-opacity-70  px-4 xs:px-6 shadow-lg rounded-3xl' : ''}`} >
      <nav className='flex items-center gap-2 xs:gap-4' >
        <Link href={'#education'} className='hover:text-yellow-500'>Formación</Link>
        <Link href={'#projects'} className='hover:text-yellow-500'>Proyectos</Link>
        <Link href={'#about'} className='hover:text-yellow-500'>Sobre Mí</Link>
        <a href={'mailto:dmedinasm@gmail.com'} className='hover:text-yellow-500'>Contacto</a>
        <div className='relative'>
        <div onClick={() => setShowMenu(!showMenu)} className='flex items-center cursor-pointer'>
          {theme === 'Light' && <MdOutlineLightMode className='size-5 hover:scale-125 transition duration-300' />}
          {theme === 'Dark' && <MdOutlineDarkMode className='size-5 hover:scale-125 transition duration-300' />}
          {theme === 'System' && <AiOutlineDesktop className='size-5 hover:scale-125 transition duration-300' />}
        </div>
        <div className={`absolute  top-[150%] z-10 right-[5%] i ${showMenu ? '' : 'hidden'}`}>
          <ul className= 'bg-white opacity-90 flex flex-col py-1 px-1 dark:bg-black  dark:text-white  rounded-lg drop-shadow-md w-full'>
            <li onClick={handleClick} className='hover:bg-gray-300 dark:hover:bg-gray-600 py-2 pl-2 pr-12 w-full cursor-pointer  rounded-sm'>Light</li>
            <li onClick={handleClick} className='hover:bg-gray-300 dark:hover:bg-gray-600 py-2 pl-2 pr-12 w-full cursor-pointer rounded-sm'>Dark</li>
            <li onClick={handleClick} className='hover:bg-gray-300  dark:hover:bg-gray-600 py-2 pl-2 pr-12 w-full cursor-pointer rounded-sm'>System</li>
          </ul>
        </div>
        </div>

      </nav>

    </header>

  )
}
