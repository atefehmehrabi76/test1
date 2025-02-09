import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-green-600 w-screen h-14 flex justify-center gap-10 p-5'>
        <NavLink to="/route-1">Route-1</NavLink>
        <NavLink to="/route-2">Route-2</NavLink>
        <NavLink to="/route-3">Route-3</NavLink>
    </nav>
  )
}

export default Header