'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AboutSmall = () => {
    const [pathname, setPathname] = useState('')

    useEffect(() => {
        if(location.pathname === '/about'){
          setPathname('')
          setPathname('/about')
        }else{
          setPathname('')
          setPathname('/')
        }
      }, [])


  return (
    <div className='lg:hidden  w-full bg-card card text-black rounded-lg backdrop-blur-[20px]'>
        <div className='shadow-md rounded-lg  overflow-hidden'>
            <div className='w-full h-[20em] md:h-[30em] overflow-hidden'>
            <Image alt='Yakubu Zakaria profile image' className='w-full h-full object-cover object-top' src='/cv.jpg' width={240} height={240} />
            </div>
            <div className='py-6 px-4'>
                <h1 className='font-semibold text-lg'>Yakubu Zakaria</h1>
                <div>
                <div className='flex items-center gap-1'>
                        <div className='w-[2rem] h-[2rem] flex items-center'>
                          <FaEnvelope className='text-2xl' />
                        </div>
                        <span className='text-xl'>yakubuzakaria833@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLinkedin className='text-2xl' />
                        <Link href='https://linkedin.com/in/yakubu-zakaria-90a7b6224' target='_blank' className='text-xl underline'>Yakubu Zakaria</Link>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsFillTelephoneFill className='text-2xl' />
                        <span className='text-xl'>+1-806-317-3617</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutSmall