'use client'
import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

const OtherTechnologies = () => {
    const [progressAdobe, setProgressAdobe] = useState(0)
    const [progressEclipse, setProgressEclipse] = useState(0)

    useEffect(() => {
        animate(0, 90, {
            duration: 2,
            onUpdate: latest => setProgressAdobe(Math.round(latest))
        })
        animate(0, 92, {
            duration: 2,
            onUpdate: latest => setProgressEclipse(Math.round(latest))
        })
    }, [])

  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-zinc-700 font-bold text-[.9em]'>Other Technologies (Softwares)</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Adobe Photoshop & Figma</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressAdobe}%` }}
                        className='w-[85%] h-full bg-green-600 rounded-full 
                        text-white text-xs flex items-center justify-center text-[.8em]'>
                            {`${progressAdobe}%`}
                        </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Eclipse & S3-Graph</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressEclipse}%` }}
                        className='w-[75%] h-full bg-green-600 rounded-full 
                        text-white text-xs flex items-center justify-center'>
                            {`${progressEclipse}%`}
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherTechnologies