import React, { useState, useLayoutEffect, useEffect } from "react";
import Logo from "../assets/brandBreakdown.svg";
import { useParams } from "react-router";
import InfoIcon from "@material-ui/icons/Info";
import CancelIcon from "@material-ui/icons/Cancel";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import "../styles/BrandBreakdown.css";
import "../styles/BrandBreakdown-new.css";
import axios from 'axios';

const field = [
  {
    mainField: "DIVERSITY & INCLUSION",
    mainScore: 0,
    subfield: [
      {
        mainNestedField: "Discrimination",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Prohibits discrimination throughout the organization",
              "Actively works to identify and respond to discrimination concerns"
            ],
            scores: [0, 0],
            total: [0, 0],
            texts: [
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Gender Equality",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Commits to increasing gender diversity throughout the organization",
              "Maintains strong female representation at all levels of leadership",
              "Ensures employees are receiving equal pay for equal work "
            ],
            scores: [0, 0, 0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Cultural Diversity",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Commits to increasing cultural diversity throughout the organization",
              "Maintains diverse ethnic representation at all levels of leadership",
              "Actively supports BIPOC and underrepresented communities"
            ],
            scores: [0, 0, 0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Inclusivity",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Fosters an inclusive workplace culture for LGBTQ+ employees",
              "Fosters an inclusive workplace culture for employees with disabilities",
              "Promotes body positivity and messages of inclusivity to consumers"
            ],
            scores: [0, 0, 0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              ""
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
    ],
  },
  {
    mainField: "WORKER EXPLOITATION",
    mainScore: 0,
    subfield: [
      {
        mainNestedField: "Child Labour",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Prohibits the use of child labour throughout the value chain",
              "Actively works to identify and prevent child labour violations",
              "Enrolls child labour victims in school after discovering violations"
            ],
            scores: [0, 0, 0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Forced Labour",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Prohibits the use of forced labour throughout the value chain",
              "Actively works to identify and prevent forced labour violations",
              "Supports the recovery of forced labour victims after discovering violations"
            ],
            scores: [0, 0, 0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Living Wage",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Ensures all factory workers are paid a living wage",
              "Works to increase wages and advocate for fair compensation in the industry",
              "Ensures wages and benefits are being paid on time and in full",
              "Guarantees the right to freedom of association and collective bargaining"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Working Conditions",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Actively works to improve factory health and safety conditions",
              "Ensures workers are not forced to work excessive hours",
              "Prohibits all forms of harassment or abuse towards workers",
              "Compensates mistreated workers after discovering violations"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              ""
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
    ],
  },
  {
    mainField: "WASTE & POLLUTION",
    mainScore: 0,
    subfield: [
      {
        mainNestedField: "Air Pollution",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Commits to using less energy throughout the value chain",
              "Commits to reducing greenhouse gas emissions throughout the value chain",
              "Works towards reducing the operational carbon footprint",
              "Works with suppliers to reduce manufacturing carbon footprints"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Water Pollution & Wastes",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Commits to using less water throughout the value chain",
              "Works with suppliers to recycle water and reduce usage",
              "Eliminates use of toxic chemicals in the production of products",
              "Filters wastewater to avoid contaminating fresh water"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Packaging Waste",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Reduces use of plastic packaging and shopping bags",
              "Uses recycled plastics and paper packaging materials",
              "Ensures all used packaging can be reused, recycled or composted",
              "Works with suppliers to reduce, reuse and recycle all packaging waste"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Material Waste",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Uses recycled materials in the production of products",
              "Repurposes or donates damaged and excess products",
              "Offers an effective take-back or repair program for customers",
              "Works with suppliers to reduce, reuse and recycle all material waste"
            ],
            scores: [0, 0, 0, 0],
            total: [0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
    ],
  },
  {
    mainField: "ETHICAL SOURCING",
    mainScore: 0,
    subfield: [
      {
        mainNestedField: "Cotton Farming",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Sources sustainable cotton from certified farms",
              "Actively works to prevent unethical cotton farming practices"
            ],
            scores: [0, 0],
            total: [0, 0],
            texts: [
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Deforestation",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Sources sustainable forest-based fabrics from certified suppliers",
              "Uses paper packaging materials from sustainable sources",
              "Actively works to protect forests and stop deforestation"
            ],
            scores: [0, 0 ,0],
            total: [0, 0, 0],
            texts: [
              "",
              "",
              "",
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
      {
        mainNestedField: "Animal Welfare",
        mainNestedScore: 0,
        total: 0,
        subNestedField: [
          {
            title: [
              "Prohibits animal cruelty throughout the value chain",
              "Sources sustainable leather or prohibits use",
              "Sources sustainable fur or prohibits use",
              "Sources sustainable wool from non-mulesed sheep",
              "Sources sustainable down from birds that were never force fed or live plucked"
            ],
            scores: [0, 0, 0, 0, 0],
            total: [0, 0, 0, 0, 0],
            texts: [
              "",
              "",
              "",
              "",
              ""
            ],
            citations: [
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              },
              {
                title: "",
                restofcit: ""
              }
            ]
          },
        ],
      },
    ],
  },
];

const Popup = ({item, i, closePopup}) => {
  console.log(item);
    return (
        <div className="popup">
          <div className='popup-content'>
          <div style={{display:'flex', flexDirection:'row', marginTop:'1rem'}}>
            <div style={{color: '#FED170', marginRight:'5px'}}>[1]</div>
            {/* {item.citations.map((citation, i) => {
              console.log(citation); */}
            <div>
              <i>{item.citations[i].title}</i>, {item.citations[i].restofcit}
            </div>
              {/* );
            })} */}
          </div>
          <HighlightOffRoundedIcon onClick={closePopup} className="popup-close-icon"/>
          </div>
        </div>
    )
};

const NestedField = ({ index, item }) => {
  const [tabView, setTabView] = useState(window.innerWidth < 800);
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [showInfo, setShowInfo] = useState(-1);
  const [showPopup, setShowPopup] = useState(-1);

  const closePopup = () => {
    setShowPopup(-1);
  }

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 800) {
        setTabView(false);
        setMobileView(false);
      } else if (window.innerWidth > 600) {
        setTabView(true);
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!tabView && !mobileView) {
    //Web-View
    return item.scores.map((score, i)=> {
      return <div className="breakdown_nestedField">
        <div className="breakdown_nestedField-title">{item.title[i]}</div>
        <div className="breakdown_nestedField-score">{score}/{item.total[i]}</div>
        <div style={{position:'relative', margin: 15}}>
          {item.texts[i]}
          {item.citations[i].title != "" && 
          <span>
            <sup className="citation-sup">[1]</sup>
            <span className="breakdown_citation-hover"><i>{item.citations[i].title}</i>, {item.citations[i].restofcit}</span>
          </span>}
        </div>
      </div>
    });
  } else if (tabView && !mobileView) {
    //tab view
    return item.scores.map((score, i) => {
      return (<div
        className={
          showInfo==i ? "breakdown_nestedField selected" : "breakdown_nestedField"
        }
      >
        {showInfo==i ? (
          <div>
            <span>
              {item.texts[i]}
            </span>
            <sup className="citation-sup" onClick={() => setShowPopup(i)}>[1]</sup>
          </div>
        ) : (
          <div className="breakdown_nestedField-title">{item.title[i]}</div>
        )}
        {showInfo==i ? (
          <CancelIcon
            onClick={() => setShowInfo(-1)}
            className="breakdown_info-icon"
          />
        ) : (
          <InfoIcon
            onClick={() => setShowInfo(i)}
            className="breakdown_info-icon"
          />
        )}
        {showPopup==i && <Popup item={item} i={i} closePopup={closePopup} />}
      </div>
    )})
  } else {
    //mobile-view
    return item.scores.map((score, i) => {
      return (
        <div
          className={
            showInfo==i ? "breakdown_nestedField selected" : "breakdown_nestedField"
          }
        >
          {showInfo!=i && (
            <div className="breakdown_nestedField-title">{item.title[i]}</div>
          )}
          {showInfo!=i && (
            <div className="breakdown_nestedField-score">{item.scores[i]}/{item.total[i]}</div>
          )}
          {showInfo==i && (
            <div style={{ gridColumnEnd: "span 2"}}>
                  <span>
                    {item.texts[i]}
                  </span>
              )
              <sup className="citation-sup" onClick={() => setShowPopup(i)}>[1]</sup>
            </div>
          )}
          {showInfo==i ? (
            <CancelIcon
              onClick={() => setShowInfo(-1)}
              className="breakdown_info-icon"
            />
          ) : (
            <InfoIcon
              onClick={() => setShowInfo(i)}
              className="breakdown_info-icon"
            />
          )}
          {showPopup==i && <Popup item={item} i={i} closePopup={closePopup} />}
        </div>
    )})
  }
};

const Subfield = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="breakdown_subField">
      <div
        onClick={() => setShow(!show)}
        className="breakdown_subField-container"
      >
        <div className="breakdown_subField-title">{item.mainNestedField}</div>
        <div className="breakdown_subField-score">{item.mainNestedScore}/{item.total}</div>
        <ExpandMoreSharpIcon
          onClick={() => setShow(!show)}
          className={show ? "circle-breakdown-close" : "circle-breakdown fill-white"}          
        />
      </div>
      <div className={`animate-field ${show ? 'animate' : ''}`}>
        {show &&
          item.subNestedField.map((item, index) => {
            return <NestedField key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

const Mainfield = ({ item, index }) => {
  const [show, setShow] = useState(index === 0 ? true : false);

  return (
    <div className="breakdown_mainField">
      <div
        onClick={() => setShow(!show)}
        className="breakdown_mainField-container"
      >
        <div className="breakdown_mainField-title">{item.mainField}</div>
        <div className="breakdown_mainField-score">{item.mainScore}/100</div>
        <ExpandMoreSharpIcon
          onClick={() => setShow(!show)}
          className={show ? "circle-breakdown-close" : "circle-breakdown"}
          style={{backgroundColor:'#FAF7F2', fill:'#26385A'}}
        />
      </div>
      <div className={`animate-field ${show ? 'animate' : ''}`}>
        {show &&
          item.subfield.map((item, index) => {
            return <Subfield key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

class BrandBreakdown extends React.Component {
  state = {
    companyName: "",
    companyScore: {TotalScore: 0, Ascore: 0, Bscore: 0, Cscore: 0, Dscore: 0},
    // A: {A1score: 0, A11score: 0, A11text: "", A12score: 0, A12text: "", A2score: 0, A21score: 0, A21text: "", A22score: 0, A22text: "", A23score: 0, A23text: "", A3score: 0, A31score: 0, A31text: "", A32score: 0, A32text: "", A33score: 0, A33text: "", A4score: 0, A41score: 0, A41text: "", A42score: 0, A42text: "", A43score: 0, A43text: ""},
    // B: {Bscore: 0, B1score: 0, B11score: 0, B11text: "", B12score: 0, B12text: "", B13score: 0, B13text: "", B2score: 0, B21score: 0, B21text: "", B22score: 0, B22text: "", B23score: 0, B23text: "", B3score: 0, B31score: 0, B31text: "", B32score: 0, B32text: "", B33score: 0, B33text: "", B34score: 0, B34text: "", B4score: 0, B41score: 0, B41text: "", B42score: 0, B42text: "", B43score: 0, B43text: "", B44score: 0, B44text: ""},
    // C: {C1score: 0, C11score: 0, C11text: "", C12score: 0, C12text: "", C13score: 0, C13text: "", C14score: 0, C14text: "", C2score: 0, C21score: 0, C21text: "", C22score: 0, C22text: "", C23score: 0, C23text: "", C24score: 0, C24text: "", C3score: 0, C31score: 0, C31text: "", C32score: 0, C32text: "", C33score: 0, C33text: "", C34score: 0, C34text: "", C4score: 0, C41score: 0, C41score: 0, C41text: "", C42score: 0, C42text: "", C43score: 0, C43text: "", C44score: 0, C44text: ""},
    // D: {D1score: 0, D11score: 0, D11text: "", D12score: 0, D12text: "", D2score: 0, D21score: 0, D21text: "", D22score: 0, D22text: "", D23score: 0, D23text: "", D3score: 0, D31score: 0, D31text: "", D32score: 0, D32text: "", D33score: 0, D33text: "", D34score: 0, D34text: "", D35score: 0, D35text: ""},
    logo: "",
    subsidiary: "",
    reset: false
    // dimensions: {}
  }

  componentDidMount () {
    this.setState({companyName: this.props.match.params.companyName});
    axios.post(
      '/citationsLong',
      {},
      {
        params: [this.props.match.params.companyName]
      }
    ).then(resp => {
      for (var i = 0; i < resp.data.length; i++) {
        if (resp.data[i].Type == "A1.1") {
          field[0].subfield[0].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
          console.log("hi");
        }
        if (resp.data[i].Type == "A1.2") field[0].subfield[0].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A2.1") field[0].subfield[1].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A2.2") field[0].subfield[1].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A2.3") field[0].subfield[1].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A3.1") field[0].subfield[2].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A3.2") field[0].subfield[2].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A3.3") field[0].subfield[2].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A4.1") field[0].subfield[3].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A4.2") field[0].subfield[3].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "A4.3") field[0].subfield[3].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};

        if (resp.data[i].Type == "B1.1") field[1].subfield[0].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B1.2") field[1].subfield[0].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B1.3") field[1].subfield[0].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B2.1") field[1].subfield[1].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B2.2") field[1].subfield[1].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B2.3") field[1].subfield[1].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B3.1") field[1].subfield[2].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B3.2") field[1].subfield[2].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B3.3") field[1].subfield[2].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B3.4") field[1].subfield[2].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B4.1") field[1].subfield[3].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B4.2") field[1].subfield[3].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B4.3") field[1].subfield[3].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "B4.4") field[1].subfield[3].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};

        if (resp.data[i].Type == "C1.1") field[2].subfield[0].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C1.2") field[2].subfield[0].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C1.3") field[2].subfield[0].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C1.4") field[2].subfield[0].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C2.1") field[2].subfield[1].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C2.2") field[2].subfield[1].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C2.3") field[2].subfield[1].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C2.4") field[2].subfield[1].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C3.1") field[2].subfield[2].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C3.2") field[2].subfield[2].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C3.3") field[2].subfield[2].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C3.4") field[2].subfield[2].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C4.1") field[2].subfield[3].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C4.2") field[2].subfield[3].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C4.3") field[2].subfield[3].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "C4.4") field[2].subfield[3].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};

        if (resp.data[i].Type == "D1.1") field[3].subfield[0].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D1.2") field[3].subfield[0].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D2.1") field[3].subfield[1].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D2.2") field[3].subfield[1].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D2.3") field[3].subfield[1].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D3.1") field[3].subfield[2].subNestedField[0].citations[0] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D3.2") field[3].subfield[2].subNestedField[0].citations[1] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D3.3") field[3].subfield[2].subNestedField[0].citations[2] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D3.4") field[3].subfield[2].subNestedField[0].citations[3] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};
        if (resp.data[i].Type == "D3.5") field[3].subfield[2].subNestedField[0].citations[4] = {title: resp.data[i]["Title"], restofcit: resp.data[i]["PublishingGroup"]+", "+resp.data[i]["Date"]+", "+resp.data[i]["Pages"]};

      }
      console.log(field);
    })
    axios.post(
      '/companyscores',
      {},
          {
              params: this.props.match.params.companyName
          }
      ).then((resp) => {
        console.log("here");
        console.log(resp.data);
        // console.log(this.state.companyName);
        // let score = (parseInt(resp.data[0]["Ascore"]) + parseInt(resp.data[0]["Bscore"]) + parseInt(resp.data[0]["Cscore"]) + parseInt(resp.data[0]["Dscore"]))/4;
        // let data = {TotalScore: score, Ascore: resp.data[0]["Ascore"], Bscore: resp.data[0]["Bscore"], Cscore: resp.data[0]["Cscore"], Dscore: resp.data[0]["Dscore"]};
        // let dataA = {A1score: resp.data[0]["A1score"], A11score: resp.data[0]["A1.1score"], A11text: resp.data[0]["A1.1long"], A12score: resp.data[0]["A1.2score"], A12text: resp.data[0]["A1.2long"], A2score: resp.data[0]["A2score"], A21score: resp.data[0]["A2.1score"], A21text: resp.data[0]["A2.1long"], A22score: resp.data[0]["A2.2score"], A22text: resp.data[0]["A2.2long"], A23score: resp.data[0]["A2.3score"], A3score: resp.data[0]["A3score"], A31score: resp.data[0]["A3.1score"], A31text: resp.data[0]["A3.1long"], A32score: resp.data[0]["A3.2score"], A32text: resp.data[0]["A3.2long"], A33score: resp.data[0]["A3.3score"], A33text: resp.data[0]["A3.3long"], A4score: resp.data[0]["A4score"], A41score: resp.data[0]["A4.1score"], A41text: resp.data[0]["A4.1long"], A42score: resp.data[0]["A4.2score"], A42text: resp.data[0]["A4.2long"], A43score: resp.data[0]["A4.3score"], A43text: resp.data[0]["A4.3long"]};
        // let dataB = {B1score: resp.data[0]["B1score"], B11score: resp.data[0]["B1.1score"], B11text: resp.data[0]["B1.1long"], B12score: resp.data[0]["B1.2score"], B12text: resp.data[0]["B1.2long"], B13score: resp.data[0]["B1.3score"], B13text: resp.data[0]["B1.3long"], B2score: resp.data[0]["B2score"], B21score: resp.data[0]["B2.1score"], B21text: resp.data[0]["B2.1long"], B22score: resp.data[0]["B2.2score"], B22text: resp.data[0]["B2.2long"], B23score: resp.data[0]["B2.3score"], B3score: resp.data[0]["B3score"], B31score: resp.data[0]["B3.1score"], B31text: resp.data[0]["B3.1long"], B32score: resp.data[0]["A3.2score"], B32text: resp.data[0]["B3.2long"], B33score: resp.data[0]["B3.3score"], B33text: resp.data[0]["B3.3long"], B34score: resp.data[0]["B3.4score"], B34text: resp.data[0]["B3.4long"], B4score: resp.data[0]["B4score"], B41score: resp.data[0]["B4.1score"], B41text: resp.data[0]["B4.1long"], B42score: resp.data[0]["B4.2score"], B42text: resp.data[0]["A4.2long"], B43score: resp.data[0]["B4.3score"], B43text: resp.data[0]["B4.3long"], B44score: resp.data[0]["B4.4score"], B44text: resp.data[0]["B4.4long"]};
        // let dataC = {C1score: resp.data[0]["C1score"], C11score: resp.data[0]["C1.1score"], C11text: resp.data[0]["C1.1long"], C12score: resp.data[0]["C1.2score"], C12text: resp.data[0]["C1.2long"], C13score: resp.data[0]["C1.3score"], C13text: resp.data[0]["C1.3long"], C14score: resp.data[0]["C1.4score"], C14text: resp.data[0]["C1.4long"], C2score: resp.data[0]["C2score"], C21score: resp.data[0]["C2.1score"], C21text: resp.data[0]["C2.1long"], C22score: resp.data[0]["C2.2score"], C22text: resp.data[0]["C2.2long"], C23score: resp.data[0]["C2.3score"], C23text: resp.data[0]["C2.3long"], C24score: resp.data[0]["C2.4score"], C24text: resp.data[0]["C2.4long"], C3score: resp.data[0]["C3score"], C31score: resp.data[0]["C3.1score"], C31text: resp.data[0]["C3.1long"], C32score: resp.data[0]["C3.2score"], C32text: resp.data[0]["C3.2long"], C33score: resp.data[0]["C3.3score"], C33text: resp.data[0]["C3.3long"], C34score: resp.data[0]["C3.4score"], C34text: resp.data[0]["C3.4long"], C4score: resp.data[0]["C4score"], C41score: resp.data[0]["C4.1score"], C41text: resp.data[0]["C4.1long"], C42score: resp.data[0]["C4.2score"], C42text: resp.data[0]["C4.2long"], C43score: resp.data[0]["C4.3score"], C43text: resp.data[0]["C4.3long"], C44score: resp.data[0]["C4.4score"], C44text: resp.data[0]["C4.4long"]};
        // let dataD = {D1score: resp.data[0]["D1score"], D11score: resp.data[0]["D1.1score"], C11text: resp.data[0]["D1.1long"], D12score: resp.data[0]["D1.2score"], D12text: resp.data[0]["D1.2long"], D2score: resp.data[0]["D2score"], D21text: resp.data[0]["D2.1long"], D22score: resp.data[0]["D2.2score"], D22text: resp.data[0]["D2.2long"], D23score: resp.data[0]["D2.3score"], D23text: resp.data[0]["D2.3long"], D3score: resp.data[0]["D3score"], D31score: resp.data[0]["D3.1score"], D31text: resp.data[0]["D3.1long"], D32score: resp.data[0]["D3.2score"], D32text: resp.data[0]["D3.2long"], D33score: resp.data[0]["D3.3score"], D33text: resp.data[0]["D3.3long"], D34score: resp.data[0]["D3.4score"], D34text: resp.data[0]["D3.4long"], D35score: resp.data[0]["D3.5score"], D35text: resp.data[0]["D3.5long"]};
        console.log(field);
        field[0].mainScore = resp.data[0]["Ascore"];
        field[0].subfield[0].mainNestedScore = resp.data[0]["A1score"];
        field[0].subfield[1].mainNestedScore = resp.data[0]["A2score"];
        field[0].subfield[2].mainNestedScore = resp.data[0]["A3score"];
        field[0].subfield[3].mainNestedScore = resp.data[0]["A4score"];

        field[0].subfield[0].subNestedField[0].scores[0] = resp.data[0]["A1.1score"];
        field[0].subfield[0].subNestedField[0].scores[1] = resp.data[0]["A1.2score"];
        field[0].subfield[0].subNestedField[0].texts[0] = resp.data[0]["A1.1long"];
        field[0].subfield[0].subNestedField[0].texts[1] = resp.data[0]["A1.2long"];

        field[0].subfield[1].subNestedField[0].scores[0] = resp.data[0]["A2.1score"];
        field[0].subfield[1].subNestedField[0].scores[1] = resp.data[0]["A2.2score"];
        field[0].subfield[1].subNestedField[0].scores[2] = resp.data[0]["A2.3score"];
        field[0].subfield[1].subNestedField[0].texts[0] = resp.data[0]["A2.1long"];
        field[0].subfield[1].subNestedField[0].texts[1] = resp.data[0]["A2.2long"];
        field[0].subfield[1].subNestedField[0].texts[2] = resp.data[0]["A2.3long"];

        field[0].subfield[2].subNestedField[0].scores[0] = resp.data[0]["A3.1score"];
        field[0].subfield[2].subNestedField[0].scores[1] = resp.data[0]["A3.2score"];
        field[0].subfield[2].subNestedField[0].scores[2] = resp.data[0]["A3.3score"];
        field[0].subfield[2].subNestedField[0].texts[0] = resp.data[0]["A3.1long"];
        field[0].subfield[2].subNestedField[0].texts[1] = resp.data[0]["A3.2long"];
        field[0].subfield[2].subNestedField[0].texts[2] = resp.data[0]["A3.3long"];

        field[0].subfield[3].subNestedField[0].scores[0] = resp.data[0]["A4.1score"];
        field[0].subfield[3].subNestedField[0].scores[1] = resp.data[0]["A4.2score"];
        field[0].subfield[3].subNestedField[0].scores[2] = resp.data[0]["A4.3score"];
        field[0].subfield[3].subNestedField[0].texts[0] = resp.data[0]["A4.1long"];
        field[0].subfield[3].subNestedField[0].texts[1] = resp.data[0]["A4.2long"];
        field[0].subfield[3].subNestedField[0].texts[2] = resp.data[0]["A4.3long"];

        field[1].mainScore = resp.data[0]["Bscore"];
        field[1].subfield[0].mainNestedScore = resp.data[0]["B1score"];
        field[1].subfield[1].mainNestedScore = resp.data[0]["B2score"];
        field[1].subfield[2].mainNestedScore = resp.data[0]["B3score"];
        field[1].subfield[3].mainNestedScore = resp.data[0]["B4score"];

        field[1].subfield[0].subNestedField[0].scores[0] = resp.data[0]["B1.1score"];
        field[1].subfield[0].subNestedField[0].scores[1] = resp.data[0]["B1.2score"];
        field[1].subfield[0].subNestedField[0].scores[2] = resp.data[0]["B1.3score"];
        field[1].subfield[0].subNestedField[0].texts[0] = resp.data[0]["B1.1long"];
        field[1].subfield[0].subNestedField[0].texts[1] = resp.data[0]["B1.2long"];
        field[1].subfield[0].subNestedField[0].texts[2] = resp.data[0]["B1.3long"];

        field[1].subfield[1].subNestedField[0].scores[0] = resp.data[0]["B2.1score"];
        field[1].subfield[1].subNestedField[0].scores[1] = resp.data[0]["B2.2score"];
        field[1].subfield[1].subNestedField[0].scores[2] = resp.data[0]["B2.3score"];
        field[1].subfield[1].subNestedField[0].texts[0] = resp.data[0]["B2.1long"];
        field[1].subfield[1].subNestedField[0].texts[1] = resp.data[0]["B2.2long"];
        field[1].subfield[1].subNestedField[0].texts[2] = resp.data[0]["B2.3long"];

        field[1].subfield[2].subNestedField[0].scores[0] = resp.data[0]["B3.1score"];
        field[1].subfield[2].subNestedField[0].scores[1] = resp.data[0]["B3.2score"];
        field[1].subfield[2].subNestedField[0].scores[2] = resp.data[0]["B3.3score"];
        field[1].subfield[2].subNestedField[0].scores[3] = resp.data[0]["B3.4score"];
        field[1].subfield[2].subNestedField[0].texts[0] = resp.data[0]["B3.1long"];
        field[1].subfield[2].subNestedField[0].texts[1] = resp.data[0]["B3.2long"];
        field[1].subfield[2].subNestedField[0].texts[2] = resp.data[0]["B3.3long"];
        field[1].subfield[2].subNestedField[0].texts[3] = resp.data[0]["B3.4long"];

        field[1].subfield[3].subNestedField[0].scores[0] = resp.data[0]["B4.1score"];
        field[1].subfield[3].subNestedField[0].scores[1] = resp.data[0]["B4.2score"];
        field[1].subfield[3].subNestedField[0].scores[2] = resp.data[0]["B4.3score"];
        field[1].subfield[3].subNestedField[0].scores[3] = resp.data[0]["B4.4score"];
        field[1].subfield[3].subNestedField[0].texts[0] = resp.data[0]["B4.1long"];
        field[1].subfield[3].subNestedField[0].texts[1] = resp.data[0]["B4.2long"];
        field[1].subfield[3].subNestedField[0].texts[2] = resp.data[0]["B4.3long"];
        field[1].subfield[3].subNestedField[0].texts[3] = resp.data[0]["B4.4long"];

        field[2].mainScore = resp.data[0]["Cscore"];
        field[2].subfield[0].mainNestedScore = resp.data[0]["C1score"];
        field[2].subfield[1].mainNestedScore = resp.data[0]["C2score"];
        field[2].subfield[2].mainNestedScore = resp.data[0]["C3score"];
        field[2].subfield[3].mainNestedScore = resp.data[0]["C4score"];

        field[2].subfield[0].subNestedField[0].scores[0] = resp.data[0]["C1.1score"];
        field[2].subfield[0].subNestedField[0].scores[1] = resp.data[0]["C1.2score"];
        field[2].subfield[0].subNestedField[0].scores[2] = resp.data[0]["C1.3score"];
        field[2].subfield[0].subNestedField[0].scores[3] = resp.data[0]["C1.4score"];
        field[2].subfield[0].subNestedField[0].texts[0] = resp.data[0]["C1.1long"];
        field[2].subfield[0].subNestedField[0].texts[1] = resp.data[0]["C1.2long"];
        field[2].subfield[0].subNestedField[0].texts[2] = resp.data[0]["C1.3long"];
        field[2].subfield[0].subNestedField[0].texts[3] = resp.data[0]["C1.4long"];

        field[2].subfield[1].subNestedField[0].scores[0] = resp.data[0]["C2.1score"];
        field[2].subfield[1].subNestedField[0].scores[1] = resp.data[0]["C2.2score"];
        field[2].subfield[1].subNestedField[0].scores[2] = resp.data[0]["C2.3score"];
        field[2].subfield[1].subNestedField[0].scores[3] = resp.data[0]["C2.4score"];
        field[2].subfield[1].subNestedField[0].texts[0] = resp.data[0]["C2.1long"];
        field[2].subfield[1].subNestedField[0].texts[1] = resp.data[0]["C2.2long"];
        field[2].subfield[1].subNestedField[0].texts[2] = resp.data[0]["C2.3long"];
        field[2].subfield[1].subNestedField[0].texts[3] = resp.data[0]["C2.4long"];

        field[2].subfield[2].subNestedField[0].scores[0] = resp.data[0]["C3.1score"];
        field[2].subfield[2].subNestedField[0].scores[1] = resp.data[0]["C3.2score"];
        field[2].subfield[2].subNestedField[0].scores[2] = resp.data[0]["C3.3score"];
        field[2].subfield[2].subNestedField[0].scores[3] = resp.data[0]["C3.4score"];
        field[2].subfield[2].subNestedField[0].texts[0] = resp.data[0]["C3.1long"];
        field[2].subfield[2].subNestedField[0].texts[1] = resp.data[0]["C3.2long"];
        field[2].subfield[2].subNestedField[0].texts[2] = resp.data[0]["C3.3long"];
        field[2].subfield[2].subNestedField[0].texts[3] = resp.data[0]["C3.4long"];

        field[2].subfield[3].subNestedField[0].scores[0] = resp.data[0]["C4.1score"];
        field[2].subfield[3].subNestedField[0].scores[1] = resp.data[0]["C4.2score"];
        field[2].subfield[3].subNestedField[0].scores[2] = resp.data[0]["C4.3score"];
        field[2].subfield[3].subNestedField[0].scores[3] = resp.data[0]["C4.4score"];
        field[2].subfield[3].subNestedField[0].texts[0] = resp.data[0]["C4.1long"];
        field[2].subfield[3].subNestedField[0].texts[1] = resp.data[0]["C4.2long"];
        field[2].subfield[3].subNestedField[0].texts[2] = resp.data[0]["C4.3long"];
        field[2].subfield[3].subNestedField[0].texts[3] = resp.data[0]["C4.4long"];

        field[3].mainScore = resp.data[0]["Dscore"];
        field[3].subfield[0].mainNestedScore = resp.data[0]["D1score"];
        field[3].subfield[1].mainNestedScore = resp.data[0]["D2score"];
        field[3].subfield[2].mainNestedScore = resp.data[0]["D3score"];

        field[3].subfield[0].subNestedField[0].scores[0] = resp.data[0]["D1.1score"];
        field[3].subfield[0].subNestedField[0].scores[1] = resp.data[0]["D1.2score"];
        field[3].subfield[0].subNestedField[0].texts[0] = resp.data[0]["D1.1long"];
        field[3].subfield[0].subNestedField[0].texts[1] = resp.data[0]["D1.2long"];

        field[3].subfield[1].subNestedField[0].scores[0] = resp.data[0]["D2.1score"];
        field[3].subfield[1].subNestedField[0].scores[1] = resp.data[0]["D2.2score"];
        field[3].subfield[1].subNestedField[0].scores[2] = resp.data[0]["D2.3score"];
        field[3].subfield[1].subNestedField[0].texts[0] = resp.data[0]["D2.1long"];
        field[3].subfield[1].subNestedField[0].texts[1] = resp.data[0]["D2.2long"];
        field[3].subfield[1].subNestedField[0].texts[2] = resp.data[0]["D2.3long"];

        field[3].subfield[2].subNestedField[0].scores[0] = resp.data[0]["D3.1score"];
        field[3].subfield[2].subNestedField[0].scores[1] = resp.data[0]["D3.2score"];
        field[3].subfield[2].subNestedField[0].scores[2] = resp.data[0]["D3.3score"];
        field[3].subfield[2].subNestedField[0].scores[3] = resp.data[0]["D3.4score"];
        field[3].subfield[2].subNestedField[0].scores[4] = resp.data[0]["D3.5score"];
        field[3].subfield[2].subNestedField[0].texts[0] = resp.data[0]["D3.1long"];
        field[3].subfield[2].subNestedField[0].texts[1] = resp.data[0]["D3.2long"];
        field[3].subfield[2].subNestedField[0].texts[2] = resp.data[0]["D3.3long"];
        field[3].subfield[2].subNestedField[0].texts[3] = resp.data[0]["D3.4long"];
        field[3].subfield[2].subNestedField[0].texts[4] = resp.data[0]["D3.5long"];
        this.setState({reset: true});
    });
    axios.post(
      '/somecompanyinfo',
      {},
        {
          params: this.props.match.params.companyName
        }
    ).then(resp => {
      console.log(resp.data);
      this.setState({
        logo: resp.data[0].Logo,
        subsidiary: resp.data[0].Subsidiary,
        totalscore: resp.data[0].TotalScore
      })
    })
    axios.get(
      '/industry',
      {},
      {}
    ).then(resp => {
      console.log(resp.data);
      field[0].subfield[0].total = resp.data.rows[0]["A1total"];
      field[0].subfield[0].subNestedField[0].total[0] = resp.data.rows[0]["A1.1total"];
      field[0].subfield[0].subNestedField[0].total[1] = resp.data.rows[0]["A1.2total"];

      field[0].subfield[1].total = resp.data.rows[0]["A2total"];
      field[0].subfield[1].subNestedField[0].total[0] = resp.data.rows[0]["A2.1total"];
      field[0].subfield[1].subNestedField[0].total[1] = resp.data.rows[0]["A2.2total"];
      field[0].subfield[1].subNestedField[0].total[2] = resp.data.rows[0]["A2.3total"];

      field[0].subfield[2].total = resp.data.rows[0]["A3total"];
      field[0].subfield[2].subNestedField[0].total[0] = resp.data.rows[0]["A3.1total"];
      field[0].subfield[2].subNestedField[0].total[1] = resp.data.rows[0]["A3.2total"];
      field[0].subfield[2].subNestedField[0].total[2] = resp.data.rows[0]["A3.3total"];

      field[0].subfield[3].total = resp.data.rows[0]["A4total"];
      field[0].subfield[3].subNestedField[0].total[0] = resp.data.rows[0]["A4.1total"];
      field[0].subfield[3].subNestedField[0].total[1] = resp.data.rows[0]["A4.2total"];
      field[0].subfield[3].subNestedField[0].total[2] = resp.data.rows[0]["A4.3total"];

      field[1].subfield[0].total = resp.data.rows[0]["B1total"];
      field[1].subfield[0].subNestedField[0].total[0] = resp.data.rows[0]["B1.1total"];
      field[1].subfield[0].subNestedField[0].total[1] = resp.data.rows[0]["B1.2total"];
      field[1].subfield[0].subNestedField[0].total[2] = resp.data.rows[0]["B1.3total"];

      field[1].subfield[1].total = resp.data.rows[0]["B2total"];
      field[1].subfield[1].subNestedField[0].total[0] = resp.data.rows[0]["B2.1total"];
      field[1].subfield[1].subNestedField[0].total[1] = resp.data.rows[0]["B2.2total"];
      field[1].subfield[1].subNestedField[0].total[2] = resp.data.rows[0]["B2.3total"];

      field[1].subfield[2].total = resp.data.rows[0]["B3total"];
      field[1].subfield[2].subNestedField[0].total[0] = resp.data.rows[0]["B3.1total"];
      field[1].subfield[2].subNestedField[0].total[1] = resp.data.rows[0]["B3.2total"];
      field[1].subfield[2].subNestedField[0].total[2] = resp.data.rows[0]["B3.3total"];
      field[1].subfield[2].subNestedField[0].total[3] = resp.data.rows[0]["B3.4total"];

      field[1].subfield[3].total = resp.data.rows[0]["B4total"];
      field[1].subfield[3].subNestedField[0].total[0] = resp.data.rows[0]["B4.1total"];
      field[1].subfield[3].subNestedField[0].total[1] = resp.data.rows[0]["B4.2total"];
      field[1].subfield[3].subNestedField[0].total[2] = resp.data.rows[0]["B4.3total"];
      field[1].subfield[3].subNestedField[0].total[3] = resp.data.rows[0]["B4.4total"];

      field[2].subfield[0].total = resp.data.rows[0]["C1total"];
      field[2].subfield[0].subNestedField[0].total[0] = resp.data.rows[0]["C1.1total"];
      field[2].subfield[0].subNestedField[0].total[1] = resp.data.rows[0]["C1.2total"];
      field[2].subfield[0].subNestedField[0].total[2] = resp.data.rows[0]["C1.3total"];
      field[2].subfield[0].subNestedField[0].total[3] = resp.data.rows[0]["C1.4total"];

      field[2].subfield[1].total = resp.data.rows[0]["C2total"];
      field[2].subfield[1].subNestedField[0].total[0] = resp.data.rows[0]["C2.1total"];
      field[2].subfield[1].subNestedField[0].total[1] = resp.data.rows[0]["C2.2total"];
      field[2].subfield[1].subNestedField[0].total[2] = resp.data.rows[0]["C2.3total"];
      field[2].subfield[1].subNestedField[0].total[3] = resp.data.rows[0]["C2.4total"];

      field[2].subfield[2].total = resp.data.rows[0]["C3total"];
      field[2].subfield[2].subNestedField[0].total[0] = resp.data.rows[0]["C3.1total"];
      field[2].subfield[2].subNestedField[0].total[1] = resp.data.rows[0]["C3.2total"];
      field[2].subfield[2].subNestedField[0].total[2] = resp.data.rows[0]["C3.3total"];
      field[2].subfield[2].subNestedField[0].total[3] = resp.data.rows[0]["C3.4total"];

      field[2].subfield[3].total = resp.data.rows[0]["C4total"];
      field[2].subfield[3].subNestedField[0].total[0] = resp.data.rows[0]["C4.1total"];
      field[2].subfield[3].subNestedField[0].total[1] = resp.data.rows[0]["C4.2total"];
      field[2].subfield[3].subNestedField[0].total[2] = resp.data.rows[0]["C4.3total"];
      field[2].subfield[3].subNestedField[0].total[3] = resp.data.rows[0]["C4.4total"];

      field[3].subfield[0].total = resp.data.rows[0]["D1total"];
      field[3].subfield[0].subNestedField[0].total[0] = resp.data.rows[0]["D1.1total"];
      field[3].subfield[0].subNestedField[0].total[1] = resp.data.rows[0]["D1.2total"];

      field[3].subfield[1].total = resp.data.rows[0]["D2total"];
      field[3].subfield[1].subNestedField[0].total[0] = resp.data.rows[0]["D2.1total"];
      field[3].subfield[1].subNestedField[0].total[1] = resp.data.rows[0]["D2.2total"];
      field[3].subfield[1].subNestedField[0].total[2] = resp.data.rows[0]["D2.3total"];

      field[3].subfield[2].total = resp.data.rows[0]["D3total"];
      field[3].subfield[2].subNestedField[0].total[0] = resp.data.rows[0]["D3.1total"];
      field[3].subfield[2].subNestedField[0].total[1] = resp.data.rows[0]["D3.2total"];
      field[3].subfield[2].subNestedField[0].total[2] = resp.data.rows[0]["D3.3total"];
      field[3].subfield[2].subNestedField[0].total[3] = resp.data.rows[0]["D3.4total"];
      field[3].subfield[2].subNestedField[0].total[4] = resp.data.rows[0]["D3.5total"];
      console.log(field);
      this.setState({reset: true});
    })
  }

  render() {

  return (
    <div className="breakdown_container">
      <div className="breakdown_logo">
        <img src={this.state.logo}  className="breakdown_logoImage" />
        <p className="breakdown_logoText">
          {Math.round(this.state.totalscore, 2)}<span style={{ fontSize: 32 }}>/154</span>
        </p>
      </div>
      {this.state.subsidiary != null && <div className="breakdown_info-container">
        <InfoIcon style={{fontSize:'15px', fill:'#3D3E3F', marginRight:'4px'}}/>
        <span className="breakdown_info-container-text">
          As the parent company, {this.state.subsidiary} manages and oversees Uniqlo.
        </span>
      </div>}
      <div className="breakdown_data-container">
        {field.map((item, index) => (
          <Mainfield key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
}


export default BrandBreakdown;
