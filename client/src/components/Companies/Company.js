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

class Company extends React.Component {
    
    constructor(){
        super()
        this.state = {
            showFact : false
        }
        this.toggleFact = this.toggleFact.bind(this)
    }

    toggleFact() {
        this.setState({
            showFact : !this.state.showFact
        })
    }
    
    render(){
    return(
        <div className = 'Layout'>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <div className = 'Left-Menu' style= {{marginTop: '45%', marginLeft: '30%'}}>
                {/*<img src={'../../assets/' + companyName + '.png'} />
                    <h1>{companyName}</h1>*/}
                    <p style={{marginBottom: '8%', color: '#4F4F4F'}}>Placeholder for company information</p>
                    <Link>Detailed Breakdown</Link>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div className = 'Right-Menu' style={{marginTop: '7%', marginLeft: '0%'}}>
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
                    Company Facts
                    <div className = 'Decorative-Line'></div>
                    <div className = 'Fun-Fact'>This is a fun fact
                        <img onClick = {this.toggleFact} style = {{marginLeft : '75%'}} src = {DropdownButton}/>
                    </div>
                    {
                        this.state.showFact ? <div className = 'Fun-Fact-Dropdown'> Insert company fact</div> : null
                    }
                    <div className = 'FunFact-Decorative-Line'></div>
                    <div className = 'Fun-Fact'>This is a fun fact
                        <img onClick = {this.toggleFact} style = {{marginLeft : '75%'}} src = {DropdownButton}/>
                    </div>
                    {
                        this.state.showFact ? <div className = 'Fun-Fact-Dropdown'> Insert company fact</div> : null
                    }
                    <div className = 'FunFact-Decorative-Line'></div>
                    <div className = 'Fun-Fact'>This is a fun fact
                        <img onClick = {this.toggleFact} style = {{marginLeft : '75%'}} src = {DropdownButton}/>
                    </div>
                    {
                        this.state.showFact ? <div className = 'Fun-Fact-Dropdown'> Insert company fact</div> : null
                    }
                    <div className = 'FunFact-Decorative-Line'></div>
                    <div className = 'Fun-Fact'>This is a fun fact
                        <img onClick = {this.toggleFact} style = {{marginLeft : '75%'}} src = {DropdownButton}/>
                    </div>
                    {
                        this.state.showFact ? <div className = 'Fun-Fact-Dropdown'> Insert company fact</div> : null
                    }
                    <div className = 'FunFact-Decorative-Line'></div>

                    <div className = 'In-The-News' style={{marginTop: '7%', marginLeft: '-1.5%'}}>
                        In The News
                        <div className = 'Decorative-Line'></div>
                        <Container>
                            <Row>
                                <Col style={{marginTop: '5%'}}>
                                    <img src = {NewsPlaceHolder}/>
                                    <div style={{marginTop: '3%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </Col>
                                <Col style={{marginTop: '5%'}}>
                                    <img src = {NewsPlaceHolder}/>
                                    <div style={{marginTop: '3%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{marginTop: '5%'}}>
                                    <img src = {NewsPlaceHolder}/>
                                    <div style={{marginTop: '3%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </Col>
                                <Col style={{marginTop: '5%'}}>
                                    <img src = {NewsPlaceHolder}/>
                                    <div style={{marginTop: '3%'}} className = 'News-Description'>
                                        <h1>Title</h1>
                                        <p>info about news</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            </div>
            </Grid>
        </Grid>
    </div>
    );
    }
}

export default Company;
