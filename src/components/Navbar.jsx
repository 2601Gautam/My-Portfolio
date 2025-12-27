import React, { useContext, useEffect, useState } from 'react'
import NaavbarLinks from './NavbarCompo/NavbarLinks.jsx';
import { useAppContext } from '../context/Appcontext.jsx';
const Navbar = () => {
  const {screenWidth} = useAppContext();
  
  return (
    <div className='w-full h-18 flex justify-between items-center px-4 md:px-2 lg:px-4 xl:px-8 2xl:px-16 sticky top-0 shadow-fuchsia-50 py-4 z-300000 bg-gray-100 overflow-x-hidden'>
        <div>
            <h1 className='text-2xl md:text-xl font-bold tracking-wider text-yellow-600' style={{ fontFamily: '"Oswald", sans-serif'}}>Gautam</h1>
        </div>
        <div className='flex justify-between lg:gap-10 md:gap-4 '>
          {screenWidth > 768 && <NaavbarLinks/>}  
        </div>
    </div>
  )
}

export default Navbar