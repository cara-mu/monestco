import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/Comparison.css';
import Hidden from '@material-ui/core/Hidden';
import CompareTool from '../components/CompareTool';

import CompareSearch from '../components/CompareSearch';

function Comparison(props) {
    return (
        <div>
            <Grid container>
                {/* <Grid item xs={4} style={{border: 'solid'}}> */}
                <Grid style={{marginLeft: '6%', paddingTop: '3%'}} md={2}>
                    {/* <Col style={{marginTop: '25%', marginLeft: '50%', border: 'solid', paddingRight: '20%'}}> */}
                    <Hidden mdUp>
                        <div style={{textAlign: 'center', marginTop: '14.5%', marginBottom: '2%', paddingLeft: '6%'}}>
                            <p id ="apparel">Apparel Comparison Chart</p>
                            <p>The percentages represent the score brands received based on our methodology.</p>
                            <p>The higher the percentage, the better the brand is at addressing the issue.</p>
                            <p id="colors">The colors represent the brand's performance benchmarked to industry standards.</p>
                        </div>
                        <span id="abvavg"></span>
                        <span className="avgtext"><span style={{fontWeight: 'bold'}}>Above</span> Average</span> 
                        <span id="avg"></span>
                        <span className="avgtext">Average</span>
                        <span id="blwavg"></span>
                        <span className="avgtext"><span style={{fontWeight: 'bold'}}>Below</span> Average</span>
                    </Hidden>
                    
                    <div className="d-flex flex-column justify-content-center ml-5 mr-5">
                        <p id="brands">Brands</p>
                        <p >Type or click the brands that you want to learn more about</p>
                        <CompareSearch />
                    </div>
                    {/* </Col> */}
                </Grid>
                {/* </Grid> */}
                {/* <Grid item xs={8} style={{border: 'solid'}}> */}
                <Grid style={{marginLeft: '5%', width: '70%', border: ''}} md={8} xs={12}>
                    <Hidden smDown>
                        <div style={{textAlign: 'center', marginTop: '2.5%', marginBottom: '2%', paddingLeft: '6%'}}>
                            <p id ="apparel">Apparel Comparison Chart</p>
                            <p style={{lineHeight: '10px'}}>The percentages represent the score brands received based on our methodology.</p>
                            <p>The higher the percentage, the better the brand is at addressing the issue.</p>
                            <p id="colors">The colors represent the brand's performance benchmarked to industry standards.</p>
                        </div>
                        <span id="abvavg"></span>
                        <span className="avgtext"><span style={{fontWeight: 'bold'}}>Above</span> Average</span> 
                        <span id="avg"></span>
                        <span className="avgtext">Average</span>
                        <span id="blwavg"></span>
                        <span className="avgtext"><span style={{fontWeight: 'bold'}}>Below</span> Average</span>
                    </Hidden>
                {/* </Grid> */}
                    <CompareTool />
                </Grid>
            </Grid>
        </div>
    )
}

export default Comparison;

