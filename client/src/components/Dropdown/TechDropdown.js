import React, { useState } from 'react';
import '../../styles/TechDropdown.css';


function TechDropdown({enterTechDropdown, exitTechDropdown}) {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={`coming-soon-section ${click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'}`}
        onMouseEnter={enterTechDropdown} 
        onMouseLeave={exitTechDropdown}
        >  
        
        {/* First launch will not include */}

        <h1 className="coming-soon-text" style={{justifyContent:'center'}}>Coming soon!</h1>
        
      </ul>
  );
}

export default TechDropdown;