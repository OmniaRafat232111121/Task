import React from 'react'
import {nav} from '../data'
const Nav = () => {
  return (
    <nav>
    <ul className='flex gap-x-10'>
    {nav.map((item,index)=>{
        //destructring data 
        const {href,name}=item;
        return(
            <li key={in}>
            </li>

        )
    })}

    </ul>
      
    </nav>
  )
}

export default Nav
