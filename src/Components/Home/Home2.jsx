import React from 'react'
import { arduino, postman ,github, python, reacticon, django } from '../../assets'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const home2 = () => {
  return (
    <div className='mt-10 md:mt-20 px-8'>
        <div className=' grid grid-rows-2  grid-flow-col gap-4 md:grid-rows-1  justify-center bg-primary'>
             <div className='flex'>
             <div className='flex w-14 h-14 ss:w-24 ss:h-24 mx-3 ss:mx-5 mr-5 animate-bounce'>
                <img  className='' src={github} alt="github" />
                </div>
          <div className='flex w-14 h-14 ss:w-24 ss:h-24 mx-3 ss:mx-5 animate-bounce'>
                <img  className='' src={postman} alt="" />
                </div>

                <div className='flex w-16 h-14 ss:w-28 ss:h-24 mx-3 ss:mx-5 animate-bounce'>
                    
                <img  className='' src={reacticon} alt="" />
            
            </div>
            <div className='flex w-14 h-14 ss:w-24 ss:h-24 mx-3 ss:mx-5 animate-bounce'>
                <img  className='' src={python} alt="" />
                </div>
             </div>
            <div className='flex justify-center'>
                             
              <div className='flex w-14 h-14 ss:w-24 ss:h-24 mx-3 ss:mx-5 animate-bounce'>
                <img  className='' src={arduino} alt="" />
                </div>
                <div className='flex w-14 h-14 ss:w-24 ss:h-24 mx-3 ss:mx-5 animate-bounce'>
                <img  className='' src={django} alt="" />
                </div>
            </div>
        </div>
     <div className='grid grid-cols-1 text-white  mt-14 md:mt-22 '> 
        <h1 className=' text-3xl ss:text-5xl text-center ' > Let me <span className='text-gradient'>introduce</span> Myself </h1>
            <p className="text-base  md:text-2xl mx-5 mt-14">
            <span>💥</span> I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br /> <span className='shadow-inner'>💥</span>I am fluent in classics like
              <i>
                <b className="text-gradient"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
             <span className='shadow-inner'>💥</span> My field of Interest's are building new &nbsp;
              <i>
                <b className="text-gradient">Web Technologies and Hardware Projects</b> and
                also in areas related to{" "}
                <b className="text-gradient">
                  Deep Learning and Machine learning.
                </b>
              </i>
              <br />
              <br />
             <span className='shadow-inner'>💥</span> Whenever possible, I also apply my passion for developing products
              with <b className="text-gradient">Django</b> and
              <i>
                <b className="text-gradient">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-gradient"> React.js </b>
              </i>
            </p>
     </div>
     <div className= ' grid grid-cols-1 grid-flow-cols justify-center items-center  px-5 py-5 text-white '>
      <div className='flex justify-center py-5'>
      <h1 className='md:text-5xl text-3xl'>
        Find Me On
      </h1>
      </div>
     <div className='flex justify-center'>
     <p className='  text-xl md:text-2xl'>
              Feel free to <span className="text-gradient">connect </span>with me
            </p>
     </div>
            <ul className=" flex justify-center px-2  py-2 md:text-6xl text-4xl mt-5 ">
              <li className="mx-3 social-icons px-1 py-1">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="mx-3 social-icons px-1 py-1 ">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="hover"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="mx-3 social-icons  px-1 py-1">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-mx-3"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="mx-3 social-icons  px-1 py-1 ">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-mx-3"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
     </div>
    </div>
  )
}

export default home2