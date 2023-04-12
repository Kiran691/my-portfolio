import React from "react";
import { skillsData } from "@/data/SkillsData";

export const Skills = () => {
  return (
    <div
      className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="Skills"
    >
      <div className=" px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Skills</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20">
            {skillsData.map( (item) => (
                <div key={item.id} className=" p-5 ">
                <img
                src={item.image}
                className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 rounded-lg"
              />
              <p className="text-white text-center mt-4">{item.name}</p>
            </div>
            ))}
         </div>
          </div>
      </div>
  );
};
