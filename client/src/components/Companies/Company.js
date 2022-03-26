import React, { useEffect, useState, useLayoutEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, withRouter, useLocation } from 'react-router-dom';
import '../../styles/Companies.css';
import DropdownButton from '../../assets/dropdownbutton.png';
import NewsPlaceHolder from '../../assets/news.png';
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
import Facts from "./Facts";
import Scores from "./Scores/Scores";
import BrandProfile from "./BrandProfile";
import SimilarBrand from "./SimilarBrand";


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
    const NewsPopup = ({ handleCloseInfo }) => {
        return (
            <div className="company-popup">
                <div className='company-popup-content'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                        <div>In the News</div>
                        <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
                            News and recent events summarized with an assessment of the company’s actions taken in response
                        </div>
                    </div>
                    <HighlightOffRoundedIcon onClick={() => setNewsShowInfo(false)} className="popup-close-icon" />
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

    const InTheNews = () => {

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
                <div className='brand_info-text'>News and recent events summarized with an assessment of the company’s actions taken in response</div>
            )
        } else if (showNewsInfo && tabView) { //tab view	
            return (
                <NewsPopup handleCloseNewsInfo={handleCloseNewsInfo} />
            )
        } else return null

    }

    useEffect(() => {

        window.scrollTo(0, 0);

        //There are special characters inside company name, such as 'H&M'
        let company_name = encodeURIComponent(companyName);
        let url = "/api/v1/news?company=" + company_name;

        axios.get(url)
            .then((resp) => {
                let data = companyNews;
                let photoarr = [];
                let yeararr = [];
                let catarr = [];
                let titlearr = [];
                let summarr = [];
                let issueaddarr = [];
                let issueexparr = [];
                let resptakearr = [];
                let respexparr = [];
                let idarr = [];
                resp.data.map(news => {
                    photoarr.push(news['Photo']);
                    yeararr.push(news['Year']);
                    catarr.push(news['Category']);
                    titlearr.push(news['Title']);
                    summarr.push(news['Summary']);
                    issueaddarr.push(news['IssueAddressed']);
                    issueexparr.push(news['IssueAddressedExplanation']);
                    resptakearr.push(news['ResponsibilityTaken']);
                    respexparr.push(news['ResponsibilityTakenExplanation']);
                    idarr.push(news['ID']);
                })
                data[0]["Photo"] = photoarr;
                data[0]["Year"] = yeararr;
                data[0]["Category"] = catarr;
                data[0]["Title"] = titlearr;
                data[0]["Summary"] = summarr;
                data[0]["IssueAddressed"] = issueaddarr;
                data[0]["IssueAddressedExplanation"] = issueexparr;
                data[0]["ResponsibilityTaken"] = resptakearr;
                data[0]["ResponsibilityTakenExplanation"] = respexparr;
                data[0]["ID"] = idarr;
                setNews(data);
                setState(resp.data);
            })
    }, [findLocation]);


    const News = (newsinput) => {
        return Object.entries(newsinput[0]['Category']).map((category, i) => {
            return <div>
                <div className='news-card'>
                    <img src={newsinput[0]["Photo"][i]} style={{ background: 'rgba(87, 114, 104, 0.5)' }} />
                    <div className='news-category'>
                        <span className='news-category-title'>{category[1]}</span>
                        <span className='news-category-year'>{newsinput[0]["Year"][i]}</span>
                    </div>
                    <div style={{ marginTop: '3%' }} className='News-Description'>
                        <div className='News-Description-title'>{newsinput[0]["Title"][i]}</div>

                        <TextTruncate
                            line={3}
                            containerClassName='News-Description-info'
                            element="div"
                            truncateText="…"
                            text={newsinput[0]["Summary"][i]}
                        />

                        {/* <div className = 'News-Description-info'>{newsinput[0]["Summary"][i]}</div> */}
                        <div style={{ fontSize: '14px' }}>
                            <span>Responsibility Taken?</span>

                            {newsinput[0]["ResponsibilityTaken"][i] == "No" &&
                                <span style={{ color: '#E94921', marginLeft: '5px' }}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                                ||
                                newsinput[0]["ResponsibilityTaken"][i] == "Yes" &&
                                <span style={{ color: '#28a745', marginLeft: '5px' }}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                                ||
                                newsinput[0]["ResponsibilityTaken"][i] == "Maybe" &&
                                <span style={{ color: '#F29A72', marginLeft: '5px' }}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                            }


                        </div>
                        <div style={{ fontSize: '14px', display: 'flex', position: 'relative' }}>
                            <span>Issue Resolved?</span>

                            {newsinput[0]["IssueAddressed"][i] == "No" &&
                                <span style={{ color: '#E94921', marginLeft: '5px' }}>{newsinput[0]["IssueAddressed"][i]}</span>
                                ||
                                newsinput[0]["IssueAddressed"][i] == "Yes" &&
                                <span style={{ color: '#28a745', marginLeft: '5px' }}>{newsinput[0]["IssueAddressed"][i]}</span>
                                ||
                                newsinput[0]["IssueAddressed"][i] == "Maybe" &&
                                <span style={{ color: '#F29A72', marginLeft: '5px' }}>{newsinput[0]["IssueAddressed"][i]}</span>
                            }
                            <button className='News-read-more-btn' onClick={() => handleOpen(i, news[0]["ID"][i])}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        })
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


                        <div className='In-The-News'>
                            <div className='Brand-Section-title'>
                                In The News
                            <InfoIcon className='brand_info-icon' onClick={() => setNewsShowInfo(!showNewsInfo)} />
                                <InTheNews />
                            </div>
                            <div className='Decorative-Line'></div>
                            <div className='In-The-News-container'>
                                {News(news)}
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>

                        </div>


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
