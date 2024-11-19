import React from 'react';
import Self from '../assets/ass4.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          <img src={Self} alt=' ' />
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>
            I am a Computer Science student passionate about creativity. 
            </h3>
            <p className='mb-6'>
            Pursuing a degree in Computer Science while exploring creative fields like video editing and event organizing. Experience includes roles in public relations and contributing to university events, with a strong emphasis on skill development and impactful collaboration.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> :
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Study
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> :
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> :
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;