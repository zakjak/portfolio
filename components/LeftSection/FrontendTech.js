import React from 'react'

const FrontendTech = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-zinc-700 font-bold text-[.9em]'>FrontEnd Technologies:</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>JavaScript & HTML & CSS</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[92%] h-full bg-green-600 rounded-full 
                    text-white text-xs flex items-center justify-center text-[.8em]'>92%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>React.JS & Next.JS</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[90%] h-full bg-green-600 rounded-full
                     text-white text-xs flex items-center justify-center text-[.8em]'>90%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontendTech