import React, { useState, Fragment } from 'react';
import  MonestSketch from '../../assets/monest_sketch.jpg'
import  EducateImg from '../../assets/educate.png'
import  EmpowerImg from '../../assets/empower.png'
import '../../styles/HomePage.css';
import * as emailjs from "emailjs-com";
import WindowLogo from '../../assets/window.svg';

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
            <div className = 'About-Us row d-flex'>
                <div className="col-12 d-md-none">
                    <img style = {{marginLeft: '5%'}} className="main_image" src = {MonestSketch} alt = 'browser sketch'></img>
                </div>
                <div className="col-12 col-md-5">
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
                </div>
                <div className="col-12 col-md-6 d-md-flex d-none">
                    <img className="main_image" src = {MonestSketch} alt = 'browser sketch'></img>
                </div>
            </div>

            <div className = 'Goals'>  
                <h1 style = {{marginTop: '3%'}} >Our Goal</h1>
            </div>
            <div style = {{marginLeft: '3%'}} className = 'Goal-Positioning row'>
                <div className = 'Goal-Panel col-10 col-sm-5 '>
                    <img style = {{marginTop:'8%'}} src = {EducateImg}></img>
                    <h1 style = {{marginLeft:'3%'}}>Educate</h1>
                    <p style = {{ marginLeft:'3%'}}>consumers on the social and environmental impacts of leading brands across a variety of industries. </p>
                </div>
                <div className = 'Goal-Panel col-10 col-sm-5 ml-sm-2'>
                    <img style = {{marginTop:'8%'}} src = {EmpowerImg}></img>
                    <h1 style = {{marginLeft:'3%'}}>Empower</h1>
                    <p style = {{marginLeft:'3%'}}>consumers to vote with their dollars, and support brands with values that align to their own.</p>
                </div>
            </div>
                {/* sorry i got lazy with positioning */}
                <br></br><br></br><br></br><br></br><br></br>
            <div className = 'Video d-flex justify-content-center'>
                <div className="embed-responsive embed-responsive-21by9" style={{width:600,height:400}}>
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                </div>
            </div>
            <div className="sign_up_section mt-5">
                <div className="d-flex justify-content-center"><p className="window_header_text">Make your purchases more purposeful</p></div>
                <div className="row ">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img src={WindowLogo} className="window_logo"/>
                    </div>
                    <div className="col-12 col-md-6">
                            <p className="text_window">We help empower you to hold<br/> corporations to higher ethical<br/> standards. Understand and <br/>compare brands’ impact at a <br/>glance with Monest
                            </p>
                            <p className="sign_up_text">Join our Chrome extension waitlist</p>
                            <form className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">
                                    <label for="email" className="sr-only">Email</label>
                                    <input type="email" className="form-control input_sign_up" id="email" placeholder="Email"/>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 sign_up_button">Sign Up</button>
                                </form>
                    </div>
                </div>
            </div>
        </Fragment>)
}

export default HomePage;