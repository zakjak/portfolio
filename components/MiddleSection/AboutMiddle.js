import React from 'react'
import RightCareer from './RightCareer'
import RightEmployment from './RightEmployment'
import RightVoluntary from './RightVoluntary'

const AboutMiddle = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <RightCareer />
      <RightEmployment />
      <RightVoluntary />
    </div>
  )
}

export default AboutMiddle