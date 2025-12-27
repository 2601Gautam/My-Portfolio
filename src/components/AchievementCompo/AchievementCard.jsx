import React from 'react'
import { Trophy ,Share} from 'lucide-react';

const AchievementCard = (props) => {
  return (
    <div className="card flex flex-col justify-between gap-3 bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer md:w-1/3 hover:scale-99 ease w-full">
        <div className='flex items-center justify-between'>
            <img src={props.img} alt={props.title} className='h-10 w-10 object-contain'/>
            <Trophy color="#f0d10a" size={30} />
        </div>
        <p className='text-2xl font-semibold text-white' style={{fontFamily: '"Poppins", sans-serif'}}>{props.title}</p>
        <p className='text-base text-yellow-500' style={{fontFamily: 'Arial, sans-serif'}}>{props.subTitle}</p>
        <p className='text-base text-yellow-500' style={{fontFamily: 'Arial, sans-serif'}}>{props.rating}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{fontFamily: '"Poppins", sans-serif'}}><button className='text-black px-4 py-2 hover:translate-y-0.5 bg-yellow-500 rounded-lg active:scale-95 transition-all duration-300 ease-in-out cursor-pointer w-full'><span className='flex items-center justify-center gap-2'><Share color="black" size={20} />View Profile</span></button></a>
    </div>
  )
}

export default AchievementCard