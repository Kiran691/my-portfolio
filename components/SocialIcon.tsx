
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import React from 'react';


  export const SocialIcon = () => {
  return (
    <div className='top-[30vh] fixed left-0'>
      
      <Link href={"http://Linkedin.com/"} target={"_blank"}>
      <div className="ml-[-86px] w-[150px] hover:ml-0 duration-200 flex text-lg items-center gap-2 fixed text-white bg-gray-600 top-[30vh] w-36 py-3 px-5 rounded-r-lg">
        
        Linkedin
      <FaLinkedin size={30} />
      
      </div>
      </Link>

      <Link href={"http://Github.com/"} target={"_blank"}>
      <div className="ml-[-86px]  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600 top-[40vh] w-36 py-3 px-6 rounded-r-lg">
        Github
        <FaGithub size={30} />
        </div>
        </Link>

        <Link href={"http://Medium.com/"} target={"_blank"}>
      <div className="ml-[-86px] w-[150px] hover:ml-0 duration-200 flex text-lg items-center gap-2 fixed text-white bg-gray-600 top-[50vh] w-36 py-3 px-5 rounded-r-lg">
        Medium
      <FaMedium size={30} />
      
      </div>
      </Link>
    </div>
  );
};
