import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/utils/data'

const page = () => {
  return (
    <div className='min-h-screen w-[94%] [900px]:w-[80%] mx-auto mt-6'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>           
         {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
        ))}
        </div>
    </div>
  )
}

export default page