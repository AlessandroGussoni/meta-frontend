import React from 'react';
import "./Navbar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [click, setClick] = React.useState(false)
  const handlClick = ()=> setClick(!click)
  return (
    <div className='navbar'>
      <div className='container'>
        <img src='/images/Logo.svg' alt='logo' />

        
      
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/hero'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/booking'>Reservation</Link></li>
          <li> <Link to='/menu'>Menu</Link></li>
          <li><Link to='/order-online'>Order online</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <div className='hamburger' onClick={handlClick}>
          {click ? (<FaRegTimesCircle className='icon' />): (<HiOutlineMenuAlt4 className='icon' />)}
        
        </div>
      </div>
      </div>
    
    
  )
}
