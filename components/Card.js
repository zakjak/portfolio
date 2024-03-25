'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'flowbite-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Card = ({ project }) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .5 }}
        className='w-full bg-card card text-white rounded-lg backdrop-blur-[20px] shadow-xl flex flex-col gap-2 rounded-t-2xl overflow-hidden'>
        <Link href={project.href} target='_blank' className='w-full h-[15rem]'>
            <Carousel leftControl=' ' indicators={false} rightControl=' '>
                {project.pics.map((pic, i) => (
                    <Image key={i} alt={project.title} className='w-full h-full object-cover' src={pic} width={200} height={250} />
                ))}
            </Carousel>
        </Link>
        <div className='px-6 py-4 flex flex-col gap-2'>
            <h2 className='font-semibold text-xl text-black underline'>{project.title}</h2>
            <p className='text-sm text-gray-500 w-[90%] text-justify'>{project.desc}</p>
            <h1 className='font-semibold text-black underline'>Tech Stack</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-black'>Frontend</h2>
                    <div className='flex gap-2 text-gray-100 whitespace-nowrap'>
                        {project.client.map((tech, i) => (
                            <span key={i} className='text-md bg-black font-bold p-1 rounded-md bg-zinc-900'>{tech}</span>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-black'>Backend</h2>
                    <div className='flex gap-2 text-gray-100 whitespace-nowrap'>
                        {project.api.map((tech, i) => (
                            <span key={i} className='text-md bg-black font-bold p-1 rounded-md bg-zinc-900'>{tech}</span>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Card