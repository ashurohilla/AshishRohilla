import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
     <div className='grid sm:grid-cols-2  grid-cols-1 grid-flow-cols justify-center items-center  px-5 py-5 bg-black rounded-lg'>
      <div className='flex text-white md:text-2xl  xs:text-xl text-lg justify-center mt-3 '>
        <h3 className=''> Developed by Ashish </h3>
      </div>
      <div className='justify-center items-center text-white mt-3  md:text-2xl  xs:text-1xl text-lg'>
        <ul className='flex justify-center'>
            <li className='flex px-2 py-2 '>
            <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className='flex  px-2 py-2  '>
            <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className='flex px-2 py-2 '>
            <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='flex px-2 py-2 '>
            <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer