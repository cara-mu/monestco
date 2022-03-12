import InfoIcon from "@material-ui/icons/Info";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const style = makeStyles((theme) => ({
    downdrop: {
        width: '90%',
        boxShadow: 'none',
        paddingLeft: '0px',
        paddingRight: '0px'
    },
    
    heading: {
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu: {
        backgroundColor: '#F2F2F2'
    },
}));

const companyFacts = [
    {
        CompanyID: 0,
        Heading: [],
        Summary: [],
        ID: []
    }
]
const companyCit = [
    {
        RelationalID: "",
        Author: "",
        Date: "",
        PublishingGroup: "",
        Title: "",
        Pages: ""
    }
]

export default function Facts(props) {
    const [factCitation, setFactCitation] = useState([]);
    const [showCitation, setShowCitation] = useState(false);
    const [fact, setFact] = React.useState(companyFacts);
    const [state, setState] = useState([])
    const [citations, setCitations] = React.useState(companyCit);

    useEffect(() => {
        axios.get(`/api/v1/facts?company=${props.company}`)
            .then((resp) => {
                let data = companyFacts;
                let headingsarr = [];
                let summaryarr = [];
                let idarr = [];
                resp.data.map(fact => {
                    headingsarr.push(fact['Heading']);
                    summaryarr.push(fact['Summary']);
                    idarr.push(fact['ID']);
                })
                data[0]['Heading'] = headingsarr;
                data[0]['Summary'] = summaryarr;
                data[0]["ID"] = idarr;
                setFact(data);
                setState(resp.data);
            })
      },[props.company]);

      const styles = style();

    const FactCitations = (i) => {
        if (factCitation.length != 0) {
            return <div><i>{JSON.parse(factCitation)[0]["Title"][i]}</i>, {JSON.parse(factCitation)[0]["Author"][i]}{JSON.parse(factCitation)[0]["Author"][i] && <span>,</span>} {JSON.parse(factCitation)[0]["PublishingGroup"][i]}, {JSON.parse(factCitation)[0]["Date"][i]}{JSON.parse(factCitation)[0]["Pages"][i] && <span>,</span>} {JSON.parse(factCitation)[0]["Pages"][i]}</div>
        }
    }

        const showCitations = async () => {
            if (showCitation == false) setShowCitation(true);
            if (showCitation == true) setShowCitation(false);

            let citationsarr = [];
            let relidarr = [];
            let authorarr = [];
            let datearr = [];
            let pubarr = [];
            let titlearr = [];
            let urlarr = [];
            let pagesarr = [];
            if (fact[0]['Heading'].length != 0) {
                Promise.all(Object.entries(fact[0]['Heading']).map((heading, i) =>
                    axios.get('/api/v1/citation/facts',
                        {
                            params: [fact[0]["ID"][i]]
                        }
                    ).then(resp => {
                        if (resp.data.length != 0) {
                            let data = citations;
                            if (citationsarr.length != 0) {
                                relidarr = citationsarr[0][0]["RelationalID"];
                                authorarr = citationsarr[0][0]["Author"];
                                datearr = citationsarr[0][0]["Date"];
                                pubarr = citationsarr[0][0]["PublishingGroup"];
                                titlearr = citationsarr[0][0]["Title"];
                                urlarr = citationsarr[0][0]["URL"];
                                pagesarr = citationsarr[0][0]["Pages"];
                            }
                            resp.data.map(citation => {
                                relidarr.push(citation["RelationalID"]);
                                authorarr.push(citation["Author"]);
                                datearr.push(citation["Date"]);
                                pubarr.push(citation["PublishingGroup"]);
                                titlearr.push(citation["Title"]);
                                urlarr.push(citation["URL"]);
                                pagesarr.push(citation["Pages"]);
                            })
                            data[0]["Author"] = authorarr;
                            data[0]["Date"] = datearr;
                            data[0]["PublishingGroup"] = pubarr;
                            data[0]["Title"] = titlearr;
                            data[0]["RelationalID"] = relidarr;
                            data[0]["URL"] = urlarr;
                            data[0]["Pages"] = pagesarr;
                            citationsarr.push(data);
                        }
                    })
                )).then(() => {
                    setFactCitation(JSON.stringify(citationsarr[0]))
                });
            }
        }
        


        return Object.entries(fact[0]['Heading']).map((heading, i) => {
            return <div>
                <Accordion className={styles.downdrop}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='circle-new' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={styles.heading}>{heading[1]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#F2F2F2' }}>
                        <Typography className={styles.expandMenu}>
                            {fact[0]['Summary'][i]}
                            <div
                                className="Fun-Fact"
                                style={{ width: "100%", fontWeight: "700" }}
                            >
                                Citation
                                <i
                                    onClick={() => showCitations()}
                                    style={{ borderColor: "#323232" }}
                                    className={`Fun-Fact-arrowdown ${showCitation ? "Fun-Fact-arrowdown-rotate" : ""}`}
                                ></i>
                            </div>
                            {showCitation ?
                                <div>
                                    {FactCitations(i)}
                                </div>
                                : null}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className='FunFact-Decorative-Line'></div>
            </div>
        })

    }