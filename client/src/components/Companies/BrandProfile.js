import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function BrandProfile(props){

    let SliderLength = 324 * props.TotalScore / 100;

    return (
        <div className='Left-Menu'>
            <div>
                <img className='brand-logo' src={props.Logo} alt={props.Logo}/>

                {props.Subsidiary !== null &&
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#797979', margin: '10px 0'}}>Subsidiary
                        of {props.Subsidiary}</div>
                }

                <p style={{marginTop: "5%", color: '#4F4F4F'}}>
                    <b>{props.Name}</b> {props.Description}</p>
            </div>
            <div>
                <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginLeft: '105px'}}>industry
                    average
                </div>
                <AiFillCaretDown style={{marginLeft: '155px'}}/>
                {/* {companyDetails[0]["SliderLength"]} */}
                <div className="horizontalline" style={{width: `${SliderLength}px`}}></div>
                <div className="verticalline"></div>
                <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true"
                     alt=""/>
                <p style={{fontFamily: 'DM Sans', fontSize: '12px', color: '#4F4F4F'}}>underperforming<span
                    style={{marginLeft: '145px'}}>overperforming</span></p>
                <div className="brand_inside_text">
                    <span className='navy'>{Math.round(props.TotalScore)}</span>
                    <span>/100</span>
                </div>
                <Link to={"/brand-breakdown/" + props.Name} className='breakDown-link'>Detailed Breakdown</Link>
            </div>
        </div>
    )

}