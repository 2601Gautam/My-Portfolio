import React from 'react'
import {Github,ExternalLink} from 'lucide-react'

const ProjectSlideDemo = (props) => {
    console.log(props);
  return (
    <div className="content w-2/5 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center" > 
              <div className='flex flex-col items-center justify-center h-full gap-5 w-full'>
                <a href={props.demo} target='_blank' rel="noopener noreferrer" className='transform hover:scale-105 transition-transform duration-300'>
                  <img src={props.img} alt="project 1" className='h-48 w-80 object-fill rounded-xl shadow-md'/>
                </a>
                
                <h3 className='text-2xl font-bold text-gray-900 mt-2' style={{fontFamily: '"Poppins", sans-serif'}}>{props.title}</h3>
                <p className='text-sm text-gray-600 text-center px-4 leading-relaxed' style={{fontFamily: 'Arial, sans-serif'}}>{props.desc}</p>
                <div className='flex gap-4 mt-4 w-full px-4'>
                  <a href={props.github} target='_blank' rel="noopener noreferrer" className='flex-1' style={{fontFamily: '"Poppins", sans-serif'}}>
                    <button className='w-full flex gap-2 justify-center items-center bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer'>
                      <Github size={18} />
                      <span>GitHub</span>
                    </button>
                  </a>
                  <a style={{display: props.demo==="null" ? 'none' : 'block'}} href={props.demo} target='_blank' rel="noopener noreferrer" className='flex-1'>
                    <button className='w-full flex gap-2 justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer'>
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </button>
                  </a>
                </div>
              </div>
        </div>
  )
}

export default ProjectSlideDemo