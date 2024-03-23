import AboutLeft from '@/components/LeftSection/AboutLeft'
import AboutMiddle from '@/components/MiddleSection/AboutMiddle'
import RightSection from '@/components/RightSection/RightSection'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen p-4 grid grid-cols-8 gap-2'>
      <AboutLeft />
      <div className='col-span-6 grid grid-cols-6 gap-2'>
        <AboutMiddle />
        <RightSection />
      </div>
    </div>
  )
}

export default page