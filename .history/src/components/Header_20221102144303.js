import React from 'react'
import {headerData} from '../data'
const Header = () => {
    //destructre data 
    const {logo,btnText}=headerData;
    const {isAc}

  return (
    <header className='fixed w-full transition-all duration-all z-10'>
    <div className='container mx-auto flex justify-center items-center'>
    </div>
      
    </header>
  )
}

export default Header
