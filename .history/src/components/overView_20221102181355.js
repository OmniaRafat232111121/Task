import React from 'react';
// import data
import { overview } from '../data';

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className='section py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
            <img src={productImg} alt='' />
          </div>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className='text-lg lg:text-[20px] text-light mb-4 lg:mb-6 uppercase font-normal'>Alwalys online</div>
            <h2 className='text-6xl lg:text-4xl  mb-6 font-bold'>Real-time support with cloud</h2>
            <p className='text-2xl text-light font-normal mb-6'>Handl a</p>
            <button className=' mt-3 rounded-md p-[10px] text-xl lg:text-2xl   bg-orange-600 flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              Learn more 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;