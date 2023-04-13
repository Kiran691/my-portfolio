import React from 'react'
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import MyImage from "../public/images/pic5.webp"
import MyImage from "../public/images/portfolio/pic-7.webp"


export const Homepic = () => {
  return (
    <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-16 text-justify"
     id="Home">
      {/* left start here  */}
      <div className='p-5 max-w-lg'>
        

      <h1 className='text-white text-4xl mb-8'>
        Hello, happy to see you!
      </h1>
      <p className=' text-gray-300 leading-8'>I help small and medium-sized businesses to reach out to the audience globally and grow their audience and brand recognition through web applications and social media.</p>
       {/* <button className='group flex item-center  bg-gradient-to-b from-cyan-300 text-black to-gray-600"" py-2 px-4 rounded-lg'>
        Profile
       <MdOutlineKeyboardArrowRight 
       size={20} 
       className="gruop-hover:rotate-90 duration-500"
       /> 
       </button> 
       */}
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
