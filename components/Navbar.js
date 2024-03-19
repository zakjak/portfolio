import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-12 shadow flex items-center'>
        <div className='w-[90%] mx-auto flex items-center justify-between'>
            <div className='text-2xl font-bold'>
                <Link href='/' className='logo'>Zakaria</Link>
            </div>
            <div className='flex gap-4 text-sm'>
                <Link className='hover:underline' href='/#'>Home</Link>
                <Link className='hover:underline' href='/#'>About</Link>
                <Link className='hover:underline' href='/#'>Projects</Link>
                <Link className='hover:underline' href='/#'>Contact</Link>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar