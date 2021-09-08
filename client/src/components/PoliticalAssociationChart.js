import { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts';
import "../styles/PoliticalAssociationChart.css";
import axios from 'axios';

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
              <XAxis dataKey="year" />
              <YAxis />
              <Legend layout="vertical"/>
              <Bar name="Democrats" dataKey="dem" fill="#2D5DA6" barSize={12} />
              <Bar name="Republicans" dataKey="rep" fill="#DB4949" barSize={12}/>
          </BarChart>
        </div>
      </div>
    );
}