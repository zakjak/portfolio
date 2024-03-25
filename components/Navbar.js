'use client'
import { Link as LinkRef } from 'react-scroll'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'

const Navbar = () => {
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
  
  const router = useRouter()

  const handleHome = (pathname) => {
    router.push(pathname)
    setPathname(pathname)
  }

  const handleAbout = (pathname) => {
    router.push(pathname)
    setPathname(pathname)

  }


  

  return (
    <nav className='fixed z-[999] h-14 w-full mt-4'>
      <div className='backdrop-blur-[15px] bg-navbar w-[80%] mx-auto rounded-full h-full flex items-center justify-center'>
        <div className={`w-[90%] mx-auto ${pathname === '/about' ? '' : 'flex items-center justify-between'}`}>
            <div className={`${pathname === '/about' ? 'flex text-4xl justify-between items-center' : 'text-2xl font-bold'}`}>
                <div onClick={() => handleHome('/')} className='logo cursor-pointer'>Zakaria</div>
                {
                  pathname === '/about' && (
                    <Button color='dark' onClick={() => handleHome('/')}>Home</Button>
                  )
                }
            </div>
            {
              pathname !== '/about' && (
                <div className='flex gap-6 text-sm'>
                    <div onClick={() => handleAbout('/about')}className='hover:underline cursor-pointer' >
                        About
                    </div>
                    <LinkRef to='projects' smooth={true} duration={1000} className='hover:underline cursor-pointer'>
                      Projects
                    </LinkRef>
                    <LinkRef to='contact'  smooth={true} duration={1000}  className='hover:underline cursor-pointer'>
                      Contact
                    </LinkRef>
                </div>

              )
            }
        </div>
      </div>
    </nav>
  )
}

export default Navbar