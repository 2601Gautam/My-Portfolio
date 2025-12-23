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
    <div className='w-full px-20 h-screen flex flex-col gap-10 pt-20 scroll-mt-20' id='about' ref={ref}>
        <h1 className='text-5xl text-start relative left-5 w-1/2 font-bold' style={{fontFamily: '"Poppins", sans-serif'}}>About Me</h1>
    <div className='flex justify-between items-center relative mt-10'>
      <ImgText profile={profile}/>

      <div className= 'w-1/2 flex flex-col gap-2' >
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