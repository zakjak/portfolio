'use client'

import { Card } from 'flowbite-react'
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center'>
      <div className='w-full h-full bg-transparent flex justify-center'>
        <Card className='bg-white shadow-xl w-[30%] h-[30rem] rounded-lg flex items-center justify-start'>
          <div className='flex justify-center text-[4em]'>
            <FaCircleCheck className='text-center' />
          </div>
          <h5 className=''>Thank's For Contacting me!!!</h5>
        </Card>
      </div>
    </div>
  )
}

export default page