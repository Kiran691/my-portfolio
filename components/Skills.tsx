

import Image from "next/image";
import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";

export const Skills = () => {
  return (
    <div
      className=" flex items-center max-w-7xl   mx-auto leading-8 mb-10"
      id="Skills"
    >
      <div className=" px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Skills</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20">
          {/* skill 1 */}
          <div className=" p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
            />
            <p className="text-white text-center mt-4">Html</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              className="w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-110 duration-700"
            />
            <p className="text-white text-center mt-4">CSS</p>
          </div>
          {/* 2 ends  */}

          <div className=" p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              className="w-20 h-20  object-contain  hover:-translate-x-2 duration-700"
            />
            <p className="text-white text-center mt-4">Javascript</p>
          </div>
          {/* 1 ends  */}
          <div className=" p-5 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
              className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
            />
            <p className="text-white text-center mt-4">React</p>
          </div>
          {/* 1 ends  */}
          <div className=" p-5 ">
            <img
              src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
            />
            <p className="text-white text-center mt-4">NextJS 13</p>
          </div>
          {/* 1 ends  */}
          <div className=" p-5 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
            />
            <p className="text-white text-center mt-4">Tailwind</p>
          </div>
          {/* 1 ends  */}
          <div className=" p-5 ">
            <img
              src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
              className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
            />
            <p className="text-white text-center mt-4">Chakra</p>
          </div>
          {/* 1 ends  */}
          <div className=" p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
            />
            <p className="text-white text-center mt-4">NodeJS</p>
          </div>
          {/* 1 ends  */}
          
           
        </div>
      </div>
    </div>
  );
};