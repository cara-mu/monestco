import React, { useState, useLayoutEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import '../../styles/Companies.css';
import { makeStyles } from '@material-ui/core/styles';
import ModalBody from '../ModalBody';
import InfoIcon from "@material-ui/icons/Info";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import axios from 'axios';
import PoliticalContribution from "./PoliticalContribution";
import Facts from "./Facts";
import Scores from "./Scores/Scores";
import BrandProfile from "./BrandProfile";
import SimilarBrand from "./SimilarBrand";
import News from "./News";

const companyNews = [
    {
        CompanyID: 0,
        Photo: "",
        Category: "",
        Year: 0,
        Title: "",
        Summary: "",
        Responsibility: "",
        Explanation: "",
        IssueAddressed: "",
        IssueExplained: ""
    }
]

const companyCit = [
    {
        RelationalID: "",
        Author: "",
        Date: "",
        PublishingGroup: "",
        Title: "",
        Pages: ""
    }
]

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu: {
        backgroundColor: '#F2F2F2'
    },
    paper: {
        position: 'absolute',
        width: 900,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    dropdown: {
        width: '90%',
        boxShadow: 'none',
        paddingLeft: '0px',
        paddingRight: '0px'

    },
    heading: {
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu: {
        fontFamily: 'DM Sans',
        fontWeight: 'normal',
        fontSize: '16px'
    },
    paper: {
        position: 'absolute',
        width: 900,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

/*
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
*/

function Company({ match, location }) {
    const {
        params: { companyName }
    } = match;


    const [showFact, setShowFact] = useState(false);

    const findLocation = useLocation();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [openID, setOpenID] = useState(0);
    const [showCompanyInitInfo, setCompanyInitShowInfo] = useState(false);
    const [showNewsInfo, setNewsShowInfo] = useState(false);
    const [showInfo, setShowInfo] = useState(false)
    const [news, setNews] = React.useState(companyNews);
    const [citations, setCitations] = React.useState(companyCit);
    const { loading, setLoading } = useState(false);
    const [state, setState] = useState([])
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [C, setC] = useState(0);
    const [D, setD] = useState(0);

    const handleCloseInfo = () => {
        setShowInfo(false)
    }

    const handleCloseNewsInfo = () => {
        setNewsShowInfo(false)
    }
    const handleCloseCompanyInitInfo = () => {
        setCompanyInitShowInfo(false)
    }

    const handleOpen = (k, ID) => {
        axios.get('/api/v1/citation/news',
            {
                params: [ID]
            }
        ).then(resp => {
            let data = citations;
            let relidarr = [];
            let authorarr = [];
            let datearr = [];
            let pubarr = [];
            let titlearr = [];
            let urlarr = [];
            let pagesarr = [];
            resp.data.map(citation => {
                relidarr.push(citation["RelationalID"]);
                authorarr.push(citation["Author"]);
                datearr.push(citation["Date"]);
                pubarr.push(citation["PublishingGroup"]);
                titlearr.push(citation["Title"]);
                urlarr.push(citation["URL"]);
                pagesarr.push(citation["Pages"]);
            })
            data[0]["RelationalID"] = relidarr;
            data[0]["Author"] = authorarr;
            data[0]["Date"] = datearr;
            data[0]["PublishingGroup"] = pubarr;
            data[0]["Title"] = titlearr;
            data[0]["URL"] = urlarr;
            data[0]["Pages"] = pagesarr;
            setCitations(data);
            setState(resp.data);
        })
        setOpenID(k);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const toggleFact = () => {
        setShowFact(!showFact)
    }

    const body = (
        <ModalBody handleClose={handleClose} i={openID} title={news[0]["Title"]} summary={news[0]["Summary"]}
            issueAdd={news[0]["IssueAddressed"]} issueAddExp={news[0]["IssueAddressedExplanation"]} respTake={news[0]["ResponsibilityTaken"]} respTakenExp={news[0]["ResponsibilityTakenExplanation"]} newsID={news[0]["ID"]} citID={citations[0]["RelationalID"]} author={citations[0]["Author"]} cittitle={citations[0]["Title"]} pubgroup={citations[0]["PublishingGroup"]} date={citations[0]["Date"]} pages={citations[0]["Pages"]} url={citations[0]["URL"]} />
    );


    const CompanyInitPopup = ({ handleCloseInfo }) => {
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


    const CompanyInitiative = () => {

        const [tabView, setTabView] = useState(window.innerWidth < 800);

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

    return (
        <div className='Layout'>
            <Grid container>
                <Grid item xs={12} md={4}>

                    {/*brand profile with companyName and info*/}
                    <BrandProfile company = {companyName} />
                    {/*test*/}

                </Grid>
                <Grid item xs={12} md={8}>
                    <div className='Right-Menu' style={{ marginTop: '7%', marginLeft: '0.5rem' }}>
                        
                        {/*Score*/}
                        <Scores company={companyName} />

                        <div className='Brand-Section-title'>
                            Company Initiatives
                        <InfoIcon className='brand_info-icon' onClick={() => setCompanyInitShowInfo(!showCompanyInitInfo)} />
                            <CompanyInitiative />
                        </div>

                        <div className='Decorative-Line'></div>
                        {/*{Facts(fact)}*/}
                        <Facts company = {companyName}/>

                        {/* News*/}
                        <News company = {companyName}/>

                        {/*Political Association*/}
                        <PoliticalContribution company = {companyName}/>

                        {/* Similar Brands */}
                        <SimilarBrand company = {companyName}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
// }

export default Company
