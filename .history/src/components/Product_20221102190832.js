import React from 'react';
// import data
import { product } from '../data';


const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className='section p-[30px]'>
      <div className='container mx-auto'>
      <h1 className='text-bold text-3xl w-[49] text-gray-900'>Dont Just Take Our wait for it</h1>
        {/* title & subtitle */}
        <div className='flex  justify-center items-center lg:flex-row mb-10  gap-x-[100px]'>
       <div>
       <h2
       className='text-6xl lg:text-4xl mb-6 font-bold py-3 text-orange-600'
     >
     
       570
     </h2>
     <span className='font-extralight text-black'>Download</span>
       </div>
       <div>
       <h2
       className='text-6xl lg:text-4xl mb-6 font-bold py-3 text-orange-600'
     >
     
       570
     </h2>
     <span className='font-extralight  text-black'>Download</span>
       </div>
       <div>
       <h2
       className='text-6xl lg:text-4xl mb-6 font-bold py-3  text-orange-600'
     >
     
       570
     </h2>
     <span className='font-extralight text-black'>Download</span>
       </div>
       <div>
       <h2
       className='text-6xl lg:text-4xl mb-6 font-bold py-3 text-orange-600'
     
     >
     
       570
     </h2>
     <span className='font-extralight  text-black'>Download</span>
       </div>
       </div>
        
       
      </div>
    </section>
  );
};

export default Product;