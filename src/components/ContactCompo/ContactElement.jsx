import React from 'react'


const ContactElement = (props) => {
  const leftPosition = props.index * 60;
  return (
    <div className="email flex justify-around items-center gap-3 w-[35%] px-6 py-3 rounded-xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-99 border border-gray-600/50 hover:border-blue-500/60 group overflow-hidden hover:translate-x-1" style={{position: 'relative', left: `${leftPosition}px`}}>
          {/* Gradient overlay */}
          
          <a href={props.link} className="relative z-10 flex items-center justify-around  w-full" target="_blank" rel="noopener noreferrer">
            <div className="relative z-10 p-2 bg-gray-700/50 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
              <props.icon size={24} className="text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"/>
            </div>
            <h2 className='text-base font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300' style={{fontFamily: '"Poppins", sans-serif'}}>{props.method}</h2>
          </a>
    </div>
  )
}

export default ContactElement