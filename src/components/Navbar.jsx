import React from 'react'
import NaavbarLinks from './NavbarCompo/NavbarLinks.jsx';
const Navbar = () => {
  return (
    <div className='w-full h-18 flex justify-between items-center px-15 sticky top-0 shadow-fuchsia-50 py-4 z-300000 bg-gray-100'>
        <div>
            <h1 className='text-2xl font-bold tracking-wider text-yellow-600' style={{ fontFamily: '"Oswald", sans-serif'}}>Gautam</h1>
        </div>
        <div className='flex justify-between gap-10'>
            <NaavbarLinks/>
        </div>
    </div>
  )
}

export default Navbar