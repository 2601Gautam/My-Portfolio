import React from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import CircleDesign from './CircleDesign.jsx'
const Experiencecard = (props) => {
  return (
    <div className="exp-details flex gap-6 items-start w-full max-w-4xl mx-auto group">
      
      <CircleDesign />
      
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group-hover:border-blue-200">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className='text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors' style={{fontFamily: '"Poppins", sans-serif'}}>
                {props.title}
            </h3>
            <div className='flex items-center gap-2 text-blue-600 font-medium mb-3' style={{fontFamily: 'Arial, sans-serif'}}>
              <Briefcase size={18} />
              <span>{props.Subtitle}</span>
            </div>
          </div>
        </div>
        
        <div className='flex flex-wrap gap-4 mb-4 text-sm text-gray-600' style={{fontFamily: 'Arial, sans-serif'}}>
          <div className='flex items-center gap-1.5'>
            <Calendar size={16} className='text-blue-600' />
            <span>{props.date}</span>
          </div>
          <div className='flex items-center gap-1.5' style={{fontFamily: 'Arial, sans-serif'}}>
            <MapPin size={16} className='text-blue-600' />
            <span>{props.location}</span>
          </div>
        </div>
        
        <p className='text-gray-700 leading-relaxed' style={{fontFamily: 'Arial, sans-serif'}}>
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default Experiencecard