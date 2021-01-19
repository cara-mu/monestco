import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApparelDropdown from './Dropdown/ApparelDropdown.js'
import FastFoodDropdown from './Dropdown/FastFoodDropdown.js'
import TechDropdown from './Dropdown/TechDropdown.js'
import LogoTransparent from '../assets/logo_transparent.png'
import '../styles/NavigationBar.css';

function NavigationBar() {
  {/* Declare variables that will change state when clicked */ }
  {/* Set to false by default, when a component is triggered, will set to respective state */}
  const [click, setClick] = useState(false);

  {/* Declare additional variables to change state when dropdown menu is triggered*/}
  {/* Need to define for each navigation item (apparel, tech, etc..) */}
  const [appDropdown, setAppDropdown] = useState(false);
  const [foodDropdown, setFoodDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);

  {/* Closes menu when navigated away */}
  const closeMenu = () => setClick(false);

  {/* Manage apparel dropdown menu*/}
  const enterAppDropdown = () => {
    if (window.innerWidth < 960) {
      setAppDropdown(false);
    } else {
      setAppDropdown(true);
    }
  };

  const exitAppDropdown = () => {
    if (window.innerWidth < 960) {
      setAppDropdown(false);
    } else {
      setAppDropdown(false);
    }
  };

  {/* Manage fast food dropdown menu */}
  const enterFoodDropdown = () => {
    if (window.innerWidth < 960) {
      setFoodDropdown(false);
    } else {
      setFoodDropdown(true);
    }
  };

  const exitFoodDropdown = () => {
    if (window.innerWidth < 960) {
      setFoodDropdown(false);
    } else {
      setFoodDropdown(false);
    }
  };

  {/* Manage tech dropdown menu */}
  const enterTechDropdown = () => {
    if (window.innerWidth < 960) {
      setTechDropdown(false);
    } else {
      setTechDropdown(true);
    }
  };

  const exitTechDropdown = () => {
    if (window.innerWidth < 960) {
      setTechDropdown(false);
    } else {
      setTechDropdown(false);
    }
  };

  return (
      <nav className = 'Navigation-Bar' >
          {/* Monest Logo */}

        <Link 
            to='/' 
            className='Logo' 
            onClick={closeMenu}>
                <img src = {LogoTransparent} alt = "logo"/>
        </Link>

        {/* Begin Navigation Menu */}

        <ul className = {click ? 'nav-menu active' : 'Navigation-Menu'}>
            {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterAppDropdown} onMouseLeave={exitAppDropdown} >
            <Link 
                to='/' 
                className='Navigation-Link' 
                onClick={closeMenu}>
                    Apparel
            </Link>
            {appDropdown && <ApparelDropdown />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterFoodDropdown} onMouseLeave={exitFoodDropdown} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Fast Food 
            </Link>
            {foodDropdown && <FastFoodDropdown />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterTechDropdown} onMouseLeave={exitTechDropdown} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Tech
            </Link>
            {techDropdown && <TechDropdown />}
          </li>

          {/* Compare button had unique css styling and does not include hover option */}
          <li className='Menu-Item'>
            <Link
              to='/comparison'
              className='Compare-Button'
              onClick={closeMenu} >
                Compare
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default NavigationBar;