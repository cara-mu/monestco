import React, { useState } from 'react';
import { MenuItems } from "./menuitems.js";
import './navigationbar.css';
import LogoTransparent from "./graphics/logo_transparent.png"
import { Link } from 'react-router-dom';
import Dropdown from './dropdown.js';

function NavigationBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <nav className = "NavigationItems">
            <Link to = '/' className = "NavigationLogo">
                <img src = { LogoTransparent } alt = "logo"/>
            </Link>
            <div className = "MenuIcon" onClick ={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>


            {/* start tutorial */}
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
                <Link to = '/' className ='nav-links' onClick={closeMobileMenu}>
                    Apparel
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/' className ='nav-links' onClick={closeMobileMenu}>
                    Fast Food
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/' className ='nav-links' onClick={closeMobileMenu}>
                    Tech
                </Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/' className ='nav-links-responsive' onClick={closeMobileMenu}>
                    Compare
                </Link>
                {dropdown && <Dropdown/>}
            </li>
            </ul>


            {/* end tutorial */}
            <ul className = "NavigationMenu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key ={index}>
                            <a className={item.cName} href ={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default NavigationBar;