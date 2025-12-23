import React from 'react'
import Bar from './Bar.jsx';
const LangCard = (props) => {
  const LanguageDetails = props.skillDetails;
  return (
    <div className="lang w-[45%] p-10 rounded-2xl mb-5 bg-gray-100" >
        <p className='text-3xl font-semibold py-2 pl-2 ' style={{fontFamily: '"Poppins", sans-serif'}}>Language</p>
          <div className='flex flex-col justify-around h-[60%] mt-5'>
            {LanguageDetails.map((language,index)=>{
                return <Bar key={index} val={language.val} percentage={language.perentage} color={language.color} visible={props.visible} />
            })}
          </div>
    </div>
  )
}

export default LangCard