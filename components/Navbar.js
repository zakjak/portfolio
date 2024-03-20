import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 z-[999] bg-white h-12 shadow flex items-center'>
        <div className='w-[90%] mx-auto flex items-center justify-between'>
            <div className='text-2xl font-bold'>
                <Link href='/' className='logo'>Zakaria</Link>
            </div>
            <div className='flex gap-4 text-sm'>
                <Link className='hover:underline' href='/'>Home</Link>
                <Link className='hover:underline' href='#about'>About</Link>
                <Link className='hover:underline' href='#projects'>Projects</Link>
                <Link className='hover:underline' href='#contact'>Contact</Link>
            </div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar