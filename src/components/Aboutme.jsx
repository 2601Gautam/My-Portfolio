import React, { useEffect ,useRef} from 'react'
import profile from '../assets/profile.png'
import { useAppContext } from '../context/Appcontext.jsx';
import { useInView } from "react-intersection-observer";
import ImgText from './AboutCompo/ImgText.jsx';
import Qualities from './AboutCompo/Qualities.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
const Aboutme = ({ QualitiesVal }) => {
  const {setPage} = useAppContext();
  const { ref, inView } = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      setPage("about");
    }
  }, [inView]);



  return (
    <ScrollAnimation animateIn="fadeIn">
    <div className='w-full md:px-20 px-6 flex md:h-screen flex-col gap-10 pt-20 scroll-mt-20 mb-20 md:mb-5' id='about' ref={ref}>
      <div className='w-full'>
        <h1 className='text-5xl md:text-start relative md:left-5  font-bold  text-center' style={{fontFamily: '"Poppins", sans-serif'}}>About Me</h1>
      </div>
    <div className='flex md:flex-row md:justify-between md:items-center relative mt-10 flex-col w-full '>
      <ImgText profile={profile}/>

      <div className= 'md:w-1/2 flex flex-col gap-2 w-full' >
        {QualitiesVal.map((val,index) => {
          return <Qualities title={val.title} key={index} des={val.Des} />
        })}
      </div>
    </div>
    </div>
    </ScrollAnimation>
  )
}

export default Aboutme