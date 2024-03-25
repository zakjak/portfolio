import Image from 'next/image'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs"
import Link from 'next/link'
import FrontendTech from './FrontendTech'
import BackendTecknologies from './BackendTecknologies'
import OtherTechnologies from './OtherTechnologies'

const AboutLeft = () => {
  return (
    <div className='col-span-2 hidden lg:block shadow-md overflow-hidden bg-card card text-white rounded-lg backdrop-blur-[20px]'>
        <div className='relative'>
            <Image alt='Yakubu Zakaria profile image' className='w-full h-[15em] lg:h-[28em] object-cover object-top' src='/cv.jpg' width={240} height={240} />
            <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-12 flex items-center p-4'>
                <h2 className='lg:text-xl text-white md:text-xl text-lg'>Yakubu Zakaria</h2>
            </div>
        </div>
        <div className='px-6  py-3'>
            <div className='flex flex-col gap-2 text-black'>
                <div className='flex items-center gap-1'>
                    <div className='w-[1rem] h-[1rem] flex items-center'>
                        <FaEnvelope className='text-lg' />
                    </div>
                    <span className='text-sm'>yakubuzakaria833@gmail.com</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaLinkedin className='text-xl' />
                    <Link href='https://www.linkedin.com/in/yakubu-zakaria-4a7652300' target='_blank' className='text-sm font-semibold underline'>Yakubu Zakaria</Link>
                </div>
                <div className='flex items-center gap-1'>
                    <BsFillTelephoneFill className='text-lg' />
                    <span className='text-sm'>+1-806-317-3617</span>
                </div>
            </div>
            <div className='mt-2 flex flex-col'>
                <h1 className='font-bold text-lg text-black'>Computer and Language Proficiency</h1>
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