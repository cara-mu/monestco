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


export default function PoliticalContribution(props) {

    const [showPoliticalAssociationInfo, setPoliticalAssociationShowInfo] = useState(false);
    const [summaryData, setPoliticalAssociationSummaryData] = useState({});


    useEffect(() => {
        axios.get(`/api/v1/pa/summary?company=${props.company}`).then((response) => {
          setPoliticalAssociationSummaryData(response.data);
        });
      },[props.company]);

    const styles = style();

    return (
        <div>
            <div className='Brand-Section-title'>
                Political Contributions
                <InfoIcon className='brand_info-icon' onClick={() => setPoliticalAssociationShowInfo(!showPoliticalAssociationInfo)} />
            </div>
            <div className='Decorative-Line'/>
            <div className="political_association">
            <div>
                <Accordion className={ styles.politicalAssociationDropdown }>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='circle-new' />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                      className={styles.politicalAssociationSummary}>

                        <Typography className={styles.heading}>
                        {`From 2016 to 2020, ${props.company} donated ${currencyFormat(summaryData.dem)} to the democratic
                        party and ${currencyFormat(summaryData.rep)} to the Republican party for a total of ${currencyFormat(summaryData.dem + summaryData.rep)} 
                        in donations.` }
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.politicalAssociationAccordionDetails}>
                        <PoliticalAssociationChart company={props.company}/>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
    );


}