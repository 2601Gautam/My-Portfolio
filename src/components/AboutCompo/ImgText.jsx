<<<<<<< HEAD
import React from 'react'

const ImgText = ({profile}) => {
  return (
    <div className='md:w-1/2 w-full h-min py-10 flex justify-between flex-col items-center gap-4 '>
        <img src={profile} className="h-50 rounded-4xl border-2 border-yellow-600 object-cover mb-5" alt="Profile" />
        <div className='items-center h-1/2 relative w-full flex flex-col gap-2 text-md text-gray-800 ' style={{fontFamily: 'Arial, sans-serif'}}>
          <p>Name : Gautam Modi</p>
          <p>Age : 20</p>
          <p>Location : Unava, Gujarat</p>
          <p className='text-center px-5' >I am an ICT student passionate about coding, problem solving, and web development. I enjoy building projects that help me learn and improve as a developer.</p>
        </div>
      </div>
  )
}

=======
import React from 'react'

const ImgText = ({profile}) => {
  return (
    <div className='w-1/2 h-min py-10 flex justify-between flex-col items-center gap-4'>
        <img src={profile} className="h-50 rounded-4xl border-2 border-yellow-600 object-cover" alt="Profile" />
        <div className='items-center h-1/2 relative w-full flex flex-col gap-2 text-md text-gray-800' style={{fontFamily: 'Arial, sans-serif'}}>
          <p>Name : Gautam Modi</p>
          <p>Age : 20</p>
          <p>Location : Unava, Gujarat</p>
          <p className='text-center px-5' >I am an ICT student passionate about coding, problem solving, and web development. I enjoy building projects that help me learn and improve as a developer.</p>
        </div>
      </div>
  )
}

>>>>>>> daea0a9d8d4f99700df8a6d751b228e6d0b4ceb6
export default ImgText