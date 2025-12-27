<<<<<<< HEAD
import React from 'react'
import Bar from './Bar.jsx';


const DatabaseCard = (props) => {
    const DatabaseDetails = props.skillDetails;
  return (
    <div className="database  md:w-[45%] md:p-10 px-5 py-6 rounded-2xl mb-5 bg-gray-100">
        <p className='text-3xl font-semibold py-4 rounded  pl-2' style={{fontFamily: '"Poppins", sans-serif'}}>Databases</p>
          <div className='flex flex-col justify-around h-[60%] mt-5'>
            {DatabaseDetails.map((database,index)=>{
                return <Bar key={index} val={database.val} percentage={database.perentage} color={database.color} visible={props.visible} />
            })}
          </div>
        </div>
  )
}

=======
import React from 'react'
import Bar from './Bar.jsx';


const DatabaseCard = (props) => {
    const DatabaseDetails = props.skillDetails;
  return (
    <div className="database  w-[45%] p-10 rounded-2xl mb-5 bg-gray-100">
        <p className='text-3xl font-semibold py-2 rounded  pl-2' style={{fontFamily: '"Poppins", sans-serif'}}>Databases</p>
          <div className='flex flex-col justify-around h-[60%] mt-5'>
            {DatabaseDetails.map((database,index)=>{
                return <Bar key={index} val={database.val} percentage={database.perentage} color={database.color} visible={props.visible} />
            })}
          </div>
        </div>
  )
}

>>>>>>> daea0a9d8d4f99700df8a6d751b228e6d0b4ceb6
export default DatabaseCard