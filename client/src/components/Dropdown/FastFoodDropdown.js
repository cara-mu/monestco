import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/FastFoodDropdown.css';

function FastFoodDropdown() {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'} >  

         {/* First launch will not include */}
         
         <h1>coming soon!</h1>

      </ul>
  );
}

export default FastFoodDropdown;