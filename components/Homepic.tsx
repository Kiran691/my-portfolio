import Image  from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Pic1 from "@/public/images/portfolio/pic.avif"
export const Homepic = () => {
  return (
    <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-16">
      {/* left start here  */}
      <div className='p-5 max-w-lg leading-8'>
        

      <h1 className='text-white'>
        Hello, happy to see you!
      </h1>
      <p className=' text-gray-500'>I help small and medium-sized business grow their audience and brand recognition through social media.</p>
       <button className='group flex item-center bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg'>
        Profile
       <MdOutlineKeyboardArrowRight 
       size={20} 
       className="gruop-hover:rotate-90 duration-500"
       />
       </button> 
      
      </div>
      {/* left ends here */}

      {/* right  */}
      <div>
       <img 
       src= "https://resume-template-gamma.vercel.app/images/car3.webp" 
       alt='Home pic'
       className= "md:w-full w-1/2 mx-auto" 
       />
      </div> 
      {/* right ends */}
      </section>
  );
};
