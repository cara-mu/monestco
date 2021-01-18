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
        <h1>Compare</h1>
        <h2>Category 1</h2>
        { MenuItems.map((item, index) => {
            return (
                <li key = {index} >

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
      </ul>
  );
}

export default ApparelDropdown;