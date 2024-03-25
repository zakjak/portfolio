'use client'

import { projects } from '../utils/data'
import Card from './Card'
import {motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      // transition={{ duration: 0.1, ease: "easeIn" }}
      id='projects' 
      className='py-6 z-50 bg-card card text-white rounded-lg backdrop-blur-[20px]'>
      <h1 className='text-center mb-4 text-3xl 
      font-semibold text-slate-800 drop-shadow-xl'>
        My Works
      </h1>
      <div className='w-[94%] mx-auto'>
      {/* <Link href='/projects' className='p-0 flex items-center text-sm cursor-pointer mb-1 text-gray-600 hover:text-zinc-900'><span className=' '>Show more</span><FaChevronRight /></Link> */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
      </div>
    </motion.div>
  )
}

export default Projects