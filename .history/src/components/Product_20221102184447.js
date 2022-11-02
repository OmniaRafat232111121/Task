import React from 'react';
// import data
import { product } from '../data';


const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className='section p-[30px]'>
      <div className='container mx-auto'>
        {/* title & subtitle */}
        <div className='flex  justify-center items-center lg:flex-row mb-10  gap-x-[100px]'>
       <div>
       <h2
       className='text-6xl lg:text-4xl mb-6 font-bold py-3'
       data-aos='fade-up'
       data-aos-offset='400'
       data-aos-delay='300'
     >
     
       570
     </h2>
     <span>Down</span>
       </div>
         
          <h2
            className='text-6xl lg:text-4xl mb-6 font-bold py-3'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
          >
            570
          </h2>
          <h2
            className='text-6xl lg:text-4xl mb-6 font-bold py-3'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
          >
            570
          </h2>
          
          <h2
          className='text-6xl lg:text-4xl mb-6 font-bold py-3'
          data-aos='fade-up'
          data-aos-offset='400'
          data-aos-delay='300'
        >
          570
        </h2>
          
          
        </div>
        {/* cards */}
       
      </div>
    </section>
  );
};

export default Product;