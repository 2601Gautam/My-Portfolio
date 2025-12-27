import React, { use, useEffect,useRef } from 'react'
import profile from '../assets/profile.png'

import { useAppContext } from '../context/Appcontext.jsx';
import { useInView } from "react-intersection-observer";
import ProfileText from './ProfileCompo/ProfileText.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
const Profile = () => {
  const {setPage} = useAppContext();
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  return (
     <ScrollAnimation animateIn="fadeIn">
    <div className='flex md:flex-row h-screen flex-col-reverse justify-center items-center py-10 ' id='home' ref={ref}>
      <div className='md:w-1/2 flex flex-col justify-center items-center md:item-start h-full md:pl-20 gap-8 w-full'>
      <ProfileText />
      </div>
      <div className='md:w-1/2 flex h-full justify-center items-center w-full'>
        <img src={profile} className="lg:h-110 md:h-80 h-70 rounded-4xl" alt="Profile img" />
      </div>
    </div>
    </ScrollAnimation>
  )
}
export default Profile