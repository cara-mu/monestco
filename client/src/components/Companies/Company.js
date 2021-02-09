import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../Dropdown/MenuItems';
import '../../styles/Companies.css';

const Company = ({match, location}) => {
    const {
        params: { companyName }
    } = match;

    return(
        <div className = 'Layout'>
            <div className = 'Left-Menu'>
                <h1>{companyName}</h1>
            </div>
            <div className = 'Right-Menu'>
                <h2>Brand Performance</h2>
                <div className = 'Decorative-Line'></div>
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

export default Company;
