import React, { useEffect } from 'react'

import ProjectSlide from './ProjectCompo/ProjectSlide.jsx'
import { useInView } from "react-intersection-observer";
import { useAppContext } from '../context/Appcontext.jsx';
import ScrollAnimation from 'react-animate-on-scroll';


const Project = ({ projectDetails }) => {
   const {setPage} = useAppContext();
    const { ref, inView } = useInView({ threshold: 0.6 });
  
   useEffect(() => {
      if (inView) {
        setPage("Projects");
      }
    }, [inView]);
  
  return (
    <ScrollAnimation animateIn="fadeIn">
    <div ref={ref} className='w-full px-20 h-screen relative my-20 py-10 flex flex-col gap-5 scroll-mt-20' id='Projects' >
      <h1 className='text-5xl text-start relative left-5 w-1/2 font-bold' style={{fontFamily: '"Poppins", sans-serif'}}>My Projects</h1>  
      <p className='text-lg text-start relative left-5 w-1/2 text-gray-700' style={{fontFamily: 'Arial, sans-serif'}}>A collection of projects showcasing my technical skills and problem-solving abilities</p>

      <div className="w-full mt-6 overflow-x-auto flex snap-x snap-mandatory scroll-smooth gap-8 pb-6">
        {projectDetails.map((project, index) => {
          // console.log(project);
          return <ProjectSlide key={index} title={project.title} desc={project.description} github={project.githubLink} demo={project.liveDemoLink} details={project.details} img={project.img} techStack={project.techStack} />
        })}
        
      </div>
    </div>
    </ScrollAnimation>
  )
}

export default Project