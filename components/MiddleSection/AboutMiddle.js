import React from 'react'
import RightCareer from './RightCareer'
import RightEmployment from './RightEmployment'
import RightVoluntary from './RightVoluntary'

const AboutMiddle = () => {
  return (
    <div className='w-full shadow-md lg:overflow-hidden scroll lg:scroll-smooth 
    rounded-lg bg-card card backdrop-blur-[20px]'>
      <div className='ov overflow-y-scroll lg:h-[62rem] py-4 px-6 flex flex-col gap-2'>
        <RightCareer />
        <RightEmployment />
        <RightVoluntary />
      </div>
    </div>
  )
}

export default AboutMiddle