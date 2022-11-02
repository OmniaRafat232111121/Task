import React from 'react';
// import data
import { hero } from '../data';
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };
const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className='min-h-[900px] py-12'>
      <div  <motion.div
      variants={container}
      initial='hidden'
      whileInView={'show'}
    
    > className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <motion.div
          variants={container}
          initial='hidden'
          whileInView={'show'} 
          className='flex-1'>
          <motion.h1 variants={fadeIn('right')} className='title mb-2 lg:mb-5 font-bold'>
          {title}
        </motion.h1>
            <p
              className='lead mb-5 lg:mb-10'
              variants={fadeIn('right')}
            >
              {subtitle}
            </p>
            {/* btn & comp text */}
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              variants={fadeIn('right')}
            >
              <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                {btnText}
              </button>
              <span className='text-light lg:lead lg:mb-0'>{compText}</span>
            </div>
          </motion.div>



          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
          <img src={image} alt='' />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;