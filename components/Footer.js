import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black card text-white h-12 flex items-center justify-center'>
        <div className='gap-1 bg-card w-full h-full flex items-center justify-center'>
            <FaRegCopyright />
            <span>{new Date().getFullYear()}</span>
        </div>
    </div>
  )
}

export default Footer