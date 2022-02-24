import "../../../styles/Companies.css";
export default function BrandPerformanceScores(props) {
    return (
        <div>
          {props.title}
          <div className="Description">
            <div className="Description-text">
              {props.subtitle1} <br></br> {props.subtitle2}
            </div>
            <div className="Description-data">
              <img src={props.image} />
              <div className="Description-score">
                <span style={{ cursor: "default" }}>
                  {props.score}
                </span>
                <span style={{ cursor: "default" }}>/100</span>
              </div>
            </div>
          </div>
        </div>
    );
}
