import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/Comparison.css';

import CompareSearch from '../components/CompareSearch';

function Comparison(props) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div style={{marginTop: '15%', marginLeft: '30%'}}>
                        <p id="brands">Brands</p>
                        <p style={{marginBottom: '8%', color: '#4F4F4F'}}>Type or click the brands that you want to learn more</p>
                        <CompareSearch />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div style={{marginTop: '7%', marginLeft: '23%'}}>
                        Apparel Comparison Chart
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Comparison;

