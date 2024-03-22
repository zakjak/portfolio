'use client'
import { Card } from 'flowbite-react'
import { useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

const page = () => {

  const Router = useRouter()

  useEffect(() => {
    setInterval(() => {
      Router.push('/')
    }, 2000)
  })

  return (
    <div className='w-full min-h-screen flex items-center'>
      <div className='w-full h-full bg-transparent flex justify-center'>
        <Card className='shadow-xl text-center bg-zinc-200 w-[30%] h-[30rem] rounded-lg flex items-center justify-start'>
          <div className='flex justify-center text-[4em]'>
            <FaCircleCheck className='text-center text-green-500' />
          </div>
          <h5 className='text-gray-500'>Thank's For Contacting me!!!</h5>
          <p className='text-gray-500 text-sm'>You will be redirected to the homepage!!!</p>
        </Card>
      </div>
    </div>
  )
}

export default page