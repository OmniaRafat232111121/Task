import React from 'react';
// import data
import { features } from '../data';

const Feature3 = () => {
  // destructure features
  const { feature3 } = features;
  // destructure feature3
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className='section px-'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className='text-lg lg:text-[22px] text-light mb-4 lg:mb-6 uppercase font-normal'>{pretitle}</div>
            <h2 className='text-6xl lg:text-8xl mb-6 font-bold'>{title}</h2>
            <p className='text-2xl text-light font-normal mb-6'>{subtitle}</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} <img src={btnIcon} alt='' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;