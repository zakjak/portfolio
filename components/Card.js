import Image from 'next/image'
import React from 'react'

const Card = ({ project }) => {
  return (
    <div className='w-full shadow-xl flex flex-col gap-2 rounded-2xl overflow-hidden'>
        <div className='w-full h-[15rem] cursor-pointer'>
            <Image className='w-full h-full object-cover' src={project.pic} width={200} height={250} />
        </div>
        <div className='px-6 py-4 flex flex-col gap-2'>
            <h2 className='font-semibold text-xl text-zinc-600'>{project.title}</h2>
            <p className='text-sm text-gray-500 w-[80%] text-justify'>{project.desc}</p>
            <h1 className='font-semibold text-zinc-600'>Tech Stack</h1>
            <div className='flex gap-2 text-gray-100 whitespace-nowrap'>
                {project.techs.map((tech, i) => (
                    <span className='text-md font-bold p-1 rounded-md bg-zinc-900'>{tech}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Card