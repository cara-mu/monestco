import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillCaretDown } from 'react-icons/ai';
import "../styles/ThankYou.css";

const useStyles = makeStyles((theme) => ({

    siteContainer: {
        maxWidth: "1920px",
        margin: "auto",
        background:"#F5F4F2 !important",
        position:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        marginLeft:"277",
    },
    text:{

    },
    title:{
        marginTop:"105px",
        font:"DM Sans",
        fontStyle:"normal",
        fontWeight:"bold",
        color:"#26385A",
        fontSize:"34px",
        lineHeight:"44px",
        height:"48px",
    },
    formContainer:{
        marginLeft:"277px",
        marginRight: "auto",
        textAlign:"left",
        width:"670px"
    },
    

}));

function FAQ() {
    const classes = useStyles();
    return (
        <div className={classes.siteContainer}>
            <div className={classes.formContainer}>
                    <div className = "title">Thank you for contacting us.</div>
                    <br/>
                    <div className = "subTitle">We’ll get back to you as soon as possible!</div>
                    <br/>
                    <button type="submit" className="sendButton">Go back to home page</button>
            </div>
        </div>
    );
}

export default FAQ