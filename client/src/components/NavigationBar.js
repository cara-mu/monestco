import React, { useState, useLayoutEffect } from 'react';
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
  const [appDropdownLink, setAppDropdownLink] = useState(false);
  const [appDropdown, setAppDropdown] = useState(false);

  const [foodDropdownLink, setFoodDropdownLink] = useState(false);
  const [foodDropdown, setFoodDropdown] = useState(false);

  const [techDropdownLink, setTechDropdownLink] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);

  const [compareDropdownLink, setCompareDropdownLink] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false);

  {/* Closes menu when navigated away */}
  const closeMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const minWidth = 850;
  const timeLimit = 400;

  {/* Manage apparel dropdown menu*/}
  const enterAppDropdown = () => {
    if (window.innerWidth > minWidth) {    
      setAppDropdown(true);    
    }
  };

  const exitAppDropdown = () => {
    if (window.innerWidth > minWidth) { 
      setTimeout(() => {      
        setAppDropdown(false);      
      }, timeLimit)
    }
  };

  const enterAppDropdownLink = () => { 
    if (window.innerWidth > minWidth) { 
      setAppDropdownLink(true);
    }
  };

  const exitAppDropdownLink = () => {
    if (window.innerWidth > minWidth) {
    setTimeout(() => {      
        setAppDropdownLink(false);
    }, timeLimit)
    }
  };

  {/* Manage fast food dropdown menu */}
  const enterFoodDropdown = () => {
    if (window.innerWidth > minWidth) {
      setFoodDropdown(true);
    }
  };

  const exitFoodDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setFoodDropdown(false);   
      }, timeLimit)
    }
  };

  const enterFoodDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setFoodDropdownLink(true);
    }
  };

  const exitFoodDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setFoodDropdownLink(false);   
      }, timeLimit)      
    }
  };

  {/* Manage tech dropdown menu */}
  const enterTechDropdownLink = () => {
    if (window.innerWidth > minWidth) {      
      setTechDropdownLink(true);
    }
  };

  const exitTechDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setTechDropdownLink(false);   
      }, timeLimit)      
    }
  };

  const enterTechDropdown = () => {
    if (window.innerWidth > minWidth) {      
      setTechDropdown(true);
    }
  };

  const exitTechDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setTechDropdown(false);   
      }, timeLimit)      
    }
  };

    {/* Manage compare dropdown menu */}
  const enterCompareDropdownLink = () => {
    if (window.innerWidth > minWidth) {      
      setCompareDropdownLink(true);
    }
  };

  const exitCompareDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setCompareDropdownLink(false);   
      }, timeLimit)       
    }
  };

  const enterCompareDropdown = () => {
    if (window.innerWidth > minWidth) {      
      setCompareDropdown(true);
    }
  };

  const exitCompareDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setCompareDropdown(false);   
      }, timeLimit)       
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > minWidth) {
        setClick(false)
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  console.log(foodDropdown, foodDropdownLink)
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
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink} >
            <Link 
                to='/' 
                className='Navigation-Link' 
                onClick={closeMenu}
                >
                    Apparel
            </Link>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterTechDropdownLink} onMouseLeave={exitTechDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Tech
            </Link>
            {(techDropdownLink || techDropdown) && <TechDropdown enterTechDropdown={enterTechDropdown} exitTechDropdown={exitTechDropdown}  />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Fast Food 
            </Link>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link'
              onClick={closeMenu} >
                 Beauty 
            </Link>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
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
          <li className='Menu-Item' onMouseEnter={enterCompareDropdownLink} onMouseLeave={exitCompareDropdownLink}>
            <Link
              to='/comparison'
              className='Compare-Button'
              onClick={closeMenu} >
                Compare
            </Link>
            {(compareDropdownLink || compareDropdown) && <ComparisonDropdown enterCompareDropdown={enterCompareDropdown} exitCompareDropdown={exitCompareDropdown} />}
          </li>

          <li className='Menu-Item Menu-Item-search' >
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
        <div className='mobile-search-icon'>
          <SearchIcon style={{fill:'rgb(50,50,50)', fontSize:'25px'}} />
        </div>
      </nav>
  );
}

export default NavigationBar;