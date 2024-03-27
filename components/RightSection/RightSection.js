import Link from 'next/link'
import React from 'react'

const RightSection = () => {
  return (
    <div className='col-span-8 lg:col-span-2 w-full rounded-lg'>
      <div className='bg-card card rounded-lg backdrop-blur-[20px] p-4'>
        <div>
          <h1 className='font-bold text-2xl text-zinc-700'>Education</h1>
          <p><b>Texas Tech University</b> <br />
          <span className='text-sm'>MSc Petroleum Engineering, USA (August, 2022 – August,2024).</span></p>        
          <p><b>Tyumen Industrial University</b> <br />
          <span className='text-sm'>Bachelor of Science in Petroleum Engineering (Exploitation), 
          Russia (August, 2018 – May, 2022).</span></p>
          <p><b>Accra Academy</b> <br />
          <span className='text-sm'>(WASSCE, General Science), Ghana (2013 – 2016)</span></p>
        </div>
        <div>
          <h1 className='font-bold text-xl text-zinc-700'>Languages</h1>
          <div className='lg:flex lg:flex-col gap-1'>
            <span>- English (Fluent)</span>
            <span>- Fluent in Russian</span>
            <span>- Dagbani</span>
            <span>- Twi.</span>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-xl text-zinc-700'>Fields of Interest and Specialization </h1>
          <ul className='text-sm'>
            <li>- Drilling</li>
            <li>- Advance Reservoir Engineering</li>
            <li>- Reservoir Simulation</li>
            <li>- Production</li>
            <li>- EOR</li>
            <li>- Simulation in EOR</li>
            <li>- Well Logging</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-2xl text-zinc-700'>Referees</h1>
          <div className='flex flex-col gap-2'>
            <div className=''>
              <p>
                <b>Prof. Mulyavin Simion Fedrovich</b>
                <div className='text-sm flex flex-col'>
                  <span>Tyumen Industrial University,</span>
                  <span>Tyumen, Russia.</span>
                  <span>Email: muljavinsf@tyuiu.ru</span>
                </div>
              </p>
            </div>
            <div>
              <p>
                <b>Dr. Gamadi Talal</b> <br />
                <div className='text-sm flex flex-col'>
                  <span>Texas Tech University, Texas, USA.</span>
                  <span>Email: talal.gamadi@ttu.edu</span>
                </div>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightSection