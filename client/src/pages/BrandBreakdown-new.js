import React, { useState, useLayoutEffect } from "react";
import Logo from "../assets/brandBreakdown.svg";
import InfoIcon from "@material-ui/icons/Info";
import CancelIcon from "@material-ui/icons/Cancel";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import "../styles/BrandBreakdown.css";
import "../styles/BrandBreakdown-new.css";

const field = [
  {
    mainField: "DIVERSITY & INCLUSION",
    mainScore: "5.5/22",
    subfield: [
      {
        mainNestedField: "Discrimination",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Prohibits discrimination throughout the organization",
              "Identifies and addresses discrimination concerns",
            ],
          },
        ],
      },
      {
        mainNestedField: "Gender Equality",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Commits to improving gender equality",
              "Has strong female representation in leadership positions",
              "Ensures equal pay for equal work",
            ],
          },
        ],
      },
      {
        mainNestedField: "Cultural Diversity",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Commits to increasing cultural diversity",
              "Has diverse ethnic representation in leadership positions",
              "Supports BIPOC and marginalized communities",
            ],
          },
        ],
      },
      {
        mainNestedField: "Inclusivity",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Fosters an inclusive workplace for LGBTQ+ employees",
              "Supports the growth of employees with disabilities",
              "Promotes body positivity and inclusivity to consumers",
            ],
          },
        ],
      },
    ],
  },
  {
    mainField: "WORKER EXPLOITATION",
    mainScore: "5.5/22",
    subfield: [
      {
        mainNestedField: "Child Labour",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Prohibits the use of child labour",
              "Identifies and prevents child labour violations",
              "Enrolls child labour victims in educational programs",
            ],
          },
        ],
      },
      {
        mainNestedField: "Forced Labour",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Prohibits the use of forced labour",
              "Identifies and prevents forced labour violations",
              "Supports the recovery of forced labour victims",
            ],
          },
        ],
      },
      {
        mainNestedField: "Living Wage",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Pays all factory workers a living wage",
              "Commits to fair compensation and higher wages",
              "Pays wages and benefits on time and in full",
              "Guarantees the right to freedom of association",
            ],
          },
        ],
      },
      {
        mainNestedField: "Working Conditions",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Prioritizes factory health and safety conditions",
              "Prohibits excessive work hours",
              "Prohibits all forms of harassment or abuse",
              "Identifies and prevents mistreatment of workers",
              "Compensates and supports mistreated workers",
            ],
          },
        ],
      },
    ],
  },
  {
    mainField: "WASTE & POLLUTION",
    mainScore: "5.5/22",
    subfield: [
      {
        mainNestedField: "Air Pollution",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Commits to reducing energy consumption",
              "Commits to reducing greenhouse gas emissions",
              "Works towards reducing the operational carbon footprint",
              "Works with suppliers to reduce manufacturing pollution",
            ],
          },
        ],
      },
      {
        mainNestedField: "Water Pollution & Wastes",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Commits to reducing water consumption",
              "Works with suppliers to reduce water waste",
              "Eliminates use of hazardous chemicals in products",
              "Filters wastewater to prevent freshwater pollution",
            ],
          },
        ],
      },
      {
        mainNestedField: "Packaging Waste",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Does not use plastic bags and packaging",
              "Uses recycled packaging materials",
              "Ensures packaging is reused, recycled or composted",
              "Works with suppliers to reduce packaging waste",
            ],
          },
        ],
      },
      {
        mainNestedField: "Material Waste",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Uses recycled materials in products",
              "Repurposes damaged and excess products",
              "Offers consumer take-back or repair programs",
              "Works with suppliers to reduce material waste",
            ],
          },
        ],
      },
    ],
  },
  {
    mainField: "SUSTAINABLE MATERIALS",
    mainScore: "5.5/22",
    subfield: [
      {
        mainNestedField: "Cotton Farming",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Sources sustainably produced cotton",
              "Advocates against unethical farming practices",
            ],
          },
        ],
      },
      {
        mainNestedField: "Deforestation",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Sources sustainably produced forest-based fabrics",
              "Uses paper materials from sustainable sources",
              "Protects forests from deforestation",
            ],
          },
        ],
      },
      {
        mainNestedField: "Animal Welfare",
        mainNestedScore: "3/4",
        subNestedField: [
          {
            title:
              "Prohibits discrimination throughout all stages of the organization",
            scores: "5.5/22",
            texts: [
              "Prohibits animal cruelty",
              "Sources sustainably produced leather",
              "Sources sustainably produced fur",
              "Sources sustainably produced wool",
              "Sources sustainably produced down",
            ],
          },
        ],
      },
    ],
  },
];

const Popup = ({item, closePopup}) => {

    return (
        <div className="popup">
          <div className='popup-content'>
          <div style={{display:'flex', flexDirection:'row', marginTop:'1rem'}}>
            <div style={{color: '#FED170', marginRight:'5px'}}>[1]</div>
            <div>
            {item.texts.map((text, index) => {
              return (
                <div key={index}>
                  {text}
                </div>
              );
            })}
            </div>
          </div>
          <HighlightOffRoundedIcon onClick={closePopup} className="popup-close-icon"/>
          </div>
        </div>
    )
};

const NestedField = ({ item }) => {
  const [tabView, setTabView] = useState(window.innerWidth < 800);
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [showInfo, setShowInfo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
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
    return (
      <div className="breakdown_nestedField">
        <div className="breakdown_nestedField-title">{item.title}</div>
        <div>{item.scores}</div>
        <div>
          {item.texts.map((text, index) => {
            return (
              <div key={index}>
                {text}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (tabView && !mobileView) {
    //tab view
    return (
      <div
        className={
          showInfo ? "breakdown_nestedField selected" : "breakdown_nestedField"
        }
      >
        {showInfo ? (
          <div>
            {item.texts.map((text, index) => {
              return (
                <div key={index}>
                  {text}
                </div>
              );
            })}
            <sup style={{fontWeight:'600'}} onClick={() => setShowPopup(true)}>[1]</sup>
          </div>
        ) : (
          <div className="breakdown_nestedField-title">{item.title}</div>
        )}
        {showInfo ? (
          <CancelIcon
            onClick={() => setShowInfo(!showInfo)}
            className="info-icon"
          />
        ) : (
          <InfoIcon
            onClick={() => setShowInfo(!showInfo)}
            className="info-icon"
          />
        )}
        {showPopup && <Popup item={item} closePopup={closePopup} />}
      </div>
    );
  } else {
    //mobile-view
    return (
      <div
        className={
          showInfo ? "breakdown_nestedField selected" : "breakdown_nestedField"
        }
      >
        {!showInfo && (
          <div className="breakdown_nestedField-title">{item.title}</div>
        )}
        {!showInfo && (
          <div>{item.scores}</div>
        )}
        {showInfo && (
          <div style={{ gridColumnEnd: "span 2" }}>
            {item.texts.map((text, index) => {
              return (
                <div key={index}>
                  {text}
                </div>
              );
            })}
            <sup style={{fontWeight:'600'}} onClick={() => setShowPopup(true)}>[1]</sup>
          </div>
        )}
        {showInfo ? (
          <CancelIcon
            onClick={() => setShowInfo(!showInfo)}
            className="info-icon"
          />
        ) : (
          <InfoIcon
            onClick={() => setShowInfo(!showInfo)}
            className="info-icon"
          />
        )}
        {showPopup && <Popup item={item} closePopup={closePopup} />}
      </div>
    );
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
        <div className="breakdown_subField-score">{item.mainNestedScore}</div>
        <div
          className={show ? "circle-new-close" : "circle-new"}
          onClick={() => setShow(!show)}
        >
          <i className={show ? "arrowdown-new-close" : "arrowdown-new"}></i>
        </div>
      </div>
      {show &&
        item.subNestedField.map((item, index) => {
          return <NestedField key={index} item={item} />;
        })}
    </div>
  );
};

const Mainfield = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="breakdown_mainField">
      <div
        onClick={() => setShow(!show)}
        className="breakdown_mainField-container"
      >
        <div className="breakdown_mainField-title">{item.mainField}</div>
        <div className="breakdown_mainField-title">{item.mainScore}</div>
        <div
          className={show ? "circle-new-close white" : "circle-new white"}
          onClick={() => setShow(!show)}
        >
          <i
            className={show ? "arrowdown-new-close grey" : "arrowdown-new grey"}
          ></i>
        </div>
      </div>
      <div>
        {show &&
          item.subfield.map((item, index) => {
            return <Subfield key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

const BrandBreakdown = () => {
  return (
    <div className="breakdown_container">
      <div className="breakdown_logo">
        <img src={Logo} className="breakdown_logoImage" />
        <p className="breakdown_logoText">
          48/<span style={{ fontSize: 32 }}>154</span>
        </p>
      </div>
      <div className="breakdown_data-container">
        {field.map((item, index) => (
          <Mainfield key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BrandBreakdown;
