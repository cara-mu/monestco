import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import '../../styles/Companies.css';
import DiversityImg from '../../assets/diversity.png';
import WorkerExploitImg from '../../assets/workerexploit.png';
import WasteImg from '../../assets/wastepollution.png';
import SustainableImg from '../../assets/sustainable.png';
import DropdownButton from '../../assets/dropdownbutton.png';
import NewsPlaceHolder from '../../assets/news.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalBody from '../ModalBody';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import BrandBox from '../../assets/brand_box.svg';
import BrandLogo from '../../assets/brandBreakdown.svg';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    dropdown:{ 
        width: '90%',
        boxShadow: 'none'
    },
    heading:{
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu:{
        backgroundColor: '#F2F2F2'
    },
    paper: {
      position: 'absolute',
      width: 900,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Company () {
    
    const [showFact,setShowFact] = useState(false);
    

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const toggleFact = ()=> {
        setShowFact(!showFact)
    }
    

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <ModalBody/>
        </div>
      );

    return(
        <div className = 'Layout'>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <div className = 'Left-Menu'>
                {/*<img src={'../../assets/' + companyName + '.png'} />
                    <h1>{companyName}</h1>*/}
                    <img src={BrandLogo}/>
                    
                    <p style={{fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 14,
                            /* identical to box height, or 171% */


                            /* gray 3 */

                            color: "#797979"}}>Subsidiary of Fast Retailing</p>
                    <p style={{marginTop:"5%", color: '#4F4F4F', marginBottom:0}}><b>Uniqlo</b> is a clothing apparel company, which was originally founded in Yamaguchi, Japan. Now it is a global brand with over 1000 stores around the world.</p>
                    <img src={BrandBox} style={{width:"250px",height:100}}/>
                    <p className="brand_inside_text" style={{marginTop:40}}>48/154</p>
                    <Link 
                        style={{
                            fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: 18,
                            textDecorationLineine: "underline",
                            color: "#3D3E3F",
                        }}
                    >Detailed Breakdown</Link>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className = 'Right-Menu' style={{marginTop: '7%', marginLeft: '120px'}}>
                    Brand Performance
                    <div className = 'Decorative-Line'></div>
                
                    <div className = 'Brand-Performance' style={{marginTop: '3%', marginLeft: '-1.5%'}}>
                        <Container>
                            <Row>
                                <Col>
                                    DIVERSITY & INCLUSION
                                    <div className = 'Description'>
                                        Ac mi ac pharetra sagittis quis egestas sed lobortis egestas.
                                        <img src = {DiversityImg}/>
                                    </div>
                                </Col>
                                <Col>
                                    WORKER EXPLOITATION
                                    <div className = 'Description'>
                                        Sit vestibulum interdum et duis non feugiat pellentesque turpis.
                                        <img src = {WorkerExploitImg}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    WASTE & POLLUTION
                                    <div className = 'Description'>
                                        Sed massa proin scelerisque turpis.  Sed massa proin scelerisque turpis.
                                        <img src = {WasteImg}/>
                                    </div>
                                </Col>
                                <Col>
                                    SUSTAINABLE MATERIALS
                                    <div className = 'Description'>
                                        Sit vestibulum interdum et duis non feugiat pellentesque turpis.
                                        <img src = {SustainableImg}/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    Company Initiatives
                    <div className = 'Decorative-Line'></div>

                    <Accordion className = {classes.dropdown}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>This is a fact 1 </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className = {classes.expandMenu}>
                            import from database
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div className = 'FunFact-Decorative-Line'></div>
                    <Accordion className = {classes.dropdown}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>This is a fact 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className = {classes.expandMenu}>
                            import from database
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div className = 'FunFact-Decorative-Line'></div>
                    <Accordion className = {classes.dropdown}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>This is a fact 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className = {classes.expandMenu}>
                            import from database
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div className = 'FunFact-Decorative-Line'></div>
                    <Accordion className = {classes.dropdown}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>This is a fact 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className = {classes.expandMenu}>
                            import from database
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div className = 'FunFact-Decorative-Line'></div>

                    <div className = 'In-The-News' style={{marginTop: '7%', marginLeft: '-1.5%'}}>
                        In The News
                        <div className = 'Decorative-Line'></div>
                        <Container>
                            <div className="row">
                                <div style={{marginTop: '5%'}} className="col-12 col-sm-5 ">
                                    <img src = {NewsPlaceHolder} onClick={handleOpen}/>
                                    <div style={{marginTop: '3%',marginLeft: '5%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </div>
                                <div style={{marginTop: '5%'}} className="col-12 col-sm-5">
                                    <img src = {NewsPlaceHolder} onClick={handleOpen}/>
                                    <div style={{marginTop: '3%',marginLeft: '5%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{marginTop: '5%'}} className="col-12 col-sm-5">
                                    <img src = {NewsPlaceHolder} onClick={handleOpen}/>
                                    <div style={{marginTop: '3%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </div>
                                <div style={{marginTop: '5%'}} className="col-12 col-sm-5">
                                    <img src = {NewsPlaceHolder} onClick={handleOpen}/>
                                    <div style={{marginTop: '3%',marginLeft: '5%' }} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </div>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </Container>
                    </div>
                    <div className="similar_brands">
                        <p>Similar Brands</p>
                        <div className = 'Decorative-Line'></div>
                        <div className="row"> 
                            <div className="col-12 col-lg-5  ml-1 mt-4 brand_box">
                                <p>NIKE</p>
                                <div className="d-flex justify-content-center">
                                    <img src={BrandBox} className="brand_logo"/>
                                </div>
                                <p className="brand_inside_text ml-4">50/154</p>
                            </div>
                            <div className="col-12 col-lg-5  ml-lg-5 mt-4 brand_box">
                                <p>Champion</p>
                                <div className="d-flex justify-content-center">
                                    <img src={BrandBox} className="brand_logo"/>
                                </div>
                                <p className="brand_inside_text ml-4">42/154</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-lg-5  ml-1 mt-4 brand_box">
                                <p>ALDO</p>
                                <div className="d-flex justify-content-center">
                                    <img src={BrandBox} className="brand_logo"/>
                                </div>
                                <p className="brand_inside_text ml-4">49/154</p>
                            </div>
                            <div className="col-12 col-lg-5  ml-lg-5 mt-4 brand_box">
                                <p>Sem id mauris</p>
                                <div className="d-flex justify-content-center">
                                    <img src={BrandBox} className="brand_logo"/>
                                </div>
                                <p className="brand_inside_text ml-4">48/154</p>
                            </div>
                        </div>
                    </div>
            </div>
            </Grid>
        </Grid>
    </div>
    );
}

export default Company;
