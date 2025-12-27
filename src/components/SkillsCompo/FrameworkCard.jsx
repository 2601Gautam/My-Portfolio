import React from 'react'
import Bar from './Bar.jsx';


const FrameworkCard = (props) => {
    const FrameworkDetails = props.skillDetails;
  return (
    <div className="frameworks  md:w-[45%] md:p-10 px-5 py-6 rounded-2xl mb-5 bg-gray-100">
          <p className='text-3xl font-semibold py-4 rounded pl-2' style={{fontFamily: '"Poppins", sans-serif'}}>Frameworks</p>
          <div className='flex flex-col justify-around h-[60%] mt-5'>
            {FrameworkDetails.map((framework,index)=>{
                return <Bar key={index} val={framework.val} percentage={framework.perentage} color={framework.color} visible={props.visible} />
            })}
          </div>
    </div>
  )
}

export default FrameworkCard