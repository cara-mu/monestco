import React, { useState } from 'react';
import LogoTransparent from "./graphics/logo_transparent.png"
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import './NavigationBar.css';

function NavigationBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return(
        <nav className = "NavigationItems">
            <Link to = '/' className = "NavigationLogo">
                <img src = { LogoTransparent } alt = "logo"/>
            </Link>

            <li className = 'Navigation-Menu-Items'>
                <Link to = '/' className ='Navigation-Item' onClick={closeMobileMenu}>
                    Apparel
                </Link>
            </li>
            <li className = 'Navigation-Menu-Items'>
                <Link to = '/' className ='Navigation-Item' onClick={closeMobileMenu}>
                    Fast Food
                </Link>
            </li>
            <li className = 'Navigation-Menu-Items'>
                <Link to = '/' className ='Navigation-Item' onClick={closeMobileMenu}>
                    Tech
                </Link>
            </li>
            <li className = 'Navigation-Menu-Items'
            onMouseEnter={onMouseEnter}
            onMouseLeave ={onMouseLeave}>
                <Link to = '/' onClick={closeMobileMenu} className ="Compare-Button">
                    Compare
                </Link>
                {dropdown && <Dropdown/>}
            </li>
        </nav>
    );
}

export default NavigationBar;