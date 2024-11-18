import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/cesa1.jpg';
import Img2 from '../assets/miegori.jpg';
import Img3 from '../assets/eoc.jpg';
import Img4 from '../assets/figma.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              Projects & <br />
              Experiences
            </h2>
            <p className='max-w-sm mb-16'>
              Here are my recent projects and experiences.
            </p>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500'
            src ={Img1} 
            alt=' ' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Students Association</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x2 text-white'>Public Relation Officer of Computer Science Students Association.</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500'
            src ={Img2} 
            alt=' ' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Content Creator</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Freelance video editor and content creator for Mie Gori Restaurant.</span>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500'
            src ={Img3} 
            alt=' ' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Event Organizing Community</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Event Organizer of Klabat University.</span>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500'
            src ={Img4} 
            alt=' ' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>UI/UX Design for a school project.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;