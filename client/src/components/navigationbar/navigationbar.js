import React from 'react';
import { MenuItems } from "./menuitems.js";
 
class NavigationBar extends React.Component {
    render() {
        return(
            <nav className = "NavigationItems">
                <h1 className = "NavigationLogo">BOOP</h1>
                <div className = "MenuIcon">
                </div>
                <ul>
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