import React from 'react'
import RightCareer from './RightCareer'
import RightEmployment from './RightEmployment'
import RightVoluntary from './RightVoluntary'

const AboutMiddle = () => {
  return (
    <div className='flex flex-col gap-2 w-full lg:overflow-hidden lg:scroll-smooth lg:h-[62rem] rounded-lg'>
      <div className='overflow-y-auto scroll flex flex-col gap-2'>
        <RightCareer />
        <RightEmployment />
        <RightVoluntary />
      </div>
    </div>
  )
}

export default AboutMiddle