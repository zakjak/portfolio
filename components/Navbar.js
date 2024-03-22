'use client'
// import Link from 'next/link'
import React, { useEffect } from 'react'
import { Link as LinkRef } from 'react-scroll'
import Link from 'next/link'


const Navbar = () => {

  // useEffect(() => {
    
  // }, [contactRef.current])

  return (
    <nav className='w-full sticky top-0 z-[999] bg-white h-12 shadow flex items-center'>
        <div className='w-[90%] mx-auto flex items-center justify-between'>
            <div className='text-2xl font-bold'>
                <Link href='/' className='logo'>Zakaria</Link>
            </div>
            <div className='flex gap-6 text-sm'>
                <LinkRef to='about' smooth={true} duration={700} className='hover:underline cursor-pointer' >
                    About
                </LinkRef>
                <LinkRef to='projects' smooth={true} duration={700} className='hover:underline cursor-pointer'>
                  Projects
                </LinkRef>
                <LinkRef to='contact'  smooth={true} duration={700}  className='hover:underline cursor-pointer'>
                  Contact
                </LinkRef>
            </div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar