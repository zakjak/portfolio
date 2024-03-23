import React from 'react'

const BackendTecknologies = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-zinc-700 font-semibold'>BackEnd Technologies:</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Node.JS (Express.JS)</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[85%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>85%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Python</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[75%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>75%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>MongoDB</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[90%] h-full bg-green-600 rounded-full 
                    text-white flex items-center justify-center text-[.8em]'>90%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>SQL(PostgresSQL)</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[75%] h-full bg-green-600 rounded-full 
                    text-white flex items-center justify-center text-[.8em]'>75%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Firebase</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[80%] h-full bg-green-600 rounded-full text-white flex items-center justify-center text-[.8em]'>80%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Pandas & Numpy</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[75%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>75%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackendTecknologies