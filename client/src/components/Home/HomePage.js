import React, { useState, Fragment } from 'react';
import  MonestSketch from '../../assets/monest_sketch.jpg'
import '../../styles/HomePage.css';

function HomePage(){
    return(
        <Fragment>
            <div className = 'About-Us'>
                <h1>Monest provides consumers <br></br> 
                with the information they <br></br>
                need to make responsible <br></br>
                purchasing decisions.</h1>
                <img src = {MonestSketch} alt = "browser sketch"/>
            </div>

            <div className = 'Goals'>  
                <h1>Our Goal</h1>
                
            </div>
        </Fragment>
    );
}

export default HomePage;