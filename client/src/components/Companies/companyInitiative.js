import InfoIcon from "@material-ui/icons/Info";
import React, {useLayoutEffect, useEffect, useState } from 'react';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import Facts from "./Facts";

const CompanyInitiative = () => {

    const [tabView, setTabView] = useState(window.innerWidth < 800);
    const [showCompanyInitInfo, setCompanyInitShowInfo] = useState(false);

    const handleCloseCompanyInitInfo = () => {
        setCompanyInitShowInfo(false)
    }


    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 800) {
                setTabView(false);
            } else {
                setTabView(true);
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (!tabView) { //web view
        return (
            <div className='brand_info-text'>A showcase of brand initiatives and achievements that are not directly correlated to the scores given</div>
        )
    } else if (showCompanyInitInfo && tabView) { //tab view	
        return (
            <CompanyInitPopup handleCloseCompanyInitInfo={handleCloseCompanyInitInfo} />
        )
    } else return null

}

const CompanyInitPopup = () => {
    const [showCompanyInitInfo, setCompanyInitShowInfo] = useState(false);

    const handleCloseCompanyInitInfo = () => {
        setCompanyInitShowInfo(false)
    }

    return (
        <div className="company-popup">
            <div className='company-popup-content'>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                    <div>Company Initiatives</div>
                    <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
                        A showcase of brand initiatives and achievements that are not directly correlated to the scores given.
                    </div>
                </div>
                <HighlightOffRoundedIcon onClick={handleCloseCompanyInitInfo} className="popup-close-icon" />
            </div>
        </div>
    )
};



export default function Fact (props){
    const [showCompanyInitInfo, setCompanyInitShowInfo] = useState(false);

    const handleCloseCompanyInitInfo = () => {
        setCompanyInitShowInfo(false)
    }
        return(
            <div>
                <div className='Brand-Section-title'>
                                    Company Initiatives
                                <InfoIcon className='brand_info-icon' onClick={() => setCompanyInitShowInfo(!showCompanyInitInfo)} />
                                    <CompanyInitiative />
                </div>

                <div className='Decorative-Line'></div>
                <Facts company = {props.companyName}/>
            </div>
        );
    }