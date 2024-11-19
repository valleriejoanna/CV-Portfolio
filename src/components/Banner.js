import React from 'react';
import Image from '../assets/ass1.svg';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section 
    className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
    id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              VALLERIE <span>SALINDEHO</span>
            </motion.h1>
             <motion.div 
             variants={fadeIn('up', 0.3)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}} 
             className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                  'UI/UX Designer', 2000,
                  'Video Editor', 2000,
                  'Undergraduate Student', 2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              A third-year Computer Science student with experience in video editing, event organizing, and public relations. Focused on learning, creativity, and contributing to impactful projects.
            </motion.p>
            {/* socials */}
            <motion.div 
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex text-[20px] gap-x-6 items-center justify-center'>
              <a href='https://www.instagram.com/valleriejoannaa/'>
                <FaInstagram />
              </a>
              <a href='https://github.com/valleriejoanna'>
                <FaGithub />
              </a>
              <a href='https://www.youtube.com/channel/UCZHNnI8FkXCqPb79AVXZY5A'>
                <FaYoutube />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=' ' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;