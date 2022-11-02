import React,{useState} from 'react'
import {headerData} from '../data'
const Header = () => {
    //destructre data 
    const {logo,btnText}=headerData;
    const [isActive,setActive]=useState(false)

  return (
    <header className='fixed w-full transition-all duration-all z-10'>
    <div className='container mx-auto flex justify-center items-center'>
    <a href='#' data-aos='fade-down' data-aos-delay='1000'>
    {/*logo*/}
    <img src={logo} alt='logo' />
  </a>
  
    </div>
    </header>
  )
}

export default Header
