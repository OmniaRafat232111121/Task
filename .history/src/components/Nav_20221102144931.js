import React from 'react'
import {nav} from '../data'
const Nav = () => {
  return (
    <nav>
    <ul className='flex gap-x-10'>
    {nav.map((item))}

    </ul>
      
    </nav>
  )
}

export default Nav
