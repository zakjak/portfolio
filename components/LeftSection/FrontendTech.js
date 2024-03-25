'use client'

import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

const FrontendTech = () => {
    const [progressReact, setProgressReact] = useState(0)
    const [progressJava, setProgressJava] = useState(0)
    
    useEffect(() => {
        animate(0, 90, {
            duration: 2,
            onUpdate: latest => setProgressReact(Math.round(latest))
        })
        animate(0, 92, {
            duration: 2,
            onUpdate: latest => setProgressJava(Math.round(latest))
        })
    }, [])

  return (
    <div className='flex flex-col gap-2 text-black'>
        <h2 className='font-bold text-[.9em]'>FrontEnd Technologies:</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>JavaScript & HTML & CSS</h3>
                <div className='w-full h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div
                        style={{ width: `${progressJava}%` }}
                        className='h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                    text-xs flex items-center text-white justify-center text-[.8em]'>{`${progressJava}%`}</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>React.JS & Next.JS</h3>
                <div className='w-full h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div
                        style={{ width: `${progressReact}%` }}
                        className={`h-full progress bg-bar bar backdrop-blur-[20px] rounded-full
                        text-white text-xs flex items-center justify-center`}>
                        {`${progressReact}%`} 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontendTech