import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/Comparison.css';
import CompareTool from '../components/CompareTool';

import CompareSearch from '../components/CompareSearch';

function Comparison(props) {
    return (
        <div>
            <Grid container>
                {/* <Grid item xs={4} style={{border: 'solid'}}> */}
                <Row style={{marginLeft: '6%', width: '17%', paddingTop: '3%'}}>
                    {/* <Col style={{marginTop: '25%', marginLeft: '50%', border: 'solid', paddingRight: '20%'}}> */}
                    <span style={{marginTop: ''}}>
                        <p id="brands" style={{marginTop: '43%'}}>Brands</p>
                        <p style={{marginBottom: '8%', color: '#4F4F4F', lineHeight: 1.7, fontSize: '14px'}}>Type or click the brands that you want to learn more about</p>
                        <CompareSearch />
                    </span>
                    {/* </Col> */}
                </Row>
                {/* </Grid> */}
                {/* <Grid item xs={8} style={{border: 'solid'}}> */}
                <Row style={{marginLeft: '5%', width: '70%', border: ''}}>
                    <div style={{textAlign: 'center', marginTop: '14.5%', marginBottom: '2%', paddingLeft: '6%'}}>
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
                {/* </Grid> */}
                    <CompareTool />
                </Row>
            </Grid>
        </div>
    )
}

export default Comparison;

