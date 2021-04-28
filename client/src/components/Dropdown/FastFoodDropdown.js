import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/FastFoodDropdown.css';

function FastFoodDropdown({enterFoodDropdown, exitFoodDropdown}) {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={`coming-soon-section ${click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'}`}
        onMouseEnter={enterFoodDropdown} 
        onMouseLeave={exitFoodDropdown}
        >  

         {/* First launch will not include */}
         
         <h1 className="coming-soon-text" style={{justifyContent:'center'}}>Coming soon!</h1>

      </ul>
  );
}

export default FastFoodDropdown;
