import React,{useState,useEffect} from 'react'
import {headerData} from '../data'
import Nav from './Nav';
const Header = () => {
    //destructre data 
    const {logo,btnText}=headerData;
    //header state
    const [isActive,setActive]=useState(false)
   useEffect(() => {
   window.addEventListener('scroll',()=>{
    window.scrollY>60? setActive(true):setActive(false)
   })
   })
  return (
    <header className={`${isActive ?"lg:top-0 bg-green-600 text-black shadow-lg":"lg:top-[20px]"} fixed w-full transition-all duration-all z-10`}>
    <div className='container mx-auto flex justify-be items-center'>
    <a href='#' data-aos='fade-down' data-aos-delay='1000'>
    {/*logo*/}
    <img src={logo} alt='logo' />
  </a>
  {/*nav show on desktop*/}
  <div className='hidden lg:flex '
  data-aos='fade-down'
  data-aos-delay='1200'>
<Nav/>
  </div>
    </div>
    </header>
  )
}

export default Header
