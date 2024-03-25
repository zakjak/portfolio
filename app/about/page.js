import AboutLeft from '@/components/LeftSection/AboutLeft'
import AboutSmall from '@/components/LeftSection/AboutSmall'
import AboutMiddle from '@/components/MiddleSection/AboutMiddle'
import RightSection from '@/components/RightSection/RightSection'
import React from 'react'

const page = () => {

  return (
    <div className='min-h-screen bg-black '>
      <div className='grid w-[80%] grid-cols-8 gap-2 py-4 pt-[5em] mx-auto'>
        <AboutLeft />
        <div className='col-span-8 w-full lg:col-span-6 grid md:grid-cols-6 gap-2'>
          <AboutSmall />
          <AboutMiddle />
          <RightSection />
        </div>

      </div>
    </div>
  )
}

export default page