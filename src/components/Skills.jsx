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
  const { ref, inView } = useInView({ threshold: 0 });
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
    <div className='w-full md:px-20 px-10 scroll-mt-20 ' id='skills' ref={ref} >
      <h1 className='text-5xl md:text-start relative md:left-5 md:w-1/2 font-bold w-full text-center' style={{fontFamily: '"Poppins", sans-serif'}}>My Skills</h1>
      <div className='flex md:flex-row flex-col md:justify-evenly top-10 relative pt-10 md:flex-wrap h-full justify-center gap-10' > 
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