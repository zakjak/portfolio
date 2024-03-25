'use client'
import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

const BackendTecknologies = () => {
    const [progressNode, setProgressNode] = useState(0)
    const [progressPython, setProgressPython] = useState(0)
    const [progressMongo, setProgressMongo] = useState(0)
    const [progressSql, setProgressSql] = useState(0)
    const [progressFirebase, setProgressFirebase] = useState(0)
    
    useEffect(() => {
        animate(0, 85, {
            duration: 2,
            onUpdate: latest => setProgressNode(Math.round(latest))
        })
        animate(0, 75, {
            duration: 2,
            onUpdate: latest => setProgressPython(Math.round(latest))
        })
        animate(0, 90, {
            duration: 2,
            onUpdate: latest => setProgressMongo(Math.round(latest))
        })
        animate(0, 75, {
            duration: 2,
            onUpdate: latest => setProgressSql(Math.round(latest))
        })
        animate(0, 80, {
            duration: 2,
            onUpdate: latest => setProgressFirebase(Math.round(latest))
        })
    }, [])

  return (
    <div className='flex flex-col gap-2 text-black'>
        <h2 className='font-bold text-[.9em]'>BackEnd Technologies:</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>Node.JS (Express.JS)</h3>
                <div className='h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressNode}%` }}
                        className='w-[85%] h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                        text-white text-xs flex items-center justify-center'>
                        {`${progressNode}%`}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>Python & Pandas & Numpy</h3>
                <div className='w-full h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div
                        style={{ width: `${progressPython}%` }} 
                        className='h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                    text-white text-xs flex items-center justify-center'>{`${progressPython}%`}</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>MongoDB</h3>
                <div className='w-full h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressMongo}%` }}
                        className='h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                    text-white flex items-center justify-center text-xs'>{`${progressMongo}%`}</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>SQL(PostgresSQL)</h3>
                <div className='h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressSql}%` }}
                        className='h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                        text-white flex items-center justify-center text-xs'>
                            {`${progressSql}%`}
                        </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xs font-semibold'>Firebase</h3>
                <div className='h-3 bg-gray-700 overflow-hidden rounded-full'>
                    <div 
                        style={{ width: `${progressFirebase}%` }}
                        className='w-[80%] h-full bg-bar bar backdrop-blur-[20px] rounded-full 
                        text-white flex items-center justify-center text-xs'>
                        {`${progressFirebase}%`}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackendTecknologies