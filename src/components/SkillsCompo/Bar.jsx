<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";

const Bar = (props) => {
  console.log(props.percentage);
  const [percentage, setPercentage] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.6 });
  //i want smooth transition of bar from 0 to props.percentage
  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < props.percentage && props.visible) {
        currentPercentage++;
        setPercentage(currentPercentage);
      } else {
        clearInterval(interval);
      }
    }, 10);
    if(!props.visible)
    {
      setPercentage(0);
    }
    return () => 
      {
        clearInterval(interval);
      }
  }, [props.visible]);
  return (
    <div className="flex justify-between items-center  w-full">
        <p className='w-25 font-medium text-sm md:text-base mr-5' style={{fontFamily: 'Arial, sans-serif'}}>{props.val}</p>
        <div className="w-[80%] bg-gray-200 h-4 rounded-full ">
            <div className={"bg-yellow-600 h-4 rounded-full"} style={{width:`${percentage}%`, backgroundColor: props.color}} ></div>
        </div>
          <p className='ml-2 text-sm text-gray-500' style={{fontFamily: 'Arial, sans-serif'}}>{props.percentage}%</p>
    </div>
  )
}

=======
import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";

const Bar = (props) => {
  console.log(props.percentage);
  const [percentage, setPercentage] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.6 });
  //i want smooth transition of bar from 0 to props.percentage
  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < props.percentage && props.visible) {
        currentPercentage++;
        setPercentage(currentPercentage);
      } else {
        clearInterval(interval);
      }
    }, 10);
    if(!props.visible)
    {
      setPercentage(0);
    }
    return () => 
      {
        clearInterval(interval);
      }
  }, [props.visible]);
  return (
    <div className="flex justify-between items-center">
        <p className='w-25 font-medium' style={{fontFamily: 'Arial, sans-serif'}}>{props.val}</p>
        <div className="w-[80%] bg-gray-200 h-4 rounded-full ">
            <div className={"bg-yellow-600 h-4 rounded-full"} style={{width:`${percentage}%`, backgroundColor: props.color}} ></div>
        </div>
          <p className='ml-2 text-sm text-gray-500' style={{fontFamily: 'Arial, sans-serif'}}>{props.percentage}%</p>
    </div>
  )
}

>>>>>>> daea0a9d8d4f99700df8a6d751b228e6d0b4ceb6
export default Bar