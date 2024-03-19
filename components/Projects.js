import { projects } from '@/utils/data'
import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div id='projects' className='py-6'>
      <h1 className='text-center mb-4 text-3xl 
      font-semibold text-slate-800 drop-shadow-xl'>
        My Works
      </h1>
      <div className='grid grid-cols-3 gap-2 w-[90%] mx-auto'>
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects