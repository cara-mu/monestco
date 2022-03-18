import InfoIcon from "@material-ui/icons/Info";
import Modal, { ModalManager } from '@material-ui/core/Modal';
import ModalBody from '../ModalBody';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import TextTruncate from 'react-text-truncate';
import axios from "axios";

   export default function News(props) {

    // const declarations
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

    const [state, setState] = useState([])
    const [openID, setOpenID] = useState(0);
    const [showNewsInfo, setNewsShowInfo] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [news, setNews] = React.useState(companyNews);
    const [citations, setCitations] = React.useState(companyCit);

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <ModalBody handleClose={handleClose} i={openID} title={news[0]["Title"]} summary={news[0]["Summary"]}
            issueAdd={news[0]["IssueAddressed"]} issueAddExp={news[0]["IssueAddressedExplanation"]} respTake={news[0]["ResponsibilityTaken"]} respTakenExp={news[0]["ResponsibilityTakenExplanation"]} newsID={news[0]["ID"]} citID={citations[0]["RelationalID"]} author={citations[0]["Author"]} cittitle={citations[0]["Title"]} pubgroup={citations[0]["PublishingGroup"]} date={citations[0]["Date"]} pages={citations[0]["Pages"]} url={citations[0]["URL"]} />
    );

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

    const handleCloseNewsInfo = () => {
        setNewsShowInfo(false)
    }

    // tab that opens up the read more window
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
                            <button className='News-read-more-btn' onClick={() => handleOpen(i, newsinput[0]["ID"][i])}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

      useEffect(() => {

        window.scrollTo(0, 0);

        //There are special characters inside company name, such as 'H&M'
        let company_name = encodeURIComponent(props.company);
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
    }, [props.company]);

    return (
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
)

};