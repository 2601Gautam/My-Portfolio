import React,{useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { useAppContext } from '../context/Appcontext.jsx';
import ContactElement from './ContactCompo/ContactElement.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
const Contactus = ({Contacts}) => {
   const {setPage} = useAppContext();
    const { ref, inView } = useInView({ threshold:0.5 });
    
    useEffect(() => {
      if (inView) {
        setPage("Contact");
      }
    }, [inView]);
 
  return (
    <ScrollAnimation animateIn="fadeIn">  
    <div className='w-full md:px-20 px-10 h-screen py-20  flex flex-col justify-center gap-20 scroll-mt-20' ref={ref} id='Contact'>
      <h1 className='md:text-5xl text-4xl text-center md:text-start relative md:left-5 font-bold text-gray-900' style={{fontFamily: '"Poppins", sans-serif'}}>Get in <span className='text-yellow-500'>Touch</span></h1>
      <div className=' h-[60%] flex flex-col justify-around px-10 py-4 rounded-lg shadow-lg'>
        {Contacts.map((contact, index) => {
          return <ContactElement key={index} index={index} icon={contact.icon} method={contact.method} link={contact.link}/>;
        })}
      </div>
    </div>
    </ScrollAnimation>
  )
}

export default Contactus