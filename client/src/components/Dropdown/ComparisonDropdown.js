import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/ComparisonDropdown.css';

function ComparisonDropdown() {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'} >  

        <div className = 'Comparison-Options'>
          <div className = 'Selection-Box Apparel'>
            <h1>Apparel</h1>
          </div>
          
          <div className = 'Selection-Box Tech'>
            <h1>Tech</h1>
          </div>

          <div className = 'Selection-Box Fast-Food'>
          <h1>Fast Food</h1>
          </div>

          <div className = 'Selection-Box Beauty'>
            <h1>Beauty</h1>
          </div>
        </div>

      </ul>
  );
}

export default ComparisonDropdown;