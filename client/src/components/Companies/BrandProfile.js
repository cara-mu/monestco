import React, { useEffect, useState, useLayoutEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useParams, withRouter, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function BrandProfile(props){
    const [state, setState] = useState([])
    const [companyDetails, setCompanyDetails] = React.useState(props.info);

    return (
        <div className='Left-Menu'>
                        <div>
                            <img className='brand-logo' src={`${companyDetails[0]["Logo"]}`} alt={`${companyDetails[0]["Logo"]}`} />

                            {/* conditional rendering for subsidiary */}
                            {companyDetails[0]["Subsidiary"] != null &&
                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#797979', margin: '10px 0' }}>Subsidiary of {companyDetails[0]["Subsidiary"]}</div>
                            }

                            <p style={{ marginTop: "5%", color: '#4F4F4F' }}><b>{companyDetails[0]["Name"]}</b> {companyDetails[0]["Description"]}</p>
                        </div>
                        <div>
                            <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginLeft: '105px' }}>industry average</div>
                            <AiFillCaretDown style={{ marginLeft: '155px' }} />
                            {/* {companyDetails[0]["SliderLength"]} */}
                            <div class="horizontalline" style={{ width: `${companyDetails[0]["SliderLength"]}px` }}></div>
                            <div class="verticalline"></div>
                            <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" />
                            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: '#4F4F4F' }} >underperforming<span style={{ marginLeft: '145px' }}>overperforming</span></p>
                            <div className="brand_inside_text">
                                <span className='navy'>{Math.round(companyDetails[0]["TotalScore"], 2)}</span>
                                <span>/100</span>
                            </div>
                            <Link to={`/brand-breakdown/${props.company}`} className='breakDown-link'>Detailed Breakdown</Link>
                        </div>
                    </div>
    );
}