import React from 'react'
import { homemain } from '../../assets'

function Aboutcard() {
  return (
    <div  className='grid  grid-col-1  md:grid-cols-2 sm:grid-cols-2  px-10'>
       <div className=' text-xl sm:ml-16  ml-8   text-white sm:py-20'>
          <h1 className='md:text-2xl xs:text-lg text-sm'>
              Hi There , i am <span className='text-gradient '>Ashish</span>{"  "}from  Haryana , India
            </h1>
            <h1 className='py-5 md:text-2xl text-sm'> I am Pursing Btech specialisation in <span className='text-gradient'>Artificial intelligence and Machine Learning</span></h1>
            <p className='md:text-2xl text-sm xs:text-lg'>
            Apart from coding, some other activities that I love to do!

            Playing Games
              Writting Tech 
              Blogs
                 
            </p>
            </div>
         
          <div className='flex mt-10 py-10 sm:mt-0 sm:py-0 sm:w-90 sm:h-90  md:w-160 h-100 w-100'>
        <img className=' '
            src={homemain}
            alt="home pic"/>
        </div>
        
        
    </div>
  )
}

export default Aboutcard