import React from 'react';
// import data
import { product } from '../data';


const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className='section p-[30'>
      <div className='container mx-auto'>
        {/* title & subtitle */}
        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20'>
          <h2
            className='text-6xl lg:text-4xl mb-6 font-bold py-3'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
          >
            {title}
          </h2>
          <p
            className='text-2xl text-light font-normal mb-6 lg:max-w-[350px]'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='400'
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
       
      </div>
    </section>
  );
};

export default Product;