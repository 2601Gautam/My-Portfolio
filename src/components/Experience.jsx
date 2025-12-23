import React, { use, useEffect ,useRef,useState} from 'react'
import { useAppContext } from '../context/Appcontext.jsx';
import { useInView } from "react-intersection-observer";
import Experiencecard from './ExperienceCompo/Experiencecard.jsx';
import ScrollAnimation from 'react-animate-on-scroll';

const Experience = ({ experienceDet }) => {
  const {setPage} = useAppContext();
  const { ref, inView } = useInView({ threshold: 0.6 });
  
   useEffect(() => {
        if (inView) {
          setPage("Experience");
        }
      }, [inView]);
  return (
    <ScrollAnimation animateIn="fadeIn" >
    <div className='w-full px-20 h-screen relative top-30 flex flex-col gap-5 scroll-mt-20' id='Experience' ref={ref}>
        <h1 className='text-5xl text-start relative left-5 w-1/2 font-bold' style={{fontFamily: '"Poppins", sans-serif'}}>My Experience</h1>

    <div className="flex flex-col gap-10 mt-20 items-center justify-start max-h-[60%] overflow-y-auto z-100">
      {experienceDet.map((exp, index) => (
        <Experiencecard key={index} title={exp.title} location={exp.location} date={exp.date} desc={exp.desc} Subtitle={exp.Subtitle} />
      ))}
      </div>
    </div>
    </ScrollAnimation>
  )
}

export default Experience