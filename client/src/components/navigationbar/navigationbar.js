import React from 'react';
import { MenuItems } from "./menuitems.js";
import './navigationbar.css';
import LogoTransparent from "./graphics/logo_transparent.png"
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return(
            <nav className = "NavigationItems">
                <Link to = '/' className = "NavigationLogo">
                    <img src = { LogoTransparent } alt = "logo"/>
                </Link>
                <div className = "MenuIcon">
                </div>
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
        )
    }
}

export default NavigationBar;