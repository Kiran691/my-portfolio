import About from '@/components/About';
import Contact from '@/components/Contact';
import { Header } from '@/components/Header'
import { Homepic } from '@/components/Homepic'
import { Portfolio } from '@/components/Portfolio';
import { Skills } from '@/components/Skills';
import { SocialIcon } from '@/components/SocialIcon';
import React from 'react'

export default function Home() {
  return ( 
    <>
    <Header />
    <Homepic />
    <SocialIcon />
    <About />
    <Portfolio/>
    <Skills/>
    <Contact />
    </>
  );
  
}
