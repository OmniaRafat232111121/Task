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
        </div>
      </div>
    </section>
  );
};

export default Overview;