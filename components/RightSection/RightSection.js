import Link from 'next/link'
import React from 'react'

const RightSection = () => {
  return (
    <div className='pt-4 px-6 w-full lg:col-span-2 col-span-6 shadow-md rounded-lg bg-white'>
      <div>
        <h1 className='font-bold text-2xl text-zinc-700'>Education</h1>
        <p><b>Texas Tech University</b> <br />
        <span className='text-sm'>MSc Petroleum Engineering, USA (2022 – 2024).</span></p>        
        <p><b>Tyumen Industrial University</b> <br />
        <span className='text-sm'>Bachelor of Science in Petroleum Engineering (Exploitation), 
        Russia (2018 – 2022).</span></p>
        <p><b>Accra Academy</b> <br />
        <span className='text-sm'>(WASSCE, General Science), Ghana (2013 – 2016)</span></p>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-zinc-700'>Languages</h1>
        <div className='lg:flex lg:flex-col gap-1'>
          <span>- English (Fluent)</span>
          <span>- Fluent in Russian</span>
          <span>- Dagbani</span>
          <span>- Twi.</span>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-zinc-700'>Courses</h1>
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
                <span>Tyumen Industrial University</span>
                <span>Tyumen – Russia.</span>
                <span>Email: muljavinsf@tyuiu.ru</span>
              </div>
            </p>
          </div>
          <div>
            <p>
              <b>Dr. Gamadi Talal</b> <br />
              <div className='text-sm flex flex-col'>
                <span>Texas Tech University</span>
                <span>Email: talal.gamadi@ttu.edu</span>
                <span>(Supervisor)</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection