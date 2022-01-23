import React, { useEffect, useState } from "react";
import "../../styles/Companies.css";
import DiversityImg from "../../assets/diversity.png";
import WorkerExploitImg from "../../assets/workerexploit.png";
import WasteImg from "../../assets/wastepollution.png";
import SustainableImg from "../../assets/sustainable.png";

export default function Scores(props) {
  return (
    <div className="Brand-Performance">
      <div className="Brand-Performance-container">
        <div>
          DIVERSITY & INCLUSION
          <div className="Description">
            <div className="Description-text">
              Discrimination, Gender Equality, <br></br>Cultural Diversity,
              Inclusivity
            </div>
            <div className="Description-data">
              <img src={DiversityImg} />
              <div className="Description-score">
                <span style={{ cursor: "default" }}>
                  {props.score[0]["Ascore"]}
                </span>
                <span style={{ cursor: "default" }}>/100</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          WORKER EXPLOITATION
          <div className="Description">
            <div className="Description-text">
              Child Labour, Forced Labour, <br></br> Living Wage, Working
              Conditions
            </div>
            <div className="Description-data">
              <img src={WorkerExploitImg} />
              <div className="Description-score">
                <span style={{ cursor: "default" }}>
                  {props.score[0]["Bscore"]}
                </span>
                <span style={{ cursor: "default" }}>/100</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          WASTE & POLLUTION
          <div className="Description">
            <div className="Description-text">
              Air Pollution, Water Pollution & Wastes, <br></br> Packaging
              Waste, Material Waste
            </div>
            <div className="Description-data">
              <img src={WasteImg} />
              <div className="Description-score">
                <span style={{ cursor: "default" }}>
                  {props.score[0]["Cscore"]}
                </span>
                <span style={{ cursor: "default" }}>/100</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          ETHICAL SOURCING
          <div className="Description">
            <div className="Description-text">
              Cotton Farming, Deforestation, <br /> Animal Welfare
            </div>
            <div className="Description-data">
              <img src={SustainableImg} />
              <div className="Description-score">
                <span style={{ cursor: "default" }}>
                  {props.score[0]["Dscore"]}
                </span>
                <span style={{ cursor: "default" }}>/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
