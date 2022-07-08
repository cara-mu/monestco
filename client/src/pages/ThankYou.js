import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        marginTop:"265px",
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
    thankYouPageDivider:{
        height:"364px"
    },
    

}));

function ThankYou() {
    const classes = useStyles();
    return (
        <div className={classes.siteContainer}>
            <div className={classes.formContainer}>
                    <div className = "title">Thank you for contacting us.</div>
                    <br/>
                    <div className = "subTitle">We’ll get back to you as soon as possible!</div>
                    <br/>
                    <form action='/'>
                        <button type="submit" className="sendButton">Go back to home page</button>
                    </form>

            </div>
            <div className={classes.thankYouPageDivider}></div>
        </div>
            
    );
}

export default ThankYou