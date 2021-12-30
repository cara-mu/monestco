import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillCaretDown } from 'react-icons/ai';
import "../styles/FAQ.css";

const useStyles = makeStyles((theme) => ({
    dropdown: {
        boxShadow: "none"
    },

    siteContainer: {
        maxWidth: "1146px",
        margin: "auto",
    },

    title: {
        maxWidth: "1146px",
        height: "28px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "28px",
        color: "#3D3E3F",
        marginTop: "97px",
    },

    decorativeLine: {
        borderBottom: "solid 1px #BDBDBD",
        width: "100%",
        /* display: inline; */
        /* height: 6px;
        padding-bottom: 1%; */
    },

    titleSub: {
        height: "28px",
        maxWidth: "1146px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "28px",
        color: "#3D3E3F",
        paddingTop: "21px",
        paddingBottom: "108px",
    },

    question: {
        height: "40px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "40px",
        paddingBottom: "0px",
        color: "#000000",

    },

    content: {
        maxWidth: "1045px",
        height: "192px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "32px",
        color: "#3D3E3F",
    },

    questionGroup: {
        maxWidth: "1146px"
    },

    FAQBottomDivider:{
        height: "184px"
    }

}));

function FAQ() {
    const classes = useStyles();
    return (
        <div className={classes.siteContainer}>
            <div className={classes.title}>
                Frequently Asked Questions
            </div>
            <div className={classes.titleSub}>
                Need some help? Our most frequently asked questions are available to support you.
            </div>
            <div class={classes.questionGroup}>
                <Accordion className={classes.dropdown} defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>How does Monest decide which brands to rate?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            Monest assesses brands at the forefront of the apparel industry with the power and influence to become catalysts for social and environmental change. Consumer-facing brands are selected based on sector indices and benchmarks, supplemented by top performing lists in the fashion sector and their respective markets. Factors such as market capitalization, size, and North American recognition are prioritized in the selection process.
                            We are continuously trying to expand and update our list of brands. If there is a brand you would like to see us rate, please fill out the form here (link).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>How are brands rated?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            Through a rigorous process, brands are rated against their industry-specific Research Methodology. Each industry’s research methodology varies in content, each with over 360 criteria and 1,200 scoring metrics grounded in academic research on industry best practices and internationally recognized standards (ILO, GRI, SASB, OECD, UNSDGs etc.)
                            <h1></h1>
                            Our Apparel Methodology was created in 2020 and will be reviewed annually to ensure that it continues to reflect the most important issues and best practices within the industry. We are in the process of publishing our entire methodology to maintain transparency, please visit our Research Methodology page to learn more.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>How can I understand why a brand gained or lost scores?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            To better understand the areas a brand gained or lost scores on, please visit the “Detailed Breakdown” tab on brand pages.
                            <h1></h1>
                            The comparison chart provides high-level summaries of a brand’s actions which do not capture the big picture. Expanding the detailed breakdown rows will lead you to criteria organized similar to the comparison chart, but in much more detail with the associated citations. The detailed explanations will provide insight on the company decisions that have led to determining their scores.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>How do I find out more about the data you used?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            You can find out more about the information we leveraged through the following ways
                            <h1></h1>
                            1. Visit the “Detailed Breakdown” page through on the brand pages and expand the issues to find the citations we referenced for each action.
                            <h1></h1>
                            2. Visit the “Information Sources” tab on our Research Methodology page to access some of our most frequently used external data sources.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>Why does Monest rate certain “bad” brands so high?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            Our scoring does not reflect the nature of each brand’s business model, instead purely focused on assessing company-specific policies, processes, supply chain practices, goals and initiatives to determine the score. The research methodology we employ is very explicit and detailed to remove potential bias in qualitative research.
                            <h1></h1>
                            However, we believe it is important to acknowledge the detrimental impacts of fast fashion brands and excessive consumption. To decrease demand for the production of new clothes, we strongly encourage consumers to follow best practices by reducing consumption and shopping second hand when possible.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>Why do the colors not match the scoring on the comparison chart?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            The colours are based on the industry-wide performance instead of the company-specific scores.
                            <h1></h1>
                            For example, if a brand receives a score of 20/100 in a criteria most brands score 10/100 in, it will be green. For another criteria, if a brand receives 20/100 but the industry average is 50/100, the brand is considered to be underperforming relative to its industry peers and will instead be orange.

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}> I think a score is wrong or I have information that is missing from the research. Where can I send it? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            We reassess our scores on an annual basis to stay updated, but would love to incorporate any new data you may have found in the meantime. Please submit all relevant information and sources through our feedback portal.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
                <Accordion className={classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>Can I make requests for brand evaluations?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.content}>
                            We are continuously trying to expand and update our list of brands. If there is a brand you would like to see us rate, please fill out the form here and we will try our best to get to it!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.decorativeLine}></div>
            </div>
            <div className={classes.FAQBottomDivider}></div>
        </div>
    );
}

export default FAQ