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
    <div className='flex items-center h-screen' id='home' ref={ref}>
      <div className='w-1/2 flex flex-col justify-center items-start h-full pl-20 gap-8'>
      <ProfileText />
      </div>
      <div className='w-1/2 flex h-full justify-center items-center'>
        <img src={profile} className="h-120 rounded-4xl" alt="Profile img" />
      </div>
    </div>
    </ScrollAnimation>
  )
}
export default Profile