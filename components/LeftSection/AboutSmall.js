import Image from 'next/image'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const AboutSmall = () => {
  return (
    <div className='shadow-md bg-white rounded-lg col-span-8 lg:hidden block overflow-hidden'>
        <div className='w-full h-[40em] min-h-[40rem] overflow-hidden'>
        <Image alt='Yakubu Zakaria profile image' className='w-full h-full object-cover object-top' src='/cv.jpg' width={240} height={240} />
        </div>
        <div className='p-6'>
            <h1 className='font-semibold text-lg'>Yakubu Zakaria</h1>
            <div>
            <div className='flex items-center gap-2'>
                    <FaEnvelope className='text-2xl' />
                    <span className='text-xl'>yzakaria@ttu.edu</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaLinkedin className='text-2xl' />
                    <Link href='#' className='text-xl'>Yakubu Zakaria</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <BsFillTelephoneFill className='text-2xl' />
                    <span className='text-xl'>+1-806-317-3617</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSmall