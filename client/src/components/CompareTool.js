import React from 'react';
import '../styles/Comparison.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));


function CompareTool() {
    const classes = useStyles();

        return(
            <div className="apparelsearch" style={{marginTop: '2.5%'}}>
                <span className="input_brand_holder">
                    <input placeholder="Type the brand" />
                    <input placeholder="Type the brand" />
                    <input placeholder="Type the brand" className="input_brand"/>
                </span>
                <div className="row mt-5">
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <div className="row">
                                <p className="col-4 col-sm-3 col-md-3 paragraph_header" style={{color: '#3D3E3F', fontWeight: 500}}>DIVERSITY & INCLUSION</p>
                                <div className='square_orange col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_yellow col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_orange d-none d-sm-block col-sm-3 col-md-3'>25/100</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <div className="row inside_row">
                                        <p className="col-4 col-sm-3 col-md-3" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>Discrimination</p>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3' style={{height: '80px'}}></div>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3'></div>
                                        <div className='square_inside_orange d-none d-sm-block col-sm-3 col-md-3'></div>
                                    </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="row pr-5 pl-3">
                                            <p className="col-4 col-sm-3 col-md-3" ></p>
                                            <div className='square_inside_orange_text col-4 col-sm-3 col-md-3'  style={{height: '100px'}}></div>
                                            <div className='square_inside_green_text col-4 col-sm-3 col-md-3'></div>
                                            <div className='square_inside_yellow_text d-none d-sm-block col-sm-3 col-md-3'></div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
                <div className="row mt-5">
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <div className="row">
                                <p className="col-4 col-sm-3 col-md-3 paragraph_header" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>WORKER EXPLOITATION</p>
                                <div className='square_orange col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_yellow col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_orange d-none d-sm-block col-sm-3 col-md-3'>25/100</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <div className="row inside_row">
                                        <p className="col-4 col-sm-3 col-md-3" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>Discrimination</p>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3' style={{height: '80px'}}></div>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3'></div>
                                        <div className='square_inside_orange d-none d-sm-block col-sm-3 col-md-3'></div>
                                    </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="row pr-5 pl-3">
                                            <p className="col-4 col-sm-3 col-md-3" ></p>
                                            <div className='square_inside_orange_text col-4 col-sm-3 col-md-3'  style={{height: '100px'}}></div>
                                            <div className='square_inside_green_text col-4 col-sm-3 col-md-3'></div>
                                            <div className='square_inside_yellow_text d-none d-sm-block col-sm-3 col-md-3'></div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
                <div className="row mt-5">
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <div className="row">
                                <p className="col-4 col-sm-3 col-md-3 paragraph_header" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>WASTE & POLLUTION</p>
                                <div className='square_orange col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_yellow col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_orange d-none d-sm-block col-sm-3 col-md-3'>25/100</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <div className="row inside_row">
                                        <p className="col-4 col-sm-3 col-md-3" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>Discrimination</p>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3' style={{height: '80px'}}></div>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3'></div>
                                        <div className='square_inside_orange d-none d-sm-block col-sm-3 col-md-3'></div>
                                    </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="row pr-5 pl-3">
                                            <p className="col-4 col-sm-3 col-md-3" ></p>
                                            <div className='square_inside_orange_text col-4 col-sm-3 col-md-3'  style={{height: '100px'}}></div>
                                            <div className='square_inside_green_text col-4 col-sm-3 col-md-3'></div>
                                            <div className='square_inside_yellow_text d-none d-sm-block col-sm-3 col-md-3'></div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
                <div className="row mt-5">
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <div className="row">
                                <p className="col-4 col-sm-3 col-md-3 paragraph_header" style={{color: '#3D3E3F', fontWeight: 550}}>SUSTAINABLE MATERIALS</p>
                                <div className='square_orange col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_yellow col-4 col-sm-3 col-md-3'>25/100</div>
                                <div className='square_orange d-none d-sm-block col-sm-3 col-md-3'>25/100</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <div className="row inside_row">
                                        <p className="col-4 col-sm-3 col-md-3" style={{color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>Discrimination</p>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3' style={{height: '80px'}}></div>
                                        <div className='square_inside_green col-4 col-sm-3 col-md-3'></div>
                                        <div className='square_inside_orange d-none d-sm-block col-sm-3 col-md-3'></div>
                                    </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="row pr-5 pl-3">
                                            <p className="col-4 col-sm-3 col-md-3" ></p>
                                            <div className='square_inside_orange_text col-4 col-sm-3 col-md-3'  style={{height: '100px'}}></div>
                                            <div className='square_inside_green_text col-4 col-sm-3 col-md-3'></div>
                                            <div className='square_inside_yellow_text d-none d-sm-block col-sm-3 col-md-3'></div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
            </div>
        )
}

export default CompareTool;
