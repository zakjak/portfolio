import React from 'react'

const RightEmployment = () => {
  return (
    <div className='py-4 px-6 shadow-md bg-white rounded-lg'> 
        <h1 className='font-bold text-2xl text-zinc-700'>
          Employment
        </h1>
        <ul className='w-[90%] flex flex-col gap-2 text-gray-600 text-justify text-sm md:text-base'>
            <li>1. <b>Peer Mentor: </b>Texas Tech First Generation Transition and Mentoring Program, 
            Texas, USA – August 2023 – Date.</li>
            <div>
              <h3 className='font-semibold'>Key Responsibilities</h3>
              <li>- Providing peer mentorship to first-generation undergraduate students.</li>
              <li>- Assisting mentees to navigate their Texas Tech University experience.</li>
            </div>
            
            <div>
                <li>
                    <b>Tutor</b>: Rising Sun Academy, Tamale, Ghana – (2016 – 2018).
                </li>
                <div>
                    <h3 className='font-semibold'>Key Responsibilities</h3>
                    <li>- Taught primary school pupils in all subjects mandated by the Ghana Education Service syllables.</li>
                    <li>- Set examination questions and tests, marked tests and examination scripts – filling out weekly, 
                        monthly and end of term reports.</li>
                    <li>- Designed extra curricula activities for pupils.</li>
                </div>
            </div>
          </ul>
      </div>
  )
}

export default RightEmployment