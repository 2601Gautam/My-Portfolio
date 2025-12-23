import React, { use, useEffect ,useRef,useState} from 'react'

import { useAppContext } from '../context/Appcontext.jsx';
import { useInView } from "react-intersection-observer";
import LangCard from './SkillsCompo/LangCard.jsx';
import Bar from './SkillsCompo/Bar.jsx';
import FrameworkCard from './SkillsCompo/FrameworkCard.jsx';
import DatabaseCard from './SkillsCompo/DatabaseCard.jsx';
import CourseCard from './SkillsCompo/CourseCard.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
const Skills = ({ skillDetails }) => {
  const {setPage} = useAppContext();
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setPage("skills");
      setVisible(true);
    }
    else
    {
      setVisible(false);
    }
  }, [inView]);

  return (
    <ScrollAnimation animateIn="fadeIn" >
    <div className='w-full px-20 h-auto scroll-mt-20' id='skills' ref={ref} >
      <h1 className='text-5xl text-start relative left-5 w-1/2 font-bold' style={{fontFamily: '"Poppins", sans-serif'}}>My Skills</h1>
      <div className='flex justify-evenly top-10 relative pt-10 flex-wrap h-full' > 
        <LangCard visible={visible} skillDetails={skillDetails[0]} />
        <FrameworkCard visible={visible} skillDetails={skillDetails[1]} />
        <DatabaseCard visible={visible} skillDetails={skillDetails[2]} />
        <CourseCard visible={visible} skillDetails={skillDetails[3]} />
      </div>

    </div>
    </ScrollAnimation>
  )
}

export default Skills