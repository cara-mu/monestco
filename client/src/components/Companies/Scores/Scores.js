import React, { useEffect, useState } from "react";
import "../../../styles/Companies.css";
import DiversityImg from "../../../assets/diversity.png";
import WorkerExploitImg from "../../../assets/workerexploit.png";
import WasteImg from "../../../assets/wastepollution.png";
import SustainableImg from "../../../assets/sustainable.png";
import axios from "axios";
import BrandPerformance from "./BrandPerformance";


const companyTotalScores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
}


export default function Scores(props) {
  const [TotalScore, setTotalScore] = React.useState(companyTotalScores);

  useEffect(()=>{
    axios.get('/companyTotalScores', {params: {company : props.company}}).
    then((resp) => {
      let data = TotalScore;
      data['A'] = resp.data[0]["Ascore"];
      data['B'] = resp.data[0]["Bscore"];
      data['C'] = resp.data[0]["Cscore"];
      data['D'] = resp.data[0]["Dscore"];
      setTotalScore(data);
    })
  }, [props.company]);

  const BrandPerformanceTitle = ["DIVERSITY & INCLUSION", "WORKER EXPLOITATION", "WASTE & POLLUTION", "ETHICAL SOURCING"];
  const BrandPerformanceSubtitle1 = ["Discrimination, Gender Equality,","Child Labour, Forced Labour,","Air Pollution, Water Pollution & Wastes,","Cotton Farming, Deforestation,"];
  const BrandPerformanceSubtitle2 = ["Cultural Diversity, Inclusivity", "Living Wage, Working Conditions", "Packaging Waste, Material Waste","Animal Welfare"];

  return (
    <div className="Brand-Performance">
      <div className="Brand-Performance-container">
        <BrandPerformance title = {BrandPerformanceTitle[0]} subtitle1 = {BrandPerformanceSubtitle1[0]} 
          subtitle2 = {BrandPerformanceSubtitle2[0]} image = {DiversityImg} score = {TotalScore['A']}/>

        <BrandPerformance title = {BrandPerformanceTitle[1]} subtitle1 = {BrandPerformanceSubtitle1[1]} 
          subtitle2 = {BrandPerformanceSubtitle2[1]} image = {WorkerExploitImg} score = {TotalScore['B']} />

        <BrandPerformance title = {BrandPerformanceTitle[2]} subtitle1 = {BrandPerformanceSubtitle1[2]} 
          subtitle2 = {BrandPerformanceSubtitle2[2]} image = {WasteImg} score = {TotalScore['C']}/>

        <BrandPerformance title = {BrandPerformanceTitle[3]} subtitle1 = {BrandPerformanceSubtitle1[3]} 
          subtitle2 = {BrandPerformanceSubtitle2[3]} image = {SustainableImg} score = {TotalScore['D']}/>
      </div>
    </div>
  );
}
