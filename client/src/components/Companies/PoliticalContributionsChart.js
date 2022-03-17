import { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts';
import "../../styles/PoliticalAssociationChart.css";
import axios from 'axios';

export default function Chart(props) {

    const [detailedInfo, setDetailedInfo] = useState({});

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
          console.log(active)
          console.log(payload)
        return (
          <div className="custom-tooltip">
            <p className="individual-contribution"> Individual Contribution </p>
            <p className="percentage"> {payload[0].payload['indi']}% </p>
          </div>
        );
      }
    
      return null;
    };
    

    useEffect(() => {
      axios.get(`/api/v1/pa/detailed?company=${props.company}`).then((response) => {
        setDetailedInfo(response.data);
      });
    }, [props.company])

    return (
      <div className="chart-container">
        <div className="chart">
          <BarChart width={625} height={191} data={detailedInfo.data}>
            <Tooltip 
              cursor={{fill: 'transparent'}}
              allowEscapeViewBox={{x: true}}
              content={<CustomTooltip />}
            />
            <CartesianGrid vertical={false} stroke={"#ABD4B7"} />
            <XAxis
              dataKey="year"
              axisLine={false}
              tick={{
                fontSize: "16px",
                fontFamily: "PT Sans",
                fontWeight: "normal",
              }}
              stroke="#000000"
              tickLine={false}
              dy={10}
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
              tickCount={5}
            />
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
        <div className="citations-container">
          {detailedInfo.citation ? (
                detailedInfo.citation.map((citation, i) => {
                  return (
                    <div className="citation">
                      <span> 
                        <span className="citation-index">[{i + 1}]</span>
                          {generateCitationString(citation)}
                          <a href = {citation.url} >{citation.url}</a>
                      </span>
                    </div>
                  );
                })
              ) : (
                <p></p>
          )}
        </div>
      </div>
    );

    function DataFormatter(number) {
      return "$ " + number / 1000 + "k";
    }

    function generateCitationString({title, author, publisher, date, pages, url}) {
        if (author?.length !== 0){
            author = author + ',';
        }

        if (pages.length !== 0) {
            pages = pages + ',';
        }

        let citationString = `${title}, ${author} ${publisher}, ${date}, ${pages}`;
        console.log(citationString);
        return citationString;
    }
}

