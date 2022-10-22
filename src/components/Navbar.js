import React from 'react';
import logo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Airbnb logo" />
    </nav>
  )
}

export default Navbar