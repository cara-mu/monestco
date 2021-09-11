import { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts';
import "../styles/PoliticalAssociationChart.css";
import axios from 'axios';
import Citation from "./Citation.js";

export default function Chart(props) {

    const [detailedInfo, setDetailedInfo] = useState({});

    useEffect(() => {
      axios.get(`/api/v1/pa/detailed?Company=${props.company}`).then((response) => {
        setDetailedInfo(response.data);
      });
    }, [])
   
    return (
        <div className="chart-container">
          <div className="chart">
            <BarChart width={625} height={291} data={detailedInfo.data}>
                <CartesianGrid strokeDasharray="1" />
                <XAxis dataKey="year">
                
                </XAxis>
                <YAxis tickFormatter={DataFormatter} className="yaxis" />
                { detailedInfo.citations? 
                  detailedInfo.citations.map((citation) => {
                  return <div className="citation"> generateCitationString(citation) </div>    
                }) : <p></p> }
                <Legend layout="vertical"/>
                <Bar name="Democrats" dataKey="dem" fill="#2D5DA6" barSize={12} />
                <Bar name="Republicans" dataKey="rep" fill="#DB4949" barSize={12}/>
            </BarChart>
          </div>
        </div>
    );

    function DataFormatter(number) {
      return "$ " + number / 1000 + "k";
    }

    function generateCitationString({title, author, publisher, date, pages, url}) {
          return `${title}, ${author && <span>,</span>} ${publisher}, ${date && <span>,</span>} ${pages}, ${url}`
    }
}

