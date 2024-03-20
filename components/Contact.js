import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='h-[25rem] py-6 bg-zinc-800'>
        <h1 className='text-center mb-2 text-3xl 
            font-semibold text-slate-200 drop-shadow-xl'>
            Contact Me
        </h1>
        <div className='w-full flex items-center justify-center'>
            <form className='w-[30rem] flex flex-col gap-4 my-4'>
                <TextInput type='text' className='' placeholder='Enter fullname' />
                <TextInput type='email' placeholder='Enter Email' />
                <Textarea placeholder='Enter message' className='min-h-24 max-h-24' />
                <Button>Submit</Button>
            </form>
        </div>
    </div>
  )
}

export default Contact