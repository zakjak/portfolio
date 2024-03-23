import React from 'react'
import RightCareer from './RightCareer'
import RightEmployment from './RightEmployment'
import RightVoluntary from './RightVoluntary'

const AboutMiddle = () => {
  return (
    <div className='lg:col-span-4 col-span-8 md:col-span-6 flex flex-col gap-2'>
      <RightCareer />
      <RightEmployment />
      <RightVoluntary />
    </div>
  )
}

export default AboutMiddle