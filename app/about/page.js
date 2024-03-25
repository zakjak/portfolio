import AboutLeft from '@/components/LeftSection/AboutLeft'
import AboutSmall from '@/components/LeftSection/AboutSmall'
import AboutMiddle from '@/components/MiddleSection/AboutMiddle'
import RightSection from '@/components/RightSection/RightSection'
import React from 'react'

const page = () => {

  return (
    <div className='min-h-screen bg-gray-200 w-full pb-10'>
      <div className='grid w-[90%] md:w-[80%] gap-2 pt-[5em] mx-auto grid-cols-8'>
        <AboutLeft />
        <div className='w-full col-span-8 lg:col-span-4 flex flex-col gap-2'>
          <AboutSmall />
          <AboutMiddle />
        </div>
        <RightSection />
      </div>
    </div>
  )
}

export default page