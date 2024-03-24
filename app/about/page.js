import AboutLeft from '@/components/LeftSection/AboutLeft'
import AboutSmall from '@/components/LeftSection/AboutSmall'
import AboutMiddle from '@/components/MiddleSection/AboutMiddle'
import RightSection from '@/components/RightSection/RightSection'
import React from 'react'

const page = () => {

  return (
    <div className='min-h-screen w-[95%] grid grid-cols-8 gap-2 mx-auto py-4'>
      <AboutLeft />
      <div className='col-span-8 w-full lg:col-span-6 grid md:grid-cols-6 gap-2'>
        <AboutSmall />
        <AboutMiddle />
        <RightSection />
      </div>
    </div>
  )
}

export default page