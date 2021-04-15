import React from 'react'

import Logo from '../assets/brandBreakdown.svg';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/BrandBreakdown.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      boxShadow:"none",
      marginTop:20
    },
    heading: {
      fontSize: "10px !important",
      fontWeight: theme.typography.fontWeightRegular,
      color:"white",
      width: 50,
      [theme.breakpoints.up(300)]: {
        fontSize: "10px !important",
        fontWeight: theme.typography.fontWeightRegular,
        color:"white",
        width: 50,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "20px !important",
        fontWeight: theme.typography.fontWeightRegular,
        color:"white",
        width: 300,
      },
    },
    innerheading: {
        fontSize: "10px !important",
        color:"black",
        width: 50,
        [theme.breakpoints.between(1200,1400)]: {
            fontSize: "10px !important",
            color:"black",
            width: 100,
        },
        [theme.breakpoints.up(300)]: {
            fontSize: "10px !important",
            color:"black",
            width: 50,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: "20px !important",
            color:"black",
            width: 300,
        },
    },
    border :{
        background: "#3D3E3F",
    },
    heading1:{
        fontSize: "10px !important",
        fontWeight: theme.typography.fontWeightRegular,
        width: 50,
        [theme.breakpoints.up(300)]: {
            fontSize: "10px !important",
            fontWeight: theme.typography.fontWeightRegular,
            width: 50,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: "20px !important",
            fontWeight: theme.typography.fontWeightRegular,
            width: 335,
        }
    },
    border1: {
        borderBottom: "0px",
        marginLeft:0
    },
    paragraph:{
        marginLeft:0,
        fontSize:"10px !important",
        [theme.breakpoints.up(300)]: {
            marginLeft:20,
            fontSize:"10px !important",
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft:80,
            fontSize:"20px !important",
        }
    },
    paragraph1: {
        
    }
  }));


function BrandBreakdown() {
    const classes = useStyles();

    return (
    <div>
        <div className="breakdown_logo">   
                <img src={Logo} className="breakdown_logoImage"/>
                <p className="breakdown_logoText">48/<span style={{fontSize:32}}>154</span></p>
            </div>
        <div className="breakdown_page">
            
            <div className={`breakdown_accordian ${classes.root} `}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={`${classes.border} upper_border`}
                    >
                    <Typography className={classes.heading}>DIVERSITY & INCLUSION</Typography> <span className="table_column_up">5.5/22</span>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Discrimination</Typography> <span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Prohibits discrimination throughout the organization<br/>
                            Identifies and addresses discrimination concerns 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Gender Equality</Typography> <span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Commits to improving gender equality<br/>
                            Has strong female representation in leadership positions<br/>
                            Ensures equal pay for equal work 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Cultural Diversity</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Commits to increasing cultural diversity<br/>
                            Has diverse ethnic representation in leadership positions<br/>
                            Supports BIPOC and marginalized communities<br/>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Inclusivity</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Fosters an inclusive workplace for LGBTQ+ employees<br/>
                            Supports the growth of employees with disabilities<br/>
                            Promotes body positivity and inclusivity to consumers<br/>
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
                    className={`${classes.border} upper_border`}
                    >
                    <Typography className={classes.heading}>WORKER EXPLOITATION</Typography><span className="table_column_up">5.5/22</span>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Child Labour</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Prohibits the use of child labour<br/>
                            Identifies and prevents child labour violations<br/>
                            Enrolls child labour victims in educational programs
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Forced Labour</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Prohibits the use of forced labour<br/>
                            Identifies and prevents forced labour violations<br/>
                            Supports the recovery of forced labour victims
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Living Wage</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Pays all factory workers a living wage<br/>
                            Commits to fair compensation and higher wages<br/>
                            Pays wages and benefits on time and in full<br/>
                            Guarantees the right to freedom of association
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Working Conditions</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Prioritizes factory health and safety conditions<br/>
                            Prohibits excessive work hours<br/>
                            Prohibits all forms of harassment or abuse<br/>
                            Identifies and prevents mistreatment of workers <br/>
                            Compensates and supports mistreated workers
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
                    className={`${classes.border} upper_border`}
                    >
                    <Typography className={classes.heading}>WASTE & POLLUTION</Typography><span className="table_column_up">5.5/22</span>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Air Pollution </Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Commits to reducing energy consumption<br/>
                            Commits to reducing greenhouse gas emissions<br/>
                            Works towards reducing the operational carbon footprint<br/>
                            Works with suppliers to reduce manufacturing pollution
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Water Pollution & Waste</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Commits to reducing water consumption<br/>
                            Works with suppliers to reduce water waste<br/>
                            Eliminates use of hazardous chemicals in products<br/>
                            Filters wastewater to prevent freshwater pollution
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Packaging Waste</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Does not use plastic bags and packaging<br/>
                            Uses recycled packaging materials <br/>
                            Ensures packaging is reused, recycled or composted <br/>
                            Works with suppliers to reduce packaging waste
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Material Waste</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Uses recycled materials in products<br/>
                            Repurposes damaged and excess products<br/>
                            Offers consumer take-back or repair programs<br/>
                            Works with suppliers to reduce material waste
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
                    className={`${classes.border} upper_border`}
                    >
                    <Typography className={classes.heading}>SUSTAINABLE MATERIALS</Typography><span className="table_column_up">5.5/22</span>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Cotton Farming </Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Sources sustainably produced cotton<br/>
                            Advocates against unethical farming practices
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Deforestation</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Sources sustainably produced forest-based fabrics<br/>
                            Uses paper materials from sustainable sources<br/>
                            Protects forests from deforestation
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.root}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={`${classes.border1} inside_border`}
                            >
                            <Typography className={classes.heading1}>Animal Welfare</Typography><span className="table_column">3/4</span>
                            </AccordionSummary>
                            <AccordionDetails>
                             <p className="innerheading">Prohibits discrimination throughout all stages of the organization</p> <span className="table_column_inner" >5.5/22</span>
                            <Typography className={classes.paragraph}>
                            Prohibits animal cruelty<br/>
                            Sources sustainably produced leather<br/>
                            Sources sustainably produced fur<br/>
                            Sources sustainably produced wool<br/>
                            Sources sustainably produced down
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>)
}

export default BrandBreakdown;