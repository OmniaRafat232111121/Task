import React,{useState,useEffect} from 'react'
import {headerData} from '../data'
import Nav from './Nav';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
const Header = () => {
      // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
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
    <header
     className={`${isActive ?"lg:top-0 bg-green-600 text-black shadow-lg":"lg:top-[20px]"} fixed w-full transition-all duration-all z-10`}>
    <div className='container mx-auto flex justify-between items-center sm:py-[100px] s'>
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

  <button
          className='btn btn-sm btn-outline hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1400'
        >
          {btnText}
        </button>


        {/*hidden on desktop*/}
      <button className='lg:hidden ' onClick={() => setMobileNav(!mobileNav)}>
      {mobileNav?(
        <HiOutlineX className='text-3xl text-accent' />
      ):(
        <HiMenuAlt4 className='text-3xl text-accent' />
      )
    }

      </button>
    </div>
    </header>
  )
}

export default Header
