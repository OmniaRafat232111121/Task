import React,{useState} from 'react'
import {headerData} from '../data'
import Nav from './Nav';
const Header = () => {
    //destructre data 
    const {logo,btnText}=headerData;
    const [isActive,setActive]=useState(false)
   useEffect(() => {
   window.addEventListener('scroll',()=>{
    window.scrollY>60?
   })
   })
  return (
    <header className='fixed w-full transition-all duration-all z-10'>
    <div className='container mx-auto flex justify-center items-center'>
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
