import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts';
import "../styles/PoliticalAssociationChart.css";

export default function Chart(props) {
    console.log(props.data);
    return (
      <div className="chart-container">
        <div className="chart">
          <BarChart width={625} height={291} data={props.data}>
              props.data.map((entry, index) => {
                <Cell onMouseOver={onMouseOverCell}/>
              })
              <CartesianGrid strokeDasharray="1" />
              <XAxis dataKey="name" />
              <YAxis />
              <Legend layout="vertical"/>
              <Bar dataKey="Democrats" fill="#2D5DA6" barSize={12} />
              <Bar dataKey="Republicans" fill="#DB4949" barSize={12}/>
          </BarChart>
        </div>
      </div>
    );

    function onMouseOverCell(event) {
      console.log(1);
    }
}