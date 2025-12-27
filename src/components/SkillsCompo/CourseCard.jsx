import React from 'react'
import Bar from './Bar.jsx';

const CourseCard = (props) => {
    const CourseDetails = props.skillDetails;
  return (
    <div className="coursework  md:w-[45%] md:p-10 px-5 py-6  rounded-2xl mb-5 bg-gray-100">
          <p className='md:text-3xl text-2xl font-semibold py-4 rounded pl-2' style={{fontFamily: '"Poppins", sans-serif'}}>Coursework</p>
          <div className='flex flex-col justify-around h-[60%]'>
            {CourseDetails.map((course,index)=>{
                return <Bar key={index} val={course.val} percentage={course.perentage} color={course.color} visible={props.visible} />
            })}
          </div>
        </div>
  )
}

export default CourseCard