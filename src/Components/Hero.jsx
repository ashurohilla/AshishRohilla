import React from 'react'
import Type from './Home/type'
import { developer1} from '../assets'


const Hero = () => {
  return (
    <div className='grid  grid-col-1  md:grid-cols-2 sm:grid-cols-2  mx-10 mt-24 sm:mt-40 px-10m ' >
        <div className=' text-xl md:text-5xl lg:text-5xl xs:text-3xl sx:4xl text-white sm:py-20'>
          <div >
          <h1 className='flex'>
              Hi There {" "}
                <span className=" block animate-wave  wave"  > 👋🏻</span>
            </h1>
            <h1 className='py-5'> I'M <span className='text-gradient'>Ashish</span> <br className='sm:block hidden' /> {" "}</h1>
            <span className=''> <Type/> </span>
          </div> 
        </div>
        <div className='flex mt-10 py-10 sm:mt-0 sm:py-0'>
        <img className=' sm:w-90 sm:h-90  md:w-160 h-100 w-100'
            src={developer1}
            alt="home pic"/>
        </div>
    </div>
  )
}

export default Hero