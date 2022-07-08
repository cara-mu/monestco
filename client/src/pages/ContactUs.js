import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/ContactUs.css";

const useStyles = makeStyles((theme) => ({

    siteContainer: {
        maxWidth: "1920px",
        margin: "auto",
        background:"#F5F4F2 !important",
        position:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        margin:"0 auto",
        marginTop:"",
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
    subTitle:{
        marginTop:"8px",
        font:"DM Sans",
        fontStyle:"normal",
        color:"#26385A",
        fontSize:"24px",
        lineHeight:"31px",
        height:"64px",
    },

    formContainer:{
        marginLeft:"auto",
        marginRight: "auto",
        textAlign:"left",
        width:"670px"
    },
    headLabel:{
        marginTop:"66px",
        font:"DM Sans",
        fontStyle:"normal",
        color:"#26385A",
        fontSize:"24px",
        lineHeight:"31px",
        height:"25px",
    },
    // smallTextBox:{
    //     border: "1px solid #BDBDBD",
    //     boxSizing: "border-box",
    //     borderRadius: "18px",
    //     background:"#F9F9F9",
    //     width: "670px",
    //     height:"58px",
    //     padding: "6px 15px",
    // },
    normalLabel:{
        marginTop:"46px",
        font:"DM Sans",
        fontStyle:"normal",
        color:"#26385A",
        fontSize:"24px",
        lineHeight:"31px",
        height:"25px",
    },
    // bigTextBox:{
    //     border: "1px solid #BDBDBD",
    //     boxSizing: "border-box",
    //     borderRadius: "18px",
    //     /* width: 50%; */
    //     background:"#F9F9F9",
    //     width: "670px",
    //     padding: "6px 15px",
    //     height:"273px",
    //     resize:"none",
    // }
    spacing:{
        lineHeight:"111px"
    }


}));

function ContactUs() {
    const classes = useStyles();
    return (
        <div className={classes.siteContainer}>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <div className={classes.title}>Get in touch with us.</div>
                    <div className={classes.subTitle}>Feel free to contact us if you have any questions or concerns. We’d love to hear from you!</div>
                    <label className={classes.headLabel}>Your Name</label>
                    <br/>
                    <input type="text" className="smallTextBox" placeholder="Cleo Price"></input>
                    <br/>
                    <label className={classes.normalLabel}>Email</label>
                    <br/>
                    <input type="text" className="smallTextBox" placeholder="cleoprice@monest.co"></input>
                    <br/>
                    <label className={classes.normalLabel}>Message</label>
                    <br/>
                    <textarea type="textarea" className="bigTextBox"placeholder="I would like to talk about..."></textarea>
                    <div className="send-button-formatter">
                    <button type="submit" className="sendButton">Send</button>
                    </div>
                </form>

                <h1 classname={classes.spacing}></h1>
            </div>
        </div>
    );
}

export default ContactUs