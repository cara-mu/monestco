import { React, useState } from "react";
import ModalBody from '../ModalBody';
import InfoIcon from "@material-ui/icons/Info";
import TextTruncate from 'react-text-truncate';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';


export default function InTheNews(props) {

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

    const [open, setOpen] = useState(false);
    const [showNewsInfo, setNewsShowInfo] = useState(false);
    const [openID, setOpenID] = useState(0);
    const [citations, setCitations] = useState(companyCit);

    const news = props.data;

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

    

    function handleClose() {
        setOpen(!open);
    }

    const body = (
        <ModalBody handleClose={handleClose} i={openID} title={news[0]["Title"]} summary={news[0]["Summary"]}
        issueAdd={news[0]["IssueAddressed"]} issueAddExp={news[0]["IssueAddressedExplanation"]} respTake={news[0]["ResponsibilityTaken"]} respTakenExp = {news[0]["ResponsibilityTakenExplanation"]} newsID={news[0]["ID"]} citID={citations[0]["RelationalID"]} author={citations[0]["Author"]} cittitle={citations[0]["Title"]} pubgroup = {citations[0]["PublishingGroup"]} date = {citations[0]["Date"]} pages = {citations[0]["Pages"]} url = {citations[0]["URL"]} />
    );

    const News = (newsinput) => {
        return Object.entries(newsinput[0]['Category']).map((category, i) => {
            return <div>
            <div className='news-card'>
                <img src={newsinput[0]["Photo"][i]} style={{background: 'rgba(87, 114, 104, 0.5)'}} />
                <div className='news-category'>
                    <span className='news-category-title'>{category[1]}</span>
                    <span className='news-category-year'>{newsinput[0]["Year"][i]}</span>
                </div>
                <div style={{marginTop: '3%'}} className = 'News-Description'>
                    <div className = 'News-Description-title'>{newsinput[0]["Title"][i]}</div>
                    
                    <TextTruncate
                        line={3}
                        containerClassName = 'News-Description-info'
                        element="div"
                        truncateText="…"
                        text={newsinput[0]["Summary"][i]}
                    />

                    {/* <div className = 'News-Description-info'>{newsinput[0]["Summary"][i]}</div> */}
                    <div style={{fontSize:'14px'}}>
                        <span>Responsibility Taken?</span>

                        {newsinput[0]["ResponsibilityTaken"][i] == "No" &&
                            <span style={{color:'#E94921', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        ||
                        newsinput[0]["ResponsibilityTaken"][i] == "Yes" &&
                            <span style={{color:'#28a745', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        ||
                        newsinput[0]["ResponsibilityTaken"][i] == "Maybe" &&
                            <span style={{color:'#F29A72', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        }


                    </div>
                    <div style={{fontSize:'14px', display:'flex', position:'relative'}}>
                        <span>Issue Resolved?</span>

                        {newsinput[0]["IssueAddressed"][i] == "No" &&
                            <span style={{color:'#E94921', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        || 
                        newsinput[0]["IssueAddressed"][i] == "Yes" &&
                            <span style={{color:'#28a745', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        || 
                        newsinput[0]["IssueAddressed"][i] == "Maybe" &&
                            <span style={{color:'#F29A72', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        }
                        <button className='News-read-more-btn' onClick={() => handleOpen(i, news[0]["ID"][i])}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
        })
    }

    
  
    return (
            <div className = 'In-The-News'>
                <div className = 'Brand-Section-title'>
                    In The News
                    <InfoIcon className='brand_info-icon' onClick={() => setNewsShowInfo(!showNewsInfo)} />
                        <InTheNews />
                    </div>
                <div className = 'Decorative-Line'></div>
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
        );

    
}

