import Image from 'next/image'
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'
import { TAG } from '../tagstack'
export default function ProyectItem ({ title, description, image, tags } : {title:string, description: string, image:string, tags:TAG[]}) {
  return (
    <div className='flex items-start gap-8 text-gray-700 mb-32'>
        <Image src={image} alt='project-image' width={500} height={500} className='object-cover  transition duration-500  hover:shadow-2xl hover:scale-105 rounded-lg'/>
        <div className='flex flex-col justify-start gap-4'>
            <h2 className='text-3xl font-medium'>{title}</h2>
            <div className='flex items-center gap-4'>
                {
                    tags.map(tag =>
                        <span key={tag.name} className='flex items-center gap-2 text-[13px]  bg-black text-white px-2 py-1 w-fit rounded-xl'>
                            <Image src={tag.icon} alt={tag.name} width={16} height={16} /> {tag.name}
                        </span>
                    )
                }
            </div>
            <p className='leading-[1.6]'>{description}</p>
            <div className='flex items-center gap-4'>
                <a href='#' className='bg-gray-900 flex items-center gap-2 text-white px-4 py-2 rounded-xl hover:opacity-95 hover:shadow-lg'><FiGithub />Code</a>
                <a href='#' className='bg-gray-900 flex items-center gap-2 text-white px-4 py-2 rounded-xl hover:opacity-95 hover:shadow-lg' ><GoLink />Preview</a>
            </div>
        </div>
    </div>
  )
}
