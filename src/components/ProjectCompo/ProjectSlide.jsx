import React from 'react'
import ProjectSlideDemo from './ProjectSlideDemo';

const ProjectSlide = (props) => {
    const techStack = props.techStack || [];
    // console.log(props);
  return (
            <div className="projectDet min-w-[85%] flex justify-between snap-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <ProjectSlideDemo img={props.img} title={props.title} desc={props.desc} github={props.github} demo={props.demo} />
            <div className="details w-3/5 p-10 flex flex-col justify-center gap-8 bg-white">
              <h2 className='text-3xl font-bold text-gray-900' style={{fontFamily: '"Poppins", sans-serif'}}>Project Details</h2>
              <p className='text-base text-gray-700 leading-relaxed' style={{fontFamily: 'Arial, sans-serif'}}>{props.details}</p>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4' style={{fontFamily: '"Poppins", sans-serif'}}>Technologies Used</h3>
                <ul className='flex flex-wrap gap-3'>
                  {techStack.map((tech, index) => (
                    <li key={index} className='bg-yellow-500 hover:bg-black hover:text-white text-black px-5 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-default shadow-sm hover:shadow-md' style={{fontFamily: 'Arial, sans-serif'}}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
  )
}

export default ProjectSlide