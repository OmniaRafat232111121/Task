import React from 'react';
// import data
import { overview } from '../data';

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className='pretitle'>Alwalys online</div>
            <h2 className='title'>Real-time support with cloud</h2>
            <p className='lead'>Real-time support with cloud</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {Learn more} <img src={btnIcon} alt='' />
            </button>
          </div>
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