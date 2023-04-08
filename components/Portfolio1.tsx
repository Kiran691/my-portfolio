import React from "react";
import { portfolioData } from "@/data/PortfilioData";
import Link from "next/link";

export const Portfolio1 = () => {
  return (
    <div
      className="flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="Portfolio">
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Portfolio</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 " >
          {/* card 1 */}
          
          {portfolioData.map( (item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-40 rounded-t-md"
              />
            
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <Link href={item.demo} target={"_blank"}>
                  Demo
                </Link>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <Link href={item.code} target={"_blank"}>
                  Code
                </Link>
              </button>
            </div>
          </div>
          ))}
            
          {/* card end */}
      
      </div>
    </div>
  </div>
  );
};
