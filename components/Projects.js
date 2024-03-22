import { projects } from '../utils/data'
import Card from './Card'
import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='py-6 z-50 bg-zinc-200'>
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
    </div>
  )
}

export default Projects