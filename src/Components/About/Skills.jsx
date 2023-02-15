import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPostgresql,
  DiDjango,
  DiPython,
  DiGit,
  DiRasberryPi,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function Skills() {
  return (
    <div className="mt-20 mx-5 justify-center">
      <div>
        <h1 className="text-xl ss:text-4xl justify-center text-center text-white">
          <span className="text-gradient">Professional</span> Skills
        </h1>
      </div>
      <div className="text-white  grid md:grid-rows-1  ss:grid-rows-2 grid-rows-4 grid-flow-col justify-center md:gap-14 gap-8  mt-8 ss:mt-20 sm:mt-22 sm:animate-bounce">
        
        
        <div className="flex justify-center md:gap-14 gap-8">
        <div className="flex text-gradient tech-icons  px-5 py-5">
            <CgCPlusPlus />
          </div>
          <div className="flex text-gradient tech-icons  px-5 py-5">
            <DiJavascript1 />
          </div>
        </div>


        <div className="flex justify-center md:gap-14 gap-8 ">  
          <div className="flex text-gradient tech-icons px-5 py-5">
            <DiReact />
          </div>
          <div className="flex text-gradient tech-icons px-5 py-5">
            <DiGit />
          </div>
        </div>


        <div className="flex justify-center  md:gap-14 gap-8">
          <div className="flex text-gradient tech-icons px-5 py-5">
            <DiPython />
          </div>
          <div className="flex text-gradient tech-icons  px-5 py-5">
            <DiDjango />
          </div>
          </div>


          <div className=" flex justify-center  md:gap-14 gap-8">
          <div className="flex text-gradient tech-icons px-5 py-5">
            <DiPostgresql />
          </div>
          <div className="flex text-gradient tech-icons px-5 py-5">
            <DiRasberryPi />
          </div>
          </div>


        
      </div>
    </div>
  );
}

export default Skills;
