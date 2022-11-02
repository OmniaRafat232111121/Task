import React from 'react'
import {nav} from '../data'
const Nav = () => {
  return (
    <nav>
    <ul className='flex gap-x-5'>
    {nav.map((item,index)=>{
        //destructring data 
        const {href,name}=item;
        return(
            <li key={index}>
            <a className='hover:text-accent transition' >  {name}</a>
          
            </li>

        )
    })}

    </ul>
      
    </nav>
  )
}

export default Nav
