import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/AboutUs.css";


const useStyles = makeStyles((theme) => ({


    siteContainer: {
        maxWidth: "1146px",
        margin: "auto",
    },

    title: {
        maxWidth: "1146px",
        height: "32px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "28px",
        color: "#26385A",
        marginTop: "97px",
        marginBottom: "40px",
    },
}));

function AboutUs() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.siteContainer}>
                <div className={classes.title}>
                    About Us
                </div>
                <div className="smallTextFirst">
                    Monest is a platform that analyzes the social and environmental impacts of brands benchmarked to industry standards. We believe that by educating and empowering consumers to vote with their dollars, companies will be held to higher ethical standards.
                </div>
                <div id="story">
                    Story
                </div>
                <div className="decorativeLine"/>
                <div className="bigText">
                    Monest aims to best inform consumers in making their purchasing decisions. 
                </div>
                <div className="smallText">
                    While our scoring does not reflect the nature of each brand’s business model, we believe it is important to acknowledge the detrimental impacts of fast fashion brands and excessive consumption.  Inherent to the fast fashion business model, the pressure to reduce costs and speed up production time results in cutting corners at the expense of workers and the environment. To decrease demand for the production of new clothes, we strongly encourage consumers to follow best practices by reducing consumption and shopping second hand when possible. 
                </div>
                <div id="mission">
                    Mission
                </div>
                <div className="decorativeLine"/>
                <div className="smallText">
                    Our goal is to educate and equip consumers with the information they need to leverage their purchasing power and ultimately hold corporations to higher ethical standards.
                    <div className="textDivider"/>
                    Monest bridges the current gap between corporate responsibility and consumer education by:
                </div>
                <ul className="textList">
                    <li className="listItem">Increasing awareness on the many unseen issues within a company’s operations and supply chain.</li>
                    <li className="listItem">Aggregating, distilling, and analyzing all the information available to provide brand specific data and actionable next steps.</li>
                </ul>
            </div>
            <form className="emailContainer">
                    <div className="bigTextLast">
                        We help empower you to hold corporations to higher ethical standards. Understand and compare brands’ impact at a glance with Monest.
                    </div>
                    <div className="inputContainer">
                        <label className="joinText">Join our Chrome extension waitlist!</label>
                        <br/>
                        <input type="text" className="smallEmailTextBox" placeholder="cleoprice@monest.co"></input>
                        <button type="submit" className="emailSignUpButton">Sign Up</button>
                    </div>
                </form>
        </div>
    );
}

export default AboutUs