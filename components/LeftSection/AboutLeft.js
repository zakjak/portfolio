import Image from 'next/image'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs"
import Link from 'next/link'
import FrontendTech from './FrontendTech'
import BackendTecknologies from './BackendTecknologies'
import OtherTechnologies from './OtherTechnologies'

const AboutLeft = () => {
  return (
    <div className='col-span-2 hidden lg:block bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='relative'>
            <Image alt='Yakubu Zakaria profile image' className='w-full h-[15em] lg:h-[28em] object-cover object-top' src='/cv.jpg' width={240} height={240} />
            <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-12 flex items-center p-4'>
                <h2 className='lg:text-2xl text-white md:text-xl text-lg'>Yakubu Zakaria</h2>
            </div>
        </div>
        <div className='p-6'>
            <div className='flex flex-col gap-2 text-zinc-700'>
                <div className='flex items-center gap-1'>
                    <FaEnvelope className='text-lg' />
                    <span className='text-sm'>yzakaria@ttu.edu</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaLinkedin className='text-lg' />
                    <Link href='#' className='text-sm'>Yakubu Zakaria</Link>
                </div>
                <div className='flex items-center gap-1'>
                    <BsFillTelephoneFill className='text-lg' />
                    <span className='text-sm'>+1-806-317-3617</span>
                </div>
            </div>
            <div className='mt-2 flex flex-col gap-1'>
                <h1 className='font-bold text-[1.1em] text-zinc-700'>Computer and Language Proficiency</h1>
                <div className='flex flex-col gap-4 mt-1'>
                    <FrontendTech />
                    <BackendTecknologies />
                    <OtherTechnologies />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutLeft