import { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts';
import "../styles/PoliticalAssociationChart.css";
import axios from 'axios';
import Citation from "./Citation.js";
import { fontWeight } from '@material-ui/system';

import { getTickValues, getNiceTickValues } from 'recharts-scale';

export default function Chart(props) {

    const [detailedInfo, setDetailedInfo] = useState({});
    const [ticks, setTicks] = useState([]);

    useEffect(() => {
      axios.get(`/api/v1/pa/detailed?Company=${props.company}`).then((response) => {
        setDetailedInfo(response.data);
        // let maxDonation = getMaxDonation();
        // console.log(maxDonation);
        // let tickValues = getTickValues([0, 300000], 7);
        // console.log(tickValues);
        // setTicks(tickValues);
      });
    }, [])

    return (
      <div className="chart-container">
        <div className="chart">
          <BarChart width={625} height={291} data={detailedInfo.data}>
            <CartesianGrid vertical={false} stroke={"#ABD4B7"} />
            <XAxis
              dataKey="year"
              axisLine={false}
              tick={{
                fontSize: "16px",
                fontFamily: "PT Sans",
                fontWeight: "normal"
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              className="yaxis"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: "12px",
                fontFamily: "PT Sans",
                fontWeight: "normal"
              }}
              tickCount={7}
              type="number"
              domain={[0, 300000]}
            />
            {detailedInfo.citations ? (
              detailedInfo.citations.map(citation => {
                return (
                  <div className="citation">
                    {" "}
                    {generateCitationString(citation)}{" "}
                  </div>
                );
              })
            ) : (
              <p></p>
            )}
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ paddingLeft: "36px" }}
              formatter={(value, _) => {return <span 
              style={{ color: '#000000', 
                       font: 'PT Sans', 
                       fontWeight: 'normal',
                       fontSize: '12px', 
                    }}>{value}</span>}} 
            />
            <Bar name="Democrats" dataKey="dem" fill="#2D5DA6" barSize={12} />
            <Bar name="Republicans" dataKey="rep" fill="#DB4949" barSize={12} />
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

    function getMaxDonation() {
      let max = 0;
      detailedInfo.data.map((dataPoint) => {
        if (dataPoint.dem > max) {
          max = dataPoint.dem;
        }

        if (dataPoint.rep > max) {
          max = dataPoint.rep;
        }
      })
      return max;
    }


    //return {tickCount, maxValue}
    function getYAxisTickParameters() {

    }
}

