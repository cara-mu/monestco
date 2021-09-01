import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import "../styles/PoliticalAssociationChart.css";

export default function Chart(props) {
    console.log(props.data);
    return (
      <div className="chart-container">
        <div className="chart">
          <BarChart width={625} height={191} data={props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Democrats" fill="#2D5DA6" barSize={12} />
              <Bar dataKey="Republicans" fill="#DB4949" barSize={12}/>
          </BarChart>
        </div>
      </div>
    );
}