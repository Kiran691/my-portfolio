import React from 'react'
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import MyImage from "../public/images/pic5.webp"

export const Homepic = () => {
  return (
    <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-16" id="Home">
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
      <div className= "w-1/2 md:w-full mx-auto" >
       <Image
       src= {MyImage} 
       alt='my-pic'
      className='rounded-3xl'
       />
      </div> 
      {/* right ends */}
      </section>
  );
};
