import React from "react";
import { project } from "../../constant";
import { developer1 } from "../../assets";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <div className="mt-28  mx-5">
      <div className="justify-center flex">
        <h1 className="text-2xl sm:text-4xl text-white ">
          My Recent <span className="text-gradient">Work</span>
        </h1>
      </div>
      <p className=" mt-5 text-xl sm:2xl text-white flex justify-center">
        Here are a few projects i've worked on recently
      </p>
      <div className=" my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row  gap-8 justify-center items-center">
        {project.map((item, index) => (
          <div
            key={item.id}
            className="text-white md:w-96 w-5/12 justify-center item-center project-card-view mx-auto "
          >
              <img className="flex pt-5 px-10" src={developer1} alt="" />
               
            <h1 className="justify-center item-center flex text-gradient text-3xl"> {item.title}</h1>
            <p className="text-center text-sma justify-center px-3 mt-3">
              {item.description}
            </p>
            <div className="item-center flex justify-center px-5 py-10">
            <button target="_blank" className=" px-1 py-2 mx-2 item-center flex justify-center project-button">
            <BsGithub className="animate-bounce"/> &nbsp;
            {"Github"}
            </button>
            <button  target="_blank" className=" px-1 py-2 mx-2 flex justify-center items-center project-button">
            <CgWebsite className="animate-bounce"/> &nbsp;
            {"Demo"}
            </button>
            </div>
          </div>
        ))}  
      </div>
    </div>
  );
};

export default Project;
