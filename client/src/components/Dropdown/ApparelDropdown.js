import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/ApparelDropdown.css';

function ApparelDropdown() {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'} >  
         
        {/* Maps over company items -- currently reference the same JS file due to placeholders */}
        <div className = "Category-Titles">
        <h2>Unisex</h2>
        <h2>Women</h2>
        <h2>Sportswear</h2>
        <h2>Luxury</h2>
        <h2>Shoes & Accessories</h2>
        </div>
        
        <div className = 'Companies'>
        { MenuItems.map((item, index) => {
            return (
                <li key = {index} >
                    <Link onClick = {() => setClick(false)} ></Link>
                    {/* Creates a Link object for every item mapped from MenuItems.js */}
                    <Link 
                        className = {item.cName}
                        to = {item.path}
                        onClick = {() => setClick(false)} >
                            {item.title}
                     </Link>
                </li>
             );
         })}
         </div>
         <div className = 'Brand-Directory'>
            <li>All Brands A-Z</li>
         </div>
      </ul>
  );
}

export default ApparelDropdown;