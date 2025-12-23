import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Experience from '../components/Experience'
import Achievements from '../components/Achievements'
import Contactus from '../components/Contactus'
import ScrollAnimation from 'react-animate-on-scroll';

const home = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div>
        <Navbar />
        <Profile />
        <Aboutme QualitiesVal={props.QualitiesVal} />
        <Skills skillDetails={props.skillDetails} />
        <Project projectDetails={props.projectDetails} />
        <Experience experienceDet={props.experienceDet} />
        <Achievements achievements={props.achievements} />
        <Contactus Contacts={props.Contacts}/>
    </div>
  )
}

export default home