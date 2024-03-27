'use client'
import { Button, TextInput, Textarea } from 'flowbite-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toast } from "flowbite-react";
import { FaCheck } from 'react-icons/fa6';

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  })

  const router = useRouter()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleEmail = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/send', {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        subject: `${formData.subject} (Contact me on ${formData.email})`,
        html: `${formData.message}`
      })
    })
    
    if(res.ok){
     setSuccess(true)
    }
  }

  return (
    <div id='contact' className='py-6 px-4 bg-black'>
        <h1 className='text-center mb-2 text-3xl 
            font-semibold text-white drop-shadow-xl'>
            Contact Me
        </h1>
        <div className='w-full flex items-center justify-center'>
            <form onSubmit={handleEmail} className='w-[30rem] flex flex-col gap-4 my-4'>
            <TextInput id='subject' onChange={handleChange} type='text' className='' placeholder='Enter subject' />
              <TextInput id='name' onChange={handleChange} type='text' className='' placeholder='Enter fullname' />
              <TextInput id='email' onChange={handleChange} type='email' placeholder='Enter Email' />
              <Textarea id='message' onChange={handleChange} placeholder='Enter message' className='min-h-24 max-h-24' />
              <Button type='submit' color='dark'>Submit</Button>
            </form>
        </div>
        {
              success && (
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <FaCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">Thanks for contacting me!!!</div>
                  <Toast.Toggle />
                </Toast>
              )
            }
    </div>
  )
}

export default Contact