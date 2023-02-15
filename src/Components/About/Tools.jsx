import React from 'react'
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
  } from "react-icons/si";

function Tools() {
  return (
    <div className='mt-12 mx-5 justify-center'> 
         <div>
         <h1 className='text-xl ss:text-4xl justify-center text-center text-white'>
             <span className='text-gradient'>Tools</span> i use 
         </h1>
         </div>
          <div className='text-white  grid  md:grid-rows-1 grid-rows-2 grid-flow-col justify-center gap-14 mt-20'>
            <div className='flex justify-center sm:gap-14  gap-3'>
            <div className='flex text-gradient tech-icons  px-5 py-5  animate-bounce'>
            <SiLinux />
            </div> 
            <div className ='flex text-gradient tech-icons px-5 py-5   animate-bounce '>
            <SiVisualstudiocode /> 
            </div> 
            <div className ='flex text-gradient tech-icons  px-5 py-5  animate-bounce'>
            <SiPostman /> 
            </div>
            </div>
            <div className='flex justify-center  sm:gap-14 gap-3'>
            <div className ='flex text-gradient tech-icons px-5 py-5  animate-bounce'>
            <SiVercel />   
            </div>
            <div className ='flex text-gradient tech-icons px-5 py-5  animate-bounce'>
            <SiHeroku />
            </div>
            </div>
          </div>
    </div>
  )
}

export default Tools