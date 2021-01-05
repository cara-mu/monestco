import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import Dropdown from './Dropdown/Dropdown.js';
import ApparelDropdown from './Dropdown/ApparelDropdown.js'

import LogoTransparent from "./Graphics/logo_transparent.png"

function NavigationBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <nav className = 'Navigation-Bar' >
          {/* Monest Logo */}

        <Link 
            to='/' 
            className='Logo' 
            onClick={closeMobileMenu}>
                <img src = {LogoTransparent} alt = "logo"/>
        </Link>

        {/* Begin Navigation Menu */}

        <ul className = {click ? 'nav-menu active' : 'Navigation-Menu'}>
            {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link 
                to='/' 
                className='Navigation-Link' 
                onClick={closeMobileMenu}>
                    Apparel
            </Link>
            {dropdown && <ApparelDropdown />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMobileMenu} >
                 Fast Food 
            </Link>
            {dropdown && <Dropdown />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link
              to='/products'
              className='Navigation-Link'
              onClick={closeMobileMenu} >
                 Products
            </Link>
          </li>

          {/* Compare button had unique css styling and does not include hover option */}
          <li className='Menu-Item'>
            <Link
              to='/contact-us'
              className='Compare-Button'
              onClick={closeMobileMenu} >
                Compare
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default NavigationBar;