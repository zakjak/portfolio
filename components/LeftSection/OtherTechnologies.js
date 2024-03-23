import React from 'react'

const OtherTechnologies = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-zinc-700 font-semibold'>Other Technologies (Softwares)</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Adobe Photoshop && Figma</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[85%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>85%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>MS Office</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[95%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>95%</div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-zinc-600 text-xs font-semibold'>Eclipse & S3-Graph</h3>
                <div className='w-full h-3 bg-gray-300 overflow-hidden rounded-full'>
                    <div className='w-[75%] h-full bg-green-600 rounded-full 
                    text-white text-sm flex items-center justify-center text-[.8em]'>75%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherTechnologies