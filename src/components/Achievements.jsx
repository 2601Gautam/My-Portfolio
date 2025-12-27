import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import { useAppContext } from '../context/Appcontext.jsx';
import AchievementCard from './AchievementCompo/AchievementCard.jsx';
import ScrollAnimation from 'react-animate-on-scroll';

const Achievements = (props) => {
  const {setPage} = useAppContext();
  const { ref, inView } = useInView({ threshold:0.5 });
  console.log(props.achievements);
  useEffect(() => {
    if (inView) {
      setPage("Achievements");
    }
  }, [inView]);

  

  return (
     <ScrollAnimation animateIn="fadeIn">
    <div ref={ref} className='w-full md:px-20  px-10 min-h-screen py-20 flex flex-col gap-10 bg-gray-50' id='Achievements'>
      <div className='flex flex-col gap-3'>
        <h1 className='md:text-5xl text-4xl text-center md:text-start relative md:left-5 font-bold text-gray-900' style={{fontFamily: '"Poppins", sans-serif'}}>Achievements</h1>
        <p className='text-lg md:text-start relative md:left-5 text-center text-gray-700 max-w-2xl' style={{fontFamily: 'Arial, sans-serif'}}>
          Recognitions and milestones from my coding journey and professional development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-0 mt-5">
          {props.achievements.map((ach, index) => (
            <AchievementCard 
              key={index}
              title={ach.title}
              subTitle={ach.subTitle}
              rating={ach.rating}
              img={ach.img}
              link={ach.link}
            />
          ))}
      </div> 
    </div>
    </ScrollAnimation>
  )
}

export default Achievements