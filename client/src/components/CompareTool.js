import React from 'react';
import '../styles/Comparison.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';

class CompareTool extends React.Component {
    render() {
        return(
            <div className="apparelsearch" style={{marginTop: '2.5%'}}>
                <span style={{marginLeft: '19.5%'}}>
                    <input placeholder="Type the brand" />
                    <input placeholder="Type the brand" />
                    <input placeholder="Type the brand" />
                </span>
                <Grid container className='squarecontainer'>
                    <p style={{marginRight: '2.5%', color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>DIVERSITY & INCLUSION</p>
                    <div className='square'></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className="circle">
                        <i class="arrowdown"></i>
                    </div>
                </Grid>
                <Grid container className='squarecontainer' style={{marginTop: '8%'}}>
                    <p style={{marginRight: '3%', color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>WORKER EXPLOITATION</p>
                    <div className='square'></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className="circle">
                        <i class="arrowdown"></i>
                    </div>
                </Grid>
                <Grid container className='squarecontainer' style={{marginTop: '8%'}}>
                <p style={{marginRight: '5%', color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>WASTE & POLLUTION</p>
                    <div className='square'></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className="circle">
                        <i class="arrowdown"></i>
                    </div>
                </Grid>
                <Grid container className='squarecontainer' style={{marginTop: '8%'}}>
                <p style={{marginRight: '1.5%', color: '#3D3E3F', fontWeight: 550, paddingTop: '2%'}}>SUSTAINABLE MATERIALS</p>
                    <div className='square'></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className='square' style={{marginLeft: '2%'}}></div>
                    <div className="circle">
                        <i class="arrowdown"></i>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default CompareTool;
