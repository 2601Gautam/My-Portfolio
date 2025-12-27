<<<<<<< HEAD
import React from 'react'
import { useAppContext } from '../../context/Appcontext.jsx';
const NavbarLinks = () => {
    const { page, setPage } = useAppContext();
  return (
    <>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "home" ? "text-yellow-600" : ""}`} href='#home'>Home</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "about" ? "text-yellow-600" : ""}`} href='#about'>About</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "skills" ? "text-yellow-600" : ""}`} href="#skills">Skills</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Projects" ? "text-yellow-600" : ""}`} href="#Projects">Projects</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Experience" ? "text-yellow-600" : ""}`} href="#Experience">Experience</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0.after:-bottom-2.after:h-[2px].after:w-o.after:bg-black.after:transition-all.after.duration=3o.hovet.after.w-full.px=2.hover.text-gray=7o.${page === "Education" ? "text-yellow=6o" : ""}`} href="#Education">Education</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer md:text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Contact" ? "text-yellow-600" : ""}`} href="#Contact">Contact Us</a>
    </>
  )
}

=======
import React from 'react'
import { useAppContext } from '../../context/Appcontext.jsx';
const NavbarLinks = () => {
    const { page, setPage } = useAppContext();
  return (
    <>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "home" ? "text-yellow-600" : ""}`} href='#home'>Home</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "about" ? "text-yellow-600" : ""}`} href='#about'>About</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "skills" ? "text-yellow-600" : ""}`} href="#skills">Skills</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Projects" ? "text-yellow-600" : ""}`} href="#Projects">Projects</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Experience" ? "text-yellow-600" : ""}`} href="#Experience">Experience</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Achievements" ? "text-yellow-600" : ""}`} href="#Achievements">Achievements</a>
        <a style={{fontFamily: '"Poppins", sans-serif'}} className={`cursor-pointer text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-gray-700 ${page === "Contact" ? "text-yellow-600" : ""}`} href="#Contact">Contact Us</a>
    </>
  )
}

>>>>>>> daea0a9d8d4f99700df8a6d751b228e6d0b4ceb6
export default NavbarLinks