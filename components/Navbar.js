'use client'
import Link from 'next/link'
import { Link as LinkRef } from 'react-scroll'

const Navbar = () => {

  return (
    <nav className='w-full sticky top-0 z-[999] bg-white h-12 shadow flex items-center'>
        <div className='w-[90%] mx-auto flex items-center justify-between'>
            <div className='text-2xl font-bold'>
                <Link href='/' className='logo'>Zakaria</Link>
            </div>
            <div className='flex gap-6 text-sm'>
              <LinkRef to='about' smooth={true} duration={1000} className='hover:underline cursor-pointer'>
                  Home
                </LinkRef>
                <Link href='/about'  className='hover:underline cursor-pointer' >
                    About
                </Link>
                <LinkRef to='projects' smooth={true} duration={1000} className='hover:underline cursor-pointer'>
                  Projects
                </LinkRef>
                <LinkRef to='contact'  smooth={true} duration={1000}  className='hover:underline cursor-pointer'>
                  Contact
                </LinkRef>
            </div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar