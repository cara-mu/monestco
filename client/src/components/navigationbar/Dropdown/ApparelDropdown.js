import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './ApparelDropdown.css'

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
        <h2>Category 1</h2>
        <h2>Category 2</h2>
        <h2>Category 3</h2>
        <h2>Category 4</h2>
        <h2>Category 5</h2>
        <h2>Category 6</h2>
        <h2>Category 7</h2>
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
      </ul>
  );
}

export default ApparelDropdown;