import React, { useEffect, useState, useLayoutEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, withRouter, useLocation } from 'react-router-dom';
import '../../styles/Companies.css';
import DiversityImg from '../../assets/diversity.png';
import WorkerExploitImg from '../../assets/workerexploit.png';
import WasteImg from '../../assets/wastepollution.png';
import SustainableImg from '../../assets/sustainable.png';
import DropdownButton from '../../assets/dropdownbutton.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal, { ModalManager } from '@material-ui/core/Modal';
import ModalBody from '../ModalBody';
import InfoIcon from "@material-ui/icons/Info";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillCaretDown } from 'react-icons/ai';
import TextTruncate from 'react-text-truncate';
import PoliticalContribution from "./PoliticalContribution";
import Newx from './Newx';
import SimilarBrand from './SimilarBrand';

const companyinfo = [
    {
        A_ID: 0,
        B_ID: 0,
        C_ID: 0,
        D_ID: 0,
        TotalScore: 0,
        Category: "",
        Description: "",
        IndustryStandardsID: 0,
        Logo: 0,
        Name: "",
        SimilarCompany1: "",
        SimilarCompany2: "",
        SimilarCompany3: "",
        SimilarCompany4: "",
        Subsidiary: "",
        CompanyID: ""
    }
]

const companyFacts = [
    {
        CompanyID: 0,
        Heading: [],
        Summary: [],
        ID: []
    }
]

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

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


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
    const [showBrandPInfo, setBrandPShowInfo] = useState(false);
    const [showCompanyInitInfo, setCompanyInitShowInfo] = useState(false);
    const [showNewsInfo, setNewsShowInfo] = useState(false);
    const [showInfo, setShowInfo] = useState(false)
    const [companyDetails, setCompanyDetails] = React.useState(companyinfo);
    const [fact, setFact] = React.useState(companyFacts);
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

    const handleCloseBrandPInfo = () => {
        setBrandPShowInfo(false)
    }


    const handleCloseCompanyInitInfo = () => {
        setCompanyInitShowInfo(false)
    }

    const handleOpen = (k, ID) => {
        axios.post('/citations',
            {},
            {
                params: [companyName, ID, 'N']
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

    const BrandPerformancePopup = ({ handleCloseInfo }) => {

        return (
            <div className="company-popup">
                <div className='company-popup-content'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                        <div>Brand Performance</div>
                        <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
                            Performance is scored following an assessment of company policies, practices and actions taken in each of the following categories. To understand the scores given, click on Detailed Breakdown.
                        </div>
                    </div>
                    <HighlightOffRoundedIcon onClick={handleCloseBrandPInfo} className="popup-close-icon" />
                </div>
            </div>
        )
    };
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


    const RenderFact = ({ item }) => {
        const [showFact, setShowFact] = useState(false);
        const [showCitation, setShowCitation] = useState(false);

        useEffect(() => {
            if (showFact === false) {
                setShowCitation(false)
            }
        }, [showFact])

        return (
            <div>
                <div className='Fun-Fact'>{item.title}
                    <div
                        className={showFact ? "Fun-Fact-circle-close" : "Fun-Fact-circle"}
                        onClick={() => setShowFact(!showFact)}
                    >
                        <i className={showFact ? "Fun-Fact-arrowdown-close" : "Fun-Fact-arrowdown"}></i>
                    </div>
                </div>
                <div className={`fact-animate-field ${showFact ? 'fact-animate' : ''}`}>
                    {
                        showFact ?
                            <div className="Fun-Fact-Dropdown">
                                {item.discription}
                                <div className='Fun-Fact-Citation' style={{ width: '100%', fontWeight: '700' }}>
                                    Citation
                                <i onClick={() => setShowCitation(!showCitation)} style={{ borderColor: '#323232' }} className={showCitation ? "Fun-Fact-arrowdown-close" : "Fun-Fact-arrowdown"}></i>
                                </div>
                                {
                                    showCitation ? <div>{item.citation}</div> : null
                                }
                            </div> : null
                    }
                </div>
                <div className='FunFact-Decorative-Line'></div>
            </div>
        )

    }

    const BrandPerformance = () => {

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
                <div className='brand_info-text'>Performance is scored following an assessment of company policies, practices and actions taken in each of the following categories. To understand the scores given, click on Detailed Breakdown</div>
            )
        } else if (showBrandPInfo && tabView) { //tab view	
            return (
                <BrandPerformancePopup handleCloseBrandPInfo={handleCloseBrandPInfo} />
            )
        } else return null

    }

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

    useEffect(() => {
        // setLoading(true);
        // let data = companyDetails;
        window.scrollTo(0, 0)
        axios.post(
            '/companyscores',
            {},
            {
                params: companyName
            }
        ).then((resp) => {
            let data = companyDetails;
            let score = (parseInt(resp.data[0]["Ascore"]) + parseInt(resp.data[0]["Bscore"]) + parseInt(resp.data[0]["Cscore"]) + parseInt(resp.data[0]["Dscore"])) / 4;
            data[0]["TotalScore"] = score;
            data[0]["Ascore"] = resp.data[0]["Ascore"];
            data[0]["Bscore"] = resp.data[0]["Bscore"];
            data[0]["Cscore"] = resp.data[0]["Cscore"];
            data[0]["Dscore"] = resp.data[0]["Dscore"];
            let ratio = 324 * score / 100;
            data[0]["SliderLength"] = ratio;
            setCompanyDetails(data);
            setState(resp.data);
        });

     
          
        axios.post(
            '/facts',
            {},
            {
                params: companyName
            }
        )
            .then((resp) => {
                let data = companyFacts;
                let headingsarr = [];
                let summaryarr = [];
                let idarr = [];
                resp.data.map(fact => {
                    headingsarr.push(fact['Heading']);
                    summaryarr.push(fact['Summary']);
                    idarr.push(fact['ID']);
                })
                data[0]['Heading'] = headingsarr;
                data[0]['Summary'] = summaryarr;
                data[0]["ID"] = idarr;
                setFact(data);
                setState(resp.data);
            })
      
    }, [findLocation]);

    const Facts = (factinput) => {
        const [factCitation, setFactCitation] = useState([]);
        const [showCitation, setShowCitation] = useState(false);

        const FactCitations = (i) => {
            if (factCitation.length != 0) {
                return <div><i>{JSON.parse(factCitation)[0]["Title"][i]}</i>, {JSON.parse(factCitation)[0]["Author"][i]}{JSON.parse(factCitation)[0]["Author"][i] && <span>,</span>} {JSON.parse(factCitation)[0]["PublishingGroup"][i]}, {JSON.parse(factCitation)[0]["Date"][i]}{JSON.parse(factCitation)[0]["Pages"][i] && <span>,</span>} {JSON.parse(factCitation)[0]["Pages"][i]}</div>
            }
        }

        const showCitations = async () => {
            if (showCitation == false) setShowCitation(true);
            if (showCitation == true) setShowCitation(false);
            // console.log(showCitation);
            // if (showCitation == false) setShowCitation(true);
            // if (showCitation == true) setShowCitation(false);
            // if (showCitation == -1) {
            //     setShowCitation(j);
            //     console.log(showCitation);
            // }
            // if (showCitation == j) {
            //     setShowCitation(-1);
            //     console.log(showCitation);
            // }
            let citationsarr = [];
            let relidarr = [];
            let authorarr = [];
            let datearr = [];
            let pubarr = [];
            let titlearr = [];
            let urlarr = [];
            let pagesarr = [];
            if (factinput[0]['Heading'].length != 0) {
                Promise.all(Object.entries(factinput[0]['Heading']).map((heading, i) =>
                    axios.post('/citationsFacts',
                        {},
                        {
                            params: [companyName, factinput[0]["ID"][i], 'F']
                        }
                    ).then(resp => {
                        if (resp.data.length != 0) {
                            let data = citations;
                            if (citationsarr.length != 0) {
                                relidarr = citationsarr[0][0]["RelationalID"];
                                authorarr = citationsarr[0][0]["Author"];
                                datearr = citationsarr[0][0]["Date"];
                                pubarr = citationsarr[0][0]["PublishingGroup"];
                                titlearr = citationsarr[0][0]["Title"];
                                urlarr = citationsarr[0][0]["URL"];
                                pagesarr = citationsarr[0][0]["Pages"];
                            }
                            resp.data.map(citation => {
                                relidarr.push(citation["RelationalID"]);
                                authorarr.push(citation["Author"]);
                                datearr.push(citation["Date"]);
                                pubarr.push(citation["PublishingGroup"]);
                                titlearr.push(citation["Title"]);
                                urlarr.push(citation["URL"]);
                                pagesarr.push(citation["Pages"]);
                            })
                            data[0]["Author"] = authorarr;
                            data[0]["Date"] = datearr;
                            data[0]["PublishingGroup"] = pubarr;
                            data[0]["Title"] = titlearr;
                            data[0]["RelationalID"] = relidarr;
                            data[0]["URL"] = urlarr;
                            data[0]["Pages"] = pagesarr;
                            citationsarr.push(data);
                        }
                    })
                )).then(() => {
                    setFactCitation(JSON.stringify(citationsarr[0]))
                });
            }
        }

        return Object.entries(factinput[0]['Heading']).map((heading, i) => {
            return <div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{heading[1]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#F2F2F2' }}>
                        <Typography className={classes.expandMenu}>
                            {factinput[0]['Summary'][i]}
                            <div
                                className="Fun-Fact"
                                style={{ width: "100%", fontWeight: "700" }}
                            >
                                Citation
                                    <i
                                    onClick={() => showCitations()}
                                    style={{ borderColor: "#323232" }}
                                    className={`Fun-Fact-arrowdown ${showCitation ? "Fun-Fact-arrowdown-rotate" : ""}`}
                                ></i>
                            </div>
                            {showCitation ?
                                <div>
                                    {FactCitations(i)}
                                </div>
                                : null}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className='FunFact-Decorative-Line'></div>
            </div>
        })
    }


    return (
        <div className='Layout'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
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
                            <Link to={`/brand-breakdown/${companyName}`} className='breakDown-link'>Detailed Breakdown</Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className='Right-Menu' style={{ marginTop: '7%', marginLeft: '0.5rem' }}>
                        <div className='Brand-Section-title Right-Menu'>
                            Brand Performance
                        <InfoIcon className='brand_info-icon' onClick={() => setBrandPShowInfo(!showBrandPInfo)} />
                            <BrandPerformance />
                        </div>
                        <div className='Decorative-Line'></div>

                        <div className='Brand-Performance'>
                            <div className='Brand-Performance-container'>
                                <div>
                                    DIVERSITY & INCLUSION
                                    <div className='Description'>
                                        <div className='Description-text'>
                                            Discrimination, Gender Equality, <br></br>Cultural Diversity, Inclusivity
                                        </div>
                                        <div className='Description-data'>
                                            <img src={DiversityImg} />
                                            <div className="Description-score"><span style={{ cursor: 'default' }}>{companyDetails[0]["Ascore"]}</span><span style={{ cursor: 'default' }}>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    WORKER EXPLOITATION
                                    <div className='Description'>
                                        <div className='Description-text'>
                                            Child Labour, Forced Labour, <br></br> Living Wage, Working Conditions
                                        </div>
                                        <div className='Description-data'>
                                            <img src={WorkerExploitImg} />
                                            <div className="Description-score"><span style={{ cursor: 'default' }}>{companyDetails[0]["Bscore"]}</span><span style={{ cursor: 'default' }}>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    WASTE & POLLUTION
                                    <div className='Description'>
                                        <div className='Description-text'>
                                            Air Pollution, Water Pollution & Wastes, <br></br> Packaging Waste, Material Waste
                                        </div>
                                        <div className='Description-data'>
                                            <img src={WasteImg} />
                                            <div className="Description-score"><span style={{ cursor: 'default' }}>{companyDetails[0]["Cscore"]}</span><span style={{ cursor: 'default' }}>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    ETHICAL SOURCING
                                    <div className='Description'>
                                        <div className='Description-text'>
                                            Cotton Farming, Deforestation, <br /> Animal Welfare
                                        </div>
                                        <div className='Description-data'>
                                            <img src={SustainableImg} />
                                            <div className="Description-score"><span style={{ cursor: 'default' }}>{companyDetails[0]["Dscore"]}</span><span style={{ cursor: 'default' }}>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Brand-Section-title'>
                            Company Initiatives
                        <InfoIcon className='brand_info-icon' onClick={() => setCompanyInitShowInfo(!showCompanyInitInfo)} />
                            <CompanyInitiative />
                        </div>

                        <div className='Decorative-Line'></div>
                        {Facts(fact)}

  
                        {/* figure out how to include this stuff*/}
                        <Newx company = {companyName}/>

                        {/* put this in newsreadmore or do i have to make a component before news.js and link this to that file which links to news.js */}

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