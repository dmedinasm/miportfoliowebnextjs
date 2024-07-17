import Image from 'next/image'
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'
import { TAG } from '../tagstack'
export default function ProyectItem ({ title, description, image, tags } : {title:string, description: string, image:string, tags:TAG[]}) {
  return (
    <div className='flex items-start gap-8 text-gray-700 mb-32 '>
        <div className='relative bg-projectGradient w-[700px] h-[250px] overflow-hidden flex-1 rounded-lg transition duration-500   hover:shadow-2xl' >
        <Image src={image} alt='project-image' width={400} height={400} className='transition duration-500   bottom-10 left-6  rounded-lg  absolute hover:scale-105' loading='lazy'/>
        </div>

        <div className='flex flex-col justify-start gap-4 flex-1'>
            <h2 className='text-3xl font-medium dark:text-white'>{title}</h2>
            <div className='flex items-center gap-4'>
                {
                    tags.map(tag =>
                        <span key={tag.name} style={{ backgroundColor: `${tag.bgColor}` }} className='flex items-center gap-2 text-[13px]   text-white px-4 py-[0.8px] w-fit rounded-xl'>
                            <Image src={tag.icon} alt={tag.name} width={16} height={16} /> {tag.name}
                        </span>
                    )
                }
            </div>
            <p className='leading-[1.6] dark:text-gray-400'>{description}</p>
            <div className='flex items-center gap-4'>
                <a href='#' className='bg-gray-900 dark:bg-gray-700 dark:border dark:border-gray-500 flex items-center gap-2 dark:hover:border-gray-900 text-white px-4 py-2 rounded-xl hover:opacity-95 hover:shadow-lg'><FiGithub />Code</a>
                <a href='#' className='bg-gray-900 dark:bg-gray-700 dark:border dark:border-gray-500 flex items-center gap-2 dark:hover:border-gray-900 text-white px-4 py-2 rounded-xl hover:opacity-95 hover:shadow-lg' ><GoLink />Preview</a>
            </div>
        </div>
    </div>
  )
}
