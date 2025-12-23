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

export default NavbarLinks