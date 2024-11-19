import React from 'react';
import Pic from '../assets/ass2.png';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Designing',
    description:
    'I do UI/UX designing for a my school projects.',
  },
  {
    name: 'Public Relation',
    description:
    'I work as a Public Relation Officer of Computer Science Students Association for 2 years.',
  },
  {
    name: 'Video Editing',
    description:
    'I freelance in editing videos.',
  },
  {
    name: 'Event Organizing',
    description:
    'I serve as an Event Organizer for plenty of events the University holds.',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 mix-blend-lighten mb-12 lg:mb-0 space-x-[-25px] space-y-[-15px]'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Third Year Student with over 2 years of freelancing experience
              </h3>
          <img src={Pic} alt=' ' className='ml-4' /> {/* Adjust the margin-left here */}
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            {/* service list */}
            <div>
            {services.map((service, index) => {
              const {name, description } = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                      </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;