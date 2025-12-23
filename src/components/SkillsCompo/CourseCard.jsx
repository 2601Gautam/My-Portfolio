import React from 'react'
import Bar from './Bar.jsx';

const CourseCard = (props) => {
    const CourseDetails = props.skillDetails;
  return (
    <div className="coursework  w-[45%] p-10 rounded-2xl mb-5 bg-gray-100">
          <p className='text-3xl font-semibold py-2 rounded  pl-2' style={{fontFamily: '"Poppins", sans-serif'}}>Coursework</p>
          <div className='flex flex-col justify-around h-[60%] mt-5'>
            {CourseDetails.map((course,index)=>{
                return <Bar key={index} val={course.val} percentage={course.perentage} color={course.color} visible={props.visible} />
            })}
          </div>
        </div>
  )
}

export default CourseCard