import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import "../../../styles/Companies.css";
import DiversityImg from "../../../assets/diversity.png";
import WorkerExploitImg from "../../../assets/workerexploit.png";
import WasteImg from "../../../assets/wastepollution.png";
import SustainableImg from "../../../assets/sustainable.png";
import axios from "axios";
import BrandPerformanceScores from "./BrandPerformanceScores";
import InfoIcon from "@material-ui/icons/Info";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';


const companyTotalScores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
}


export default function Scores(props) {
  const [TotalScore, setTotalScore] = React.useState(companyTotalScores);
  const [showBrandPInfo, setBrandPShowInfo] = useState(false);

  const handleCloseBrandPInfo = () => {
    setBrandPShowInfo(false)
  }

  const BrandPerformancePopup = ({ handleCloseInfo }) => {

    return (
        <div className="company-popup">
            <div className='company-popup-content'>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                    <div>Brand Performance</div>
                    <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
                        Performance is scored following an assessment of company policies, practices and actions taken in each of the following categories. To understand the scores given, click on Detailed Breakdown.
                    </div>
                </div>
                <HighlightOffRoundedIcon onClick={handleCloseBrandPInfo} className="popup-close-icon" />
            </div>
        </div>
    )
  };


  const BrandPerformance = () => {

    const [tabView, setTabView] = useState(window.innerWidth < 800);

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 800) {
                setTabView(false);
            } else {
                setTabView(true);
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (!tabView) { //web view
        return (
            <div className='brand_info-text'>Performance is scored following an assessment of company policies, practices and actions taken in each of the following categories. To understand the scores given, click on Detailed Breakdown</div>
        )
    } else if (showBrandPInfo && tabView) { //tab view	
        return (
            <BrandPerformancePopup handleCloseBrandPInfo={handleCloseBrandPInfo} />
        )
    } else return null
  }

  useEffect(()=>{
    axios.get(`/api/v1/scores/companyTotalScores?company=${props.company}`).
    then((resp) => {
      let data = TotalScore;
      data['A'] = resp.data["Ascore"];
      data['B'] = resp.data["Bscore"];
      data['C'] = resp.data["Cscore"];
      data['D'] = resp.data["Dscore"];
      setTotalScore(data);
    })
  }, [props.company]);

  const BrandPerformanceTitle = ["DIVERSITY & INCLUSION", "WORKER EXPLOITATION", "WASTE & POLLUTION", "ETHICAL SOURCING"];
  const BrandPerformanceSubtitle1 = ["Discrimination, Gender Equality,","Child Labour, Forced Labour,","Air Pollution, Water Pollution & Wastes,","Cotton Farming, Deforestation,"];
  const BrandPerformanceSubtitle2 = ["Cultural Diversity, Inclusivity", "Living Wage, Working Conditions", "Packaging Waste, Material Waste","Animal Welfare"];

  return (
    <Fragment>
      <div className='Brand-Section-title Right-Menu'>
        Brand Performance
      <InfoIcon className='brand_info-icon' onClick={() => setBrandPShowInfo(!showBrandPInfo)} />
        <BrandPerformance />
      </div>
      <div className='Decorative-Line'></div>
      
      <div className="Brand-Performance">
        <div className="Brand-Performance-container">
          <BrandPerformanceScores title = {BrandPerformanceTitle[0]} subtitle1 = {BrandPerformanceSubtitle1[0]} 
            subtitle2 = {BrandPerformanceSubtitle2[0]} image = {DiversityImg} score = {TotalScore['A']}/>

          <BrandPerformanceScores title = {BrandPerformanceTitle[1]} subtitle1 = {BrandPerformanceSubtitle1[1]} 
            subtitle2 = {BrandPerformanceSubtitle2[1]} image = {WorkerExploitImg} score = {TotalScore['B']} />

          <BrandPerformanceScores title = {BrandPerformanceTitle[2]} subtitle1 = {BrandPerformanceSubtitle1[2]} 
            subtitle2 = {BrandPerformanceSubtitle2[2]} image = {WasteImg} score = {TotalScore['C']}/>

          <BrandPerformanceScores title = {BrandPerformanceTitle[3]} subtitle1 = {BrandPerformanceSubtitle1[3]} 
            subtitle2 = {BrandPerformanceSubtitle2[3]} image = {SustainableImg} score = {TotalScore['D']}/>
        </div>
      </div>
    </Fragment>
  );
}
