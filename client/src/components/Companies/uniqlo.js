import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Companies.css';


function Uniqlo(){
    return(
        <div className = 'Layout'>
            <div className = 'Left-Menu'>
                <h1>Uniqlo</h1>
            </div>
            <div className = 'Right-Menu'>
                <h2>Brand Performance</h2>
                <div className = 'Brand-Performance-Menu'>
                    <h2>DIVERSTIY & INCLUSION</h2>
                    <h2>WORKER EXPLOITATION</h2>
                    <h2>WASTE & POLLUTION</h2>
                    <h2>SUSTAINABLE MATERIALS</h2>
                </div>
            </div>
        </div>
    );
}

export default Uniqlo;
