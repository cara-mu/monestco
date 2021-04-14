import React, { useState, useEffect, useLayoutEffect } from "react";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';
import "../styles/compareTool-new.css";
import axios from "axios";

const field = [
  {
    mainField: "DIVERSITY & INCLUSION",
    mainScore: [{ score: "" }, { score: "" }, { score: "" }],
    industrialStandard: "",
    subfield: [
      {
        mainNestedField: "Discrimination",
        subNestedField: [
          {
            title: "Prohibits discrimination throughout the organization",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a11 stuff" },
              { text: "a11 stuff" },
              { text: "a11 stuff" },
            ],
          },
          {
            title: "Actively identifies and addresses discrimination",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a12 stuff" },
              { text: "a12 stuff" },
              { text: "a12 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Gender Equality",
        subNestedField: [
          {
            title:
              "Commits to increasing gender diversity throughout the organization",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a21 stuff" },
              { text: "a21 stuff" },
              { text: "a21 stuff" },
            ],
          },
          {
            title:
              "Maintains strong female representation at all levels of leadership",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a22 stuff" },
              { text: "a22 stuff" },
              { text: "a22 stuff" },
            ],
          },
          {
            title: "Ensures equal pay for equal work",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a23 stuff" },
              { text: "a23 stuff" },
              { text: "a23 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Cultural Diversity",
        subNestedField: [
          {
            title:
              "Commits to increasing gender diversity throughout the organization",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a31 stuff" },
              { text: "a31 stuff" },
              { text: "a31 stuff" },
            ],
          },
          {
            title:
              "Maintains diverse ethnic representation at all levels of leadership",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a32 stuff" },
              { text: "a32 stuff" },
              { text: "a32 stuff" },
            ],
          },
          {
            title: "Actively supports BIPOC and under represented communities",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a33 stuff" },
              { text: "a33 stuff" },
              { text: "a33 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Inclusivity",
        subNestedField: [
          {
            title:
              "Fosters an inclusive workplace culture for all types of people",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a41 stuff" },
              { text: "a41 stuff" },
              { text: "a41 stuff" },
            ],
          },
          {
            title: "Prioritizes the mental health and wellbeing of employees",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "a42 stuff" },
              { text: "a42 stuff" },
              { text: "a42 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
    ],
  },
  {
    mainField: "WORKER EXPLOITATION",
    mainScore: [{ score: "" }, { score: "" }, { score: "" }],
    industrialStandard: "",
    subfield: [
      {
        mainNestedField: "Child Labour",
        subNestedField: [
          {
            title:
              "Prohibits the use of child labour throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b11 stuff" },
              { text: "b11 stuff" },
              { text: "b11 stuff" },
            ],
          },
          {
            title:
              "Actively works to identify and prevent child labour violations",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b12 stuff" },
              { text: "b12 stuff" },
              { text: "b12 stuff" },
            ],
          },
          {
            title:
              "Enrolls child labour victims in school after discovering violations",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b13 stuff" },
              { text: "b13 stuff" },
              { text: "b13 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Forced Labour",
        subNestedField: [
          {
            title:
              "Prohibits the use of child labour throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b21 stuff" },
              { text: "b21 stuff" },
              { text: "b21 stuff" },
            ],
          },
          {
            title:
              "Actively works to identify and prevent child labour violations",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b22 stuff" },
              { text: "b22 stuff" },
              { text: "b22 stuff" },
            ],
          },
          {
            title:
              "Supports the recovery of forced labour victims after discovering violations",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b23 stuff" },
              { text: "b23 stuff" },
              { text: "b23 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Living Wage",
        subNestedField: [
          {
            title: "Ensures all factory workers are paid a living wage",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b31 stuff" },
              { text: "b31 stuff" },
              { text: "b31 stuff" },
            ],
          },
          {
            title:
              "Works to (prioritizes) improve wages throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b32 stuff" },
              { text: "b32 stuff" },
              { text: "b32 stuff" },
            ],
          },
          {
            title:
              "Ensures wages and benefits are being paid on time and in full",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b33 stuff" },
              { text: "b33 stuff" },
              { text: "b33 stuff" },
            ],
          },
          {
            title:
              "Guarantees the right to freedom of association and collective bargaining",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b34 stuff" },
              { text: "b34 stuff" },
              { text: "b34 stuff" },
            ],
          },
          {
            title:
              "Advocates for wage progression and fair compensation in the industry",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b35 stuff" },
              { text: "b35 stuff" },
              { text: "b35 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Working Conditions",
        subNestedField: [
          {
            title:
              "Works to (prioritizes) improve factory health and safety conditions",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b41 stuff" },
              { text: "b41 stuff" },
              { text: "b41 stuff" },
            ],
          },
          {
            title: "Ensures workers are not forced to work excessive hours",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b42 stuff" },
              { text: "b42 stuff" },
              { text: "b42 stuff" },
            ],
          },
          {
            title: "Prohibits all forms of harassment or abuse towards workers",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b43 stuff" },
              { text: "b43 stuff" },
              { text: "b43 stuff" },
            ],
          },
          {
            title:
              "Actively works to identify and prevent mistreatment of workers",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b44 stuff" },
              { text: "b44 stuff" },
              { text: "b44 stuff" },
            ],
          },
          {
            title:
              "Compensates mistreated workers after discovering violations",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "b45 stuff" },
              { text: "b45 stuff" },
              { text: "b45 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
    ],
  },
  {
    mainField: "WASTE & POLLUTION",
    mainScore: [{ score: "" }, { score: "" }, { score: "" }],
    industrialStandard: "",
    subfield: [
      {
        mainNestedField: "Air Pollution (GHGs)",
        subNestedField: [
          {
            title: "Commits to using less energy throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c11 stuff" },
              { text: "c11 stuff" },
              { text: "c11 stuff" },
            ],
          },
          {
            title:
              "Commits to reducing greenhouse gas emissions throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c12 stuff" },
              { text: "c12 stuff" },
              { text: "c12 stuff" },
            ],
          },
          {
            title: "Works towards reducing the operational carbon footprint",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c13 stuff" },
              { text: "c13 stuff" },
              { text: "c13 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce manufacturing carbon footprints",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c14 stuff" },
              { text: "c14 stuff" },
              { text: "c14 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Water Pollution & Wastes",
        subNestedField: [
          {
            title: "Commits to using less water throughout the value chain",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c21 stuff" },
              { text: "c21 stuff" },
              { text: "c21 stuff" },
            ],
          },
          {
            title: "Works with suppliers to recycle water and reduce usage",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c22 stuff" },
              { text: "c22 stuff" },
              { text: "c22 stuff" },
            ],
          },
          {
            title:
              "Eliminates use of toxic chemicals in the production of products",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c23 stuff" },
              { text: "c23 stuff" },
              { text: "c23 stuff" },
            ],
          },
          {
            title: "Filters wastewater to avoid contaminating fresh water",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c24 stuff" },
              { text: "c24 stuff" },
              { text: "c24 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Packaging Waste",
        subNestedField: [
          {
            title: "Reduces use of plastic packaging and shopping bags",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c31 stuff" },
              { text: "c31 stuff" },
              { text: "c31 stuff" },
            ],
          },
          {
            title: "Uses recycled plastics and paper packaging materials",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c32 stuff" },
              { text: "c32 stuff" },
              { text: "c32 stuff" },
            ],
          },
          {
            title:
              "Ensures all used packaging can be reused, recycled or composted",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c33 stuff" },
              { text: "c33 stuff" },
              { text: "c33 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce, reuse and recycle all packaging waste",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c34 stuff" },
              { text: "c34 stuff" },
              { text: "c34 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Material Waste",
        subNestedField: [
          {
            title: "Uses recycled materials in the production of products",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c41 stuff" },
              { text: "c41 stuff" },
              { text: "c41 stuff" },
            ],
          },
          {
            title: "Repurposes or donates damaged and excess products",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c42 stuff" },
              { text: "c42 stuff" },
              { text: "c42 stuff" },
            ],
          },
          {
            title:
              "Offers an effective take-back or repair program for customers",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c43 stuff" },
              { text: "c43 stuff" },
              { text: "c43 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce, reuse and recycle all material waste",
            scores: [{ score: "" }, { score: "" }, { score: "" }],
            industrialStandard: "",
            texts: [
              { text: "c44 stuff" },
              { text: "c44 stuff" },
              { text: "c44 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
    ],
  },
  {
    mainField: "ETHICAL SOURCING",
    mainScore: [{ score: "" }, { score: "" }, { score: "" }],
    industrialStandard: "",
    subfield: [
      {
        mainNestedField: "Cotton Farming",
        subNestedField: [],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Deforestation",
        subNestedField: [],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
      {
        mainNestedField: "Animal Welfare",
        subNestedField: [],
        mainNestedScore: [{ score: "" }, { score: "" }, { score: "" }],
        industrialStandard: "",
      },
    ],
  },
];

const ScoreContainer = ({
  score,
  industrialStandard,
  firstLayer,
  secondLayer,
}) => {
  if (score) {
    if (score > industrialStandard) {
      return (
        <div
          className={
            firstLayer
              ? "compare__tool-scoreContainer greensquare border"
              : secondLayer
              ? "compare__tool-scoreContainer greensquare1"
              : "compare__tool-scoreContainer greensquare2"
          }
        >
          {score}/100
        </div>
      );
    } else if (score === industrialStandard) {
      return (
        <div
          className={
            firstLayer
              ? "compare__tool-scoreContainer yellowsquare border"
              : secondLayer
              ? "compare__tool-scoreContainer yellowsquare1"
              : "compare__tool-scoreContainer yellowsquare2"
          }
        >
          {score}/100
        </div>
      );
    } else {
      return (
        <div
          className={
            firstLayer
              ? "compare__tool-scoreContainer orangesquare border"
              : secondLayer
              ? "compare__tool-scoreContainer orangesquare1"
              : "compare__tool-scoreContainer orangesquare2"
          }
        >
          {score}/100
        </div>
      );
    }
  } else {
    return (
      <div
        className={
          firstLayer
            ? "compare__tool-scoreContainer graysquare border"
            : "compare__tool-scoreContainer graysquare"
        }
      />
    );
  }
};

const NestedField = ({ item }) => {
  const [show, setShow] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 600) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div onClick={() => setShow(!show)} className="subField-container">
        <div className="subField-title">{item.mainNestedField}</div>
        {item.mainNestedScore.map((element, index) => {
          if (mobileView && index < 2) {
            return (
              <ScoreContainer
                key={index}
                score={element.score}
                industrialStandard={item.industrialStandard}
                secondLayer
              />
            );
          }
          if (!mobileView) {
            return (
              <ScoreContainer
                key={index}
                score={element.score}
                industrialStandard={item.industrialStandard}
                secondLayer
              />
            );
          }
          return null;
        })}
        {item.subNestedField.length > 0 && (
          <ExpandMoreSharpIcon
          onClick={() => setShow(!show)}
          className={show ? "circle-new-close" : "circle-new"}
        />
        )}
      </div>
      {show &&
        item.subNestedField.map((item, index) => {
          return (
            <div key={index} className="nestedField-container">
              <div className="nestedField-title">
                {item.title}
                <HelpOutlineTwoToneIcon style={{fontSize:'16px', marginLeft:'3px', fill:'#26385A'}} />
              </div>
              {item.scores.map((element, index) => {
                if (mobileView && index < 2) {
                  return (
                    <ScoreContainer
                      key={index}
                      score={element.score}
                      industrialStandard={item.industrialStandard}
                    />
                  );
                }
                if (!mobileView) {
                  return (
                    <ScoreContainer
                      key={index}
                      score={element.score}
                      industrialStandard={item.industrialStandard}
                    />
                  );
                }
                return null;
              })}
            </div>
          );
        })}
    </div>
  );
};

const Subfield = ({ item }) => {
  const [show, setShow] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 600) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="compare__tool-mainField">
      <div className="mainField-container">
        <div className="mainField-title">{item.mainField}</div>
        {item.mainScore.map((element, index) => {
          if (mobileView && index < 2) {
            return (
              <ScoreContainer
                key={index}
                score={element.score}
                industrialStandard={item.industrialStandard}
                firstLayer
              />
            );
          }
          if (!mobileView) {
            return (
              <ScoreContainer
                key={index}
                score={element.score}
                industrialStandard={item.industrialStandard}
                firstLayer
              />
            );
          }
          return null;
        })}
        {item.subfield.length > 0 && (
          <ExpandMoreSharpIcon
            onClick={() => setShow(!show)}
            className={show ? "circle-new-close" : "circle-new"}
          />
        )}
      </div>
      <div>
        {show &&
          item.subfield.map((item, index) => {
            return <NestedField key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

const CompareTool = ({ selectedCompaniesList, removeBrand, fetchBrand }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [inputBrandOne, setInputBrandOne] = useState("");
  const [inputBrandTwo, setInputBrandTwo] = useState("");
  const [inputBrandThree, setInputBrandThree] = useState("");
  const [listBrandOne, setListBrandOne] = useState(false);
  const [listBrandTwo, setListBrandTwo] = useState(false);
  const [listBrandThree, setListBrandThree] = useState(false);
  const [fieldData, setFieldData] = useState(field);

  const handleChangeOne = (e) => {
    setInputBrandOne(e.target.value);
    setListBrandOne(true);
  };

  const handleChangeTwo = (e) => {
    setInputBrandTwo(e.target.value);
    setListBrandTwo(true);
  };

  const handleChangeThree = (e) => {
    setInputBrandThree(e.target.value);
    setListBrandThree(true);
  };

  async function renderData(company, inputIndex) {
    let data = fieldData;
    inputIndex--;
    await axios
      .post(
        "/companydetailsA",
        {},
        {
          params: company,
        }
      )
      .then((resp) => {
        data[0].mainScore[inputIndex].score = resp.data.rows[0]["A"];

        data[0].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A1"];
        data[0].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A11_text"];
        data[0].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A11_score"];
        data[0].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A12_text"];
        data[0].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A12_score"];

        data[0].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A2"];
        data[0].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A21_text"];
        data[0].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A21_score"];
        data[0].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A22_text"];
        data[0].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A22_score"];
        data[0].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["A23_text"];
        data[0].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["A23_score"];

        data[0].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A3"];
        data[0].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A31_text"];
        data[0].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A31_score"];
        data[0].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A32_text"];
        data[0].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A32_score"];
        data[0].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["A33_text"];
        data[0].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["A33_score"];

        data[0].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A4"];
        data[0].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A41_text"];
        data[0].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A41_score"];
        data[0].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A42_text"];
        data[0].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A42_score"];
      });

    await axios
      .post(
        "/companydetailsB",
        {},
        {
          params: company,
        }
      )
      .then((resp) => {
        data[1].mainScore[inputIndex].score = resp.data.rows[0]["B"];

        data[1].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B1"];
        data[1].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B11_text"];
        data[1].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B11_score"];
        data[1].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B12_text"];
        data[1].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B12_score"];
        data[1].subfield[0].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B13_text"];
        data[1].subfield[0].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B13_score"];

        data[1].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B2"];
        data[1].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B21_text"];
        data[1].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B21_score"];
        data[1].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B22_text"];
        data[1].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B22_score"];
        data[1].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B23_text"];
        data[1].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B23_score"];

        data[1].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B3"];
        data[1].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B31_text"];
        data[1].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B31_score"];
        data[1].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B32_text"];
        data[1].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B32_score"];
        data[1].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B33_text"];
        data[1].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B33_score"];
        data[1].subfield[2].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["B34_text"];
        data[1].subfield[2].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["B34_score"];
        data[1].subfield[2].subNestedField[4].texts[inputIndex].text =
          resp.data.rows[0]["B35_text"];
        data[1].subfield[2].subNestedField[4].scores[inputIndex].score =
          resp.data.rows[0]["B35_score"];

        data[1].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B4"];
        data[1].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B41_text"];
        data[1].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B41_score"];
        data[1].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B42_text"];
        data[1].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B42_score"];
        data[1].subfield[3].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B43_text"];
        data[1].subfield[3].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B43_score"];
        data[1].subfield[3].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["B44_text"];
        data[1].subfield[3].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["B44_score"];
        data[1].subfield[3].subNestedField[4].texts[inputIndex].text =
          resp.data.rows[0]["B45_text"];
        data[1].subfield[3].subNestedField[4].scores[inputIndex].score =
          resp.data.rows[0]["B45_score"];
      });

    await axios
      .post(
        "/companydetailsC",
        {},
        {
          params: company,
        }
      )
      .then((resp) => {
        data[2].mainScore[inputIndex].score = resp.data.rows[0]["C"];

        data[2].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C1"];
        data[2].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C11_text"];
        data[2].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C11_score"];
        data[2].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C12_text"];
        data[2].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C12_score"];
        data[2].subfield[0].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C13_text"];
        data[2].subfield[0].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C13_score"];
        data[2].subfield[0].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C14_text"];
        data[2].subfield[0].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C14_score"];

        data[2].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C2"];
        data[2].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C21_text"];
        data[2].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C21_score"];
        data[2].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C22_text"];
        data[2].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C22_score"];
        data[2].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C23_text"];
        data[2].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C23_score"];
        data[2].subfield[1].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C24_text"];
        data[2].subfield[1].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C24_score"];

        data[2].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C3"];
        data[2].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C31_text"];
        data[2].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C31_score"];
        data[2].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C32_text"];
        data[2].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C32_score"];
        data[2].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C33_text"];
        data[2].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C33_score"];
        data[2].subfield[2].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C34_text"];
        data[2].subfield[2].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C34_score"];

        data[2].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C4"];
        data[2].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C41_text"];
        data[2].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C41_score"];
        data[2].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C42_text"];
        data[2].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C42_score"];
        data[2].subfield[3].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C43_text"];
        data[2].subfield[3].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C43_score"];
        data[2].subfield[3].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C44_text"];
        data[2].subfield[3].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C44_score"];
      });

    await axios
      .post(
        "/companydetailsD",
        {},
        {
          params: company,
        }
      )
      .then((resp) => {
        data[3].mainScore[inputIndex].score = resp.data.rows[0]["D"];

        data[3].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D1"];

        data[3].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D2"];

        data[3].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D3"];
      });

    setFieldData(data);
    if (inputIndex === 0) {
      setInputBrandOne(company);
      setListBrandOne(false);
    }
    if (inputIndex === 1) {
      setInputBrandTwo(company);
      setListBrandTwo(false);
    }
    if (inputIndex === 2) {
      setInputBrandThree(company);
      setListBrandThree(false);
    }
  }

  useEffect(() => {
    axios.get("/allcompanies").then((resp) => {
      const allcompanies = [];
      for (var i = 0; i < resp.data.rows.length; i++) {
        allcompanies.push(resp.data.rows[i].name);
      }
      setCompaniesList(allcompanies);
      fetchBrand(allcompanies);
    });

    axios.get("/industry").then((resp) => {
      let data = fieldData;

      data[0].industrialStandard = resp.data.rows[0]["A"];
      data[1].industrialStandard = resp.data.rows[0]["B"];
      data[2].industrialStandard = resp.data.rows[0]["C"];
      data[3].industrialStandard = resp.data.rows[0]["D"];

      data[0].subfield[0].industrialStandard = resp.data.rows[0]["A1"];
      data[0].subfield[1].industrialStandard = resp.data.rows[0]["A2"];
      data[0].subfield[2].industrialStandard = resp.data.rows[0]["A3"];
      data[0].subfield[3].industrialStandard = resp.data.rows[0]["A4"];

      data[0].subfield[0].subNestedField[0].industrialStandard =
        resp.data.rows[0]["A11"];
      data[0].subfield[0].subNestedField[1].industrialStandard =
        resp.data.rows[0]["A12"];
      data[0].subfield[1].subNestedField[0].industrialStandard =
        resp.data.rows[0]["A21"];
      data[0].subfield[1].subNestedField[1].industrialStandard =
        resp.data.rows[0]["A22"];
      data[0].subfield[1].subNestedField[2].industrialStandard =
        resp.data.rows[0]["A23"];
      data[0].subfield[2].subNestedField[0].industrialStandard =
        resp.data.rows[0]["A31"];
      data[0].subfield[2].subNestedField[1].industrialStandard =
        resp.data.rows[0]["A32"];
      data[0].subfield[2].subNestedField[2].industrialStandard =
        resp.data.rows[0]["A33"];
      data[0].subfield[3].subNestedField[0].industrialStandard =
        resp.data.rows[0]["A41"];
      data[0].subfield[3].subNestedField[1].industrialStandard =
        resp.data.rows[0]["A42"];

      data[1].subfield[0].industrialStandard = resp.data.rows[0]["B1"];
      data[1].subfield[1].industrialStandard = resp.data.rows[0]["B2"];
      data[1].subfield[2].industrialStandard = resp.data.rows[0]["B3"];
      data[1].subfield[3].industrialStandard = resp.data.rows[0]["B4"];

      data[1].subfield[0].subNestedField[0].industrialStandard =
        resp.data.rows[0]["B11"];
      data[1].subfield[0].subNestedField[1].industrialStandard =
        resp.data.rows[0]["B12"];
      data[1].subfield[0].subNestedField[2].industrialStandard =
        resp.data.rows[0]["B13"];

      data[1].subfield[1].subNestedField[0].industrialStandard =
        resp.data.rows[0]["B21"];
      data[1].subfield[1].subNestedField[1].industrialStandard =
        resp.data.rows[0]["B22"];
      data[1].subfield[1].subNestedField[2].industrialStandard =
        resp.data.rows[0]["B23"];

      data[1].subfield[2].subNestedField[0].industrialStandard =
        resp.data.rows[0]["B31"];
      data[1].subfield[2].subNestedField[1].industrialStandard =
        resp.data.rows[0]["B32"];
      data[1].subfield[2].subNestedField[2].industrialStandard =
        resp.data.rows[0]["B33"];
      data[1].subfield[2].subNestedField[3].industrialStandard =
        resp.data.rows[0]["B34"];
      data[1].subfield[2].subNestedField[4].industrialStandard =
        resp.data.rows[0]["B35"];

      data[1].subfield[3].subNestedField[0].industrialStandard =
        resp.data.rows[0]["B41"];
      data[1].subfield[3].subNestedField[1].industrialStandard =
        resp.data.rows[0]["B42"];
      data[1].subfield[3].subNestedField[2].industrialStandard =
        resp.data.rows[0]["B43"];
      data[1].subfield[3].subNestedField[3].industrialStandard =
        resp.data.rows[0]["B44"];
      data[1].subfield[3].subNestedField[4].industrialStandard =
        resp.data.rows[0]["B45"];

      data[2].subfield[0].industrialStandard = resp.data.rows[0]["C1"];
      data[2].subfield[1].industrialStandard = resp.data.rows[0]["C2"];
      data[2].subfield[2].industrialStandard = resp.data.rows[0]["C3"];
      data[2].subfield[3].industrialStandard = resp.data.rows[0]["C4"];

      data[2].subfield[0].subNestedField[0].industrialStandard =
        resp.data.rows[0]["C11"];
      data[2].subfield[0].subNestedField[1].industrialStandard =
        resp.data.rows[0]["C12"];
      data[2].subfield[0].subNestedField[2].industrialStandard =
        resp.data.rows[0]["C13"];
      data[2].subfield[0].subNestedField[3].industrialStandard =
        resp.data.rows[0]["C14"];

      data[2].subfield[1].subNestedField[0].industrialStandard =
        resp.data.rows[0]["C21"];
      data[2].subfield[1].subNestedField[1].industrialStandard =
        resp.data.rows[0]["C22"];
      data[2].subfield[1].subNestedField[2].industrialStandard =
        resp.data.rows[0]["C23"];
      data[2].subfield[1].subNestedField[3].industrialStandard =
        resp.data.rows[0]["C24"];

      data[2].subfield[2].subNestedField[0].industrialStandard =
        resp.data.rows[0]["C31"];
      data[2].subfield[2].subNestedField[1].industrialStandard =
        resp.data.rows[0]["C32"];
      data[2].subfield[2].subNestedField[2].industrialStandard =
        resp.data.rows[0]["C33"];
      data[2].subfield[2].subNestedField[3].industrialStandard =
        resp.data.rows[0]["C34"];

      data[2].subfield[3].subNestedField[0].industrialStandard =
        resp.data.rows[0]["C41"];
      data[2].subfield[3].subNestedField[1].industrialStandard =
        resp.data.rows[0]["C42"];
      data[2].subfield[3].subNestedField[2].industrialStandard =
        resp.data.rows[0]["C43"];
      data[2].subfield[3].subNestedField[3].industrialStandard =
        resp.data.rows[0]["C44"];

      data[3].subfield[0].industrialStandard = resp.data.rows[0]["D1"];
      data[3].subfield[1].industrialStandard = resp.data.rows[0]["D1"];
      data[3].subfield[2].industrialStandard = resp.data.rows[0]["D1"];
    });
  }, []);

  useEffect(() => {
    selectedCompaniesList.forEach((item, index) => {
      item && renderData(item, index + 1);
    });
  }, [selectedCompaniesList]);

  return (
    <div className="compare__tool-container">
      <div className="compare-input-container">
        <input
          placeholder="Type the brand"
          value={inputBrandOne}
          onChange={handleChangeOne}
          onBlur={() => setTimeout(() => setListBrandOne(false), 200)}
        />
        <input
          placeholder="Type the brand"
          value={inputBrandTwo}
          onChange={handleChangeTwo}
          onBlur={() => setTimeout(() => setListBrandTwo(false), 200)}
        />
        <input
          placeholder="Type the brand"
          value={inputBrandThree}
          onChange={handleChangeThree}
          onBlur={() => setTimeout(() => setListBrandThree(false), 200)}
        />
        <div className="compare-companyList-container">
          {listBrandOne && (
            <div className="compare-companyList list-1">
              {companiesList.map((item, index) => {
                return (
                  <div key={index} onClick={() => renderData(item, 1)}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
          {listBrandTwo && (
            <div className="compare-companyList list-2">
              {companiesList.map((item, index) => {
                return (
                  <div key={index} onClick={() => renderData(item, 2)}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
          {listBrandThree && (
            <div className="compare-companyList list-3">
              {companiesList.map((item, index) => {
                return (
                  <div key={index} onClick={() => renderData(item, 3)}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {selectedCompaniesList.map((item, index) => {
          return (
            <div key={index} className="brand-button-container">
              <span
                className={item ? "brand-button-close" : "diplay-none"}
                onClick={() => removeBrand(index)}
              >
                &#10006;
              </span>
              <span className={item ? "brand-name" : "brand-name-placeholder"}>
                {item ? item : "Select the brand"}
              </span>
            </div>
          );
        })}
      </div>
      {fieldData.map((item, index) => (
        <Subfield key={index} item={item} />
      ))}
    </div>
  );
};

export default CompareTool;
