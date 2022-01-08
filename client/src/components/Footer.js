import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillCaretDown } from 'react-icons/ai';
import logo from '../assets/logo_footer.png';
import logoFacebook from '../assets/footer_facebook.svg';
import logoTwitter from '../assets/footer_twitter.svg';
import logoInstagram from '../assets/footer_instagram.svg';
import logoTiktok from '../assets/footer_tiktok.svg';
import logoLinkedin from '../assets/footer_linkedin.svg';
import circleC from '../assets/circle_c.svg';

import "../styles/Footer.css";


const useStyles = makeStyles((theme) => ({

    siteContainer: {
        maxWidth: "1920px",
        margin: "auto",
        backgroundColor: "#303F67",
        alignItems: "center",
    },


}));

function Footer() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.siteContainer}>
                <div className="top-list">
                <div className = "left-block">
                        <img className="logo-image" src={logo}></img>
                        <ul className="social-media-list">
                            <li className="footer-social-media-list-item">
                                <img src={logoFacebook}></img>
                            </li>
                            <li className="footer-social-media-list-item">
                                <img src={logoTwitter}></img>
                            </li>
                            <li className="footer-social-media-list-item">
                                <img src={logoInstagram}></img>
                            </li>
                            <li className="footer-social-media-list-item">
                                <img src={logoTiktok}></img>
                            </li>
                            <li className="footer-social-media-list-item">
                                <img src={logoLinkedin}></img>
                            </li>
                        </ul>
                        <ul className="site-list">
                            <li className="list-item">About Us</li>
                            <li className="list-item">Contact</li>
                            <li className="list-item">FAQ</li>
                            <li className="list-item">Privacy Policy</li>
                            <li className="list-item">Donate</li>
                            <li className="list-item">Terms & Conditions</li>
                        </ul>
                        </div>
                <div className = "right-block">
                    <div className = "footer-sign-up-text">Stay updated on our newest features!</div>
                    <form className = "footer-sign-up-form">
                        <input type="text" className = "footer-sign-up-text-input" placeholder="Your email address" ></input>
                        <div className = "footer-sign-up-submit-input-div-styling">
                            <button type="submit" className = "footer-sign-up-submit-input">Sign Up</button>
                        </div>
                    </form>
                </div>
                    </div>
                    <div className="footer-social-media">
                        <div className="footer-rights">
                            <img src={circleC} ></img>
                            <div className="footer-rights-text"> &ensp; 2021 Monest All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer