import PoliticalAssociationChart from './PoliticalContributionsChart';
import InfoIcon from "@material-ui/icons/Info";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

    const style = makeStyles((theme) => ({
            heading: {
                fontFamily: 'DM Sans',
                color: '#3D3E3F',
                fontSize: '16px'
            },
            politicalAssociationSummary: {
                paddingLeft: '0px',
                paddingRight: '0px',
                width: '100%'
            },
            politicalAssociationAccordionDetails: {
                padding: '0px'
            },
            politicalAssociationDropdown: {
                boxShadow: 'none',
                paddingLeft: '0px',
                paddingRight: '0px',
                marginTop: '27px'

            }
        }));

    function currencyFormat(num){
        num = "" + num;
        return '$' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    export default function News(props) {
        return Object.entries(props.props.newsinput[0]['Category']).map((category, i) => {
            return <div>
                <div className='news-card'>
                    <img src={props.newsinput[0]["Photo"][i]} style={{ background: 'rgba(87, 114, 104, 0.5)' }} />
                    <div className='news-category'>
                        <span className='news-category-title'>{category[1]}</span>
                        <span className='news-category-year'>{props.newsinput[0]["Year"][i]}</span>
                    </div>
                    <div style={{ marginTop: '3%' }} className='News-Description'>
                        <div className='News-Description-title'>{props.newsinput[0]["Title"][i]}</div>

                        <TextTruncate
                            line={3}
                            containerClassName='News-Description-info'
                            element="div"
                            truncateText="…"
                            text={props.newsinput[0]["Summary"][i]}
                        />

                        {/* <div className = 'News-Description-info'>{props.newsinput[0]["Summary"][i]}</div> */}
                        <div style={{ fontSize: '14px' }}>
                            <span>Responsibility Taken?</span>

                            {props.newsinput[0]["ResponsibilityTaken"][i] == "No" &&
                                <span style={{ color: '#E94921', marginLeft: '5px' }}>{props.newsinput[0]["ResponsibilityTaken"][i]}</span>
                                ||
                                props.newsinput[0]["ResponsibilityTaken"][i] == "Yes" &&
                                <span style={{ color: '#28a745', marginLeft: '5px' }}>{props.newsinput[0]["ResponsibilityTaken"][i]}</span>
                                ||
                                props.newsinput[0]["ResponsibilityTaken"][i] == "Maybe" &&
                                <span style={{ color: '#F29A72', marginLeft: '5px' }}>{props.newsinput[0]["ResponsibilityTaken"][i]}</span>
                            }


                        </div>
                        <div style={{ fontSize: '14px', display: 'flex', position: 'relative' }}>
                            <span>Issue Resolved?</span>

                            {props.newsinput[0]["IssueAddressed"][i] == "No" &&
                                <span style={{ color: '#E94921', marginLeft: '5px' }}>{props.newsinput[0]["IssueAddressed"][i]}</span>
                                ||
                                props.newsinput[0]["IssueAddressed"][i] == "Yes" &&
                                <span style={{ color: '#28a745', marginLeft: '5px' }}>{props.newsinput[0]["IssueAddressed"][i]}</span>
                                ||
                                props.newsinput[0]["IssueAddressed"][i] == "Maybe" &&
                                <span style={{ color: '#F29A72', marginLeft: '5px' }}>{props.newsinput[0]["IssueAddressed"][i]}</span>
                            }
                            <button className='News-read-more-btn' onClick={() => handleOpen(i, news[0]["ID"][i])}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
