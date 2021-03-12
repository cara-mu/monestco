import React, { useState, Fragment } from 'react';
import  MonestSketch from '../../assets/monest_sketch.jpg'
import  EducateImg from '../../assets/educate.png'
import  EmpowerImg from '../../assets/empower.png'
import '../../styles/HomePage.css';
import * as emailjs from "emailjs-com";

function HomePage(){
    function sendEmail(e) {
        const btn = document.getElementById('button');

        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sent!';

        const serviceID = 'service_00bwmmz';
        const templateID = 'template_17sev0y';

        emailjs.sendForm(serviceID, templateID, this, 'user_43WxN5WcAiBEEo05BK73t');
        });
    }

        return(
        <Fragment>
            <div className = 'About-Us'>
                <div style = {{marginTop: '5%', marginLeft: '8%'}} className = 'About-Us-Positioning'>
                <h1>Monest provides consumers <br></br> 
                    with the information they <br></br>
                    need to make responsible <br></br>
                    purchasing decisions.</h1>
                    <br></br>
                    <form id="form" onClick = {sendEmail}>
                        <div class="field">
                            <label for="fetched_email">Join our Chrome Extension waitlist!</label>
                            <br></br>
                            <input type="text" name="fetched_email" id="fetched_email"></input>
                            <input type="submit" id="button" value="Sign Up" ></input>
                        </div>
                    </form>
                </div>
                <img style = {{marginLeft: '10%'}} src = {MonestSketch} alt = 'browser sketch'></img>
               
            </div>

            <div className = 'Goals'>  
                <h1 style = {{marginTop: '3%'}} >Our Goal</h1></div>
                <div style = {{marginLeft: '3%'}} className = 'Goal-Positioning'>
                    <div style = {{marginTop: '3%', marginLeft: '-2%'}} className = 'Goal-Panel'>
                        <img style = {{marginTop:'8%'}} src = {EducateImg}></img>
                        <h1 style = {{marginLeft:'3%'}}>Educate</h1>
                        <p style = {{ marginLeft:'3%'}}>consumers on the social and environmental impacts of leading brands across a variety of industries. </p>
                    </div>
                    <div style = {{marginTop: '3%', marginLeft: '3%'}} className = 'Goal-Panel'>
                        <img style = {{marginTop:'8%'}} src = {EmpowerImg}></img>
                        <h1 style = {{marginLeft:'3%'}}>Empower</h1>
                        <p style = {{marginLeft:'3%'}}>consumers to vote with their dollars, and support brands with values that align to their own.</p>
                    </div>
                </div>
                {/* sorry i got lazy with positioning */}
                <br></br><br></br><br></br><br></br><br></br>
            <div className = 'Video'>
                <h1>video</h1>
            </div>
        </Fragment>)
}

export default HomePage;