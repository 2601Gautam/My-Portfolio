<<<<<<< HEAD
import React from 'react'
import { GraduationCap,Goal ,Heart} from 'lucide-react'

const Qualities = (props) => {
  return (
    <div>
        <div className='flex gap-4 items-center my-4'>
          <p className='bg-orange-300 w-min px-2 py-2 rounded'><GraduationCap /></p>
          <h2 className='md:text-lg font-semibold text-base' style={{fontFamily: '"Poppins", sans-serif'}}>{props.title}</h2>
        </div>
          <p style={{fontFamily: 'Arial, sans-serif'}} className='text-gray-600 md:text-base text-sm pl-2'>{props.des}</p>
      </div>
  )
}

=======
import React from 'react'
import { GraduationCap,Goal ,Heart} from 'lucide-react'

const Qualities = (props) => {
  return (
    <div>
        <div className='flex gap-4 items-center my-4'>
          <p className='bg-orange-300 w-min px-2 py-2 rounded'><GraduationCap /></p>
          <h2 className='text-lg font-semibold' style={{fontFamily: '"Poppins", sans-serif'}}>{props.title}</h2>
        </div>
          <p style={{fontFamily: 'Arial, sans-serif'}} className='text-gray-600'>{props.des}</p>
      </div>
  )
}

>>>>>>> daea0a9d8d4f99700df8a6d751b228e6d0b4ceb6
export default Qualities