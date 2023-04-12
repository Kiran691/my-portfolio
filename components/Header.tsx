"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'

export const  Header = () => {
  const [toggle,setToggle] = useState(true);


  return (
    <section className="bg-indigo-500 text-white sticky top-0">
      <div className="flex justify-between items-center">
        <h1 className="font-name m-7">Kiran Imran</h1>
        <ul className="m-7  md:flex hidden">
          <a className="cursor-pointer" href="#Home">
          <li className="mx-5 text-2xl font-headerlist hover:scale-150 duration-500">Home</li>
          </a>
          <a className="cursor-pointer" href="#About">
          <li className="mx-5 text-2xl font-headerlist hover:scale-150 duration-500">About</li>
          </a>
          <a className="cursor-pointer" href="#Portfolio">
          <li className="mx-5 text-2xl font-headerlist hover:scale-150 duration-500">Portfolio</li>
          </a>
          <a className="cursor-pointer" href="#Skills">
          <li className="mx-5 text-2xl font-headerlist hover:scale-150 duration-500">Skills</li>
          </a>
          <a className="cursor-pointer" href="#Contact">
          <li className="mx-5 text-2xl font-headerlist hover:scale-150 duration-500">Contact</li>
          </a>
        </ul>
        <div className="pr-5 md:hidden z-10" 
        onClick={()=>{
          setToggle(!toggle);
          console.log(toggle);
          
          }}>
        {toggle ?<GiHamburgerMenu size={30}/> : <RxCross2 size={30}/>}
        </div>
        {/* voerlay start */}
        {!toggle && (
        <div className="fixed top-0 left-0 bg-indigo-600 h-screen w-full flex items-center justify-center">
        <ul className="m-7 text-white">
        <a className="cursor-pointer" href="#Home">
          <li className="mx-5 my-2 text-6xl font-headerlist ">Home</li>
          </a>
          <a className="cursor-pointer" href="#About">
          <li className="mx-5 my-2 text-6xl font-headerlist ">About</li>
          </a>
          <a className="cursor-pointer" href="#Portfolio">
          <li className="mx-5 my-2 text-6xl font-headerlist ">Portfolio</li>
          </a>
          <a className="cursor-pointer" href="#Skills">
          <li className="mx-5 my-2 text-6xl font-headerlist ">Skills</li>
          </a>
          <a className="cursor-pointer" href="#Contact">
          <li className="mx-5 my-2 text-6xl font-headerlist ">Contact</li>
          </a>
        </ul>
        </div>
         ) 
      }
        
        {/* overlay end */}
      </div>
    </section>
  );
}
