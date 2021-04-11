import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTransparent from '../assets/logo_transparent.png'
import ApparelDropdown from './Dropdown/ApparelDropdown.js'
import TechDropdown from './Dropdown/TechDropdown.js'
import FastFoodDropdown from './Dropdown/FastFoodDropdown.js'
import ComparisonDropdown from './Dropdown/ComparisonDropdown.js';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../styles/NavigationBar.css';
function NavigationBar() {
  {/* Declare variables that will change state when clicked */ }
  {/* Set to false by default, when a component is triggered, will set to respective state */}
  const [click, setClick] = useState(false);
  const state = { clicked: false }

  {/* Declare additional variables to change state when dropdown menu is triggered*/}
  {/* Need to define for each navigation item (apparel, tech, etc..) */}
  const [appDropdown, setAppDropdown] = useState(false);
  const [foodDropdown, setFoodDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false);

  {/* Closes menu when navigated away */}
  const closeMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


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

    {/* Manage compare dropdown menu */}
  const enterCompareDropdown = () => {
    if (window.innerWidth < 960) {
      setCompareDropdown(false);
    } else {
      setCompareDropdown(true);
    }
  };

  const exitCompareDropdown = () => {
    if (window.innerWidth < 960) {
      setCompareDropdown(false);
    } else {
      setCompareDropdown(false);
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

        {/* Hamburger menu appears when screen size is smaller/mobile */}

        <div className = "Mobile-Hamburger-Menu" onClick = {handleClick}>
          {/* Retrieved from Font Awesome CDN */}
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {/* Begin Navigation Menu */}

        <ul className = {click ? 'Nav-Menu active' : 'Navigation-Menu'}>
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
          <li className='Menu-Item' onMouseEnter={enterTechDropdown} onMouseLeave={exitTechDropdown} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Tech
            </Link>
            {techDropdown && <TechDropdown />}
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
          <li className='Menu-Item' onMouseEnter={enterFoodDropdown} onMouseLeave={exitFoodDropdown} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Beauty 
            </Link>
            {foodDropdown && <FastFoodDropdown />}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' >
            <Link
              to='/methodology'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Methodology
            </Link>
          </li>

          {/* Compare button had unique css styling but still has hover dropdown, denoted by having two classNames */}
          <li className='Menu-Item' onMouseEnter={enterCompareDropdown} onMouseLeave={exitCompareDropdown}>
            <Link
              to='/comparison'
              className='Compare-Button'
              onClick={closeMenu} >
                Compare
            </Link>
            {compareDropdown && <ComparisonDropdown />}
          </li>

          <li className='Menu-Item' >
            <TextField 
              id="standard-basic" 
              placeholder="Search"
              // label="Standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{fill:'rgba(50,50,50,0.5)'}} />
                  </InputAdornment>
                ),
              }}
               /> 
          </li>
        </ul>
      </nav>
  );
}

export default NavigationBar;