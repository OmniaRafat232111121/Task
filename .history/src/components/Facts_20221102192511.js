import React from 'react';
// import image
import Image from '../assets/img/features/feature1-img.svg'
// import data
import { facts } from '../data';

const Facts = () => {
  return (
    <section className='section-sm lg:section-lg p'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]'>
        <div
          className='flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]'
          data-aos='fade-up'
        >
          {facts.map((item, index) => {
            const { startNumber, endNumber, unit, title, desc } = item;
            return (
              <div className='w-[45%]' key={index}>
                <h2 className='h2 mb-2 lg:mb-4'>
                  
                </h2>
                <div className='text-xl text-heading font-bold mb-3'>
                  {title}
                </div>
                <p className='max-w-[240px]'>{desc}</p>
              </div>
            );
          })}
        </div>
        <div className='flex-1 -order-1 lg:order-none'>
          <div className='flex flex-col justify-center h-full lg:pl-[100px]'>
            
            <div className='mb-2' data-aos='fade-down' data-aos-delay='600'>
              <img src={Image} alt='' />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;