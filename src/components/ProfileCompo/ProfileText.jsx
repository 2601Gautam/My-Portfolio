import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Download ,Github} from 'lucide-react';

const ProfileText = () => {
  return (
    <>
    <h1 style={{fontFamily: '"Poppins", sans-serif'}} className='text-6xl'>Hi, I'm <span className='font-semibold text-yellow-600'>Gautam</span></h1>
        <p style={{fontFamily: '"Poppins", sans-serif'}} className='text-2xl'>An ICT student at <span>Daiict</span> and <span className='text-yellow-600'><Typewriter
          words={['Engineer','Developer', 'Problem Solver']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
         
        /></span></p>
        <div className='mt-4 flex gap-4'>
          <a href="https://github.com/2601Gautam" target='_blank'><button style={{fontFamily: '"Poppins", sans-serif'}} className='bg-yellow-500 hover:bg-black hover:text-white text-black px-5 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-default shadow-sm hover:shadow-md cursor-pointer'><span className='flex gap-2 items-center'><Github size={20} />My Works</span> </button></a>
          <a href="https://drive.google.com/file/d/1e7t2Sbx4N6rQyCo90-hMgWiJzpbQFEJb/view?usp=drive_link" target='_blank'><button style={{fontFamily: '"Poppins", sans-serif'}} className='bg-yellow-500 hover:bg-black hover:text-white text-black px-5 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-default shadow-sm hover:shadow-md cursor-pointer'><span className='flex gap-2 items-center'><Download size={20} />My Resume</span> </button></a>
        </div>
    </>
  )
}

export default ProfileText