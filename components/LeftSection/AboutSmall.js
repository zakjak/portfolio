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
    <div className='lg:hidden flex flex-col gap-2 col-span-8'>
        <div className='shadow-md bg-white rounded-lg  overflow-hidden'>
            <div className='w-full h-[40em] min-h-[40rem] overflow-hidden'>
            <Image alt='Yakubu Zakaria profile image' className='w-full h-full object-cover object-top' src='/cv.jpg' width={240} height={240} />
            </div>
            <div className='p-6'>
                <h1 className='font-semibold text-lg'>Yakubu Zakaria</h1>
                <div>
                <div className='flex items-center gap-2'>
                        <FaEnvelope className='text-2xl' />
                        <span className='text-xl'>yakubuzakaria833@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLinkedin className='text-2xl' />
                        <Link href='https://www.linkedin.com/in/yakubu-zakaria-4a7652300' className='text-xl underline text-blue-600'>Yakubu Zakaria</Link>
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