import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-300 text-zinc-900 h-12 flex items-center justify-center'>
        <div className='flex  items-center gap-1'>
            <FaRegCopyright />
            <span>{new Date().getFullYear()}</span>
        </div>
    </div>
  )
}

export default Footer