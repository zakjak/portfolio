'use client'
import { Link as LinkRef } from 'react-scroll'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  }, [location])
  
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
    <nav className={`w-full sticky top-0 z-[999] bg-white ${pathname === '/about' ? 'h-16' : 'h-12'} shadow flex items-center`}>
        <div className={`w-[90%] mx-auto ${pathname === '/about' ? '' : 'flex items-center justify-between'}`}>
            <div className={`${pathname === '/about' ? 'text-6xl text-center' : 'text-2xl font-bold'}`}>
                <div onClick={() => handleHome('/')} className='logo cursor-pointer'>Zakaria</div>
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
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar