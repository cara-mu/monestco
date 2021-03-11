import React from 'react'

import Logo from '../assets/brandBreakdown.svg';
import '../styles/BrandBreakdown.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      boxShadow:"none",
      marginTop:20
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color:"white"
    },
    border :{
        background: "#3D3E3F",
    },
    heading1:{
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    border1: {
        borderBottom: "1px solid #3D3E3F",
    },
  }));


function BrandBreakdown() {
    const classes = useStyles();

    return (
        <div className="breakdown_page">
            <div className="breakdown_logo">   
                <img src={Logo} className="breakdown_logoImage"/>
                <p className="breakdown_logoText">48/154</p>
            </div>
            <div className={`breakdown_accordian ${classes.root}`}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.border}
                    >
                    <Typography className={classes.heading}>Accordion 1 <span className="table_column_up">5.5/22</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.border1}
                            >
                            <Typography className={classes.heading1}>Accordion Inside <span className="table_column">3/4</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={`breakdown_accordian ${classes.root}`}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.border}
                    >
                    <Typography className={classes.heading}>Accordion 1 <span className="table_column_up">5.5/22</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.border1}
                            >
                            <Typography className={classes.heading1}>Accordion Inside <span className="table_column">3/4</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default BrandBreakdown;