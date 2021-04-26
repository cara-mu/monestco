import React, { useEffect, useState, useLayoutEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../styles/Comparison.css";
//import CompareTool from '../components/CompareTool';
import CompareTool from "../components/CompareTool-new";

import CompareSearch from "../components/CompareSearch";

const Comparison = () => {
  const [companyList, setCompanyList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCompaniesList, setSelectedCompaniesList] = useState(["","",""]);
  const [ mobileView, setMobileView ] = useState(window.innerWidth < 600)

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowList(true);
  };

  const addBrand = (item) => {
      setSelectedCompaniesList((selectedCompaniesList) => {
        if(!selectedCompaniesList[0]) {
            selectedCompaniesList[0] = item;
        } else if(!selectedCompaniesList[1]) {
            selectedCompaniesList[1] = item;
        } else if(!selectedCompaniesList[2]) {
            selectedCompaniesList[2] = item;
        }
            return [...selectedCompaniesList];
      })
      setShowList(false);
      setInputValue('');
  };

  const fetchBrand = (companyList) => {
    setCompanyList(companyList);
  };

  const removeBrand = (index) => {
    setSelectedCompaniesList((selectedCompaniesList) => {
      selectedCompaniesList[index] = "";
      return [...selectedCompaniesList];
    });
  };

  useLayoutEffect(() => {
    function updateSize() {
      if(window.innerWidth > 600) {
        setMobileView(false)
      } else {
        setMobileView(true)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if(mobileView && selectedCompaniesList.length >= 3) {
      setSelectedCompaniesList(selectedCompaniesList => {
        selectedCompaniesList.pop()
        return [...selectedCompaniesList];
      })
    }
    if(!mobileView && selectedCompaniesList.length <= 2) {
      setSelectedCompaniesList(selectedCompaniesList => {
        selectedCompaniesList.push('')
        return [...selectedCompaniesList];
      })
    }
    }, [mobileView, selectedCompaniesList])



  return (
    <div>
      <Grid container>
        {/* <Grid item xs={4} style={{border: 'solid'}}> */}
        <Row
          style={{ marginLeft: "6%", width: "17%", paddingTop: "3%" }}
          className="row-1"
        >
          {/* <Col style={{marginTop: '25%', marginLeft: '50%', border: 'solid', paddingRight: '20%'}}> */}
          <span style={{ marginTop: "" }}>
            <p id="brands" style={{ marginTop: "43%" }}>
              Brands
            </p>
            <p
              style={{
                marginBottom: "8%",
                color: "#4F4F4F",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              Type or click the brands that you want to learn more about
            </p>
            <CompareSearch />
          </span>
          {/* </Col> */}
        </Row>
        {/* </Grid> */}
        {/* <Grid item xs={8} style={{border: 'solid'}}> */}
        <Row className="row-2">
          <div className="apparel-container">
            <div
              style={{
                textAlign: "center",
                marginTop: "14%",
                marginBottom: "2%",
              }}
            >
              <p id="apparel">Apparel Comparison Chart</p>
              <p style={{ lineHeight: "23px" }}>
                The percentages represent the score brands received based on our
                methodology.
              </p>
              <p>
                The higher the percentage, the better the brand is at addressing
                the issue.
              </p>
              <p id="colors">
                The colors represent the brand's performance benchmarked to
                industry standards.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <span id="abvavg"></span>
              <span className="avgtext">
                <span style={{ fontWeight: "bold" }}>Above</span> Average
              </span>
              <span id="avg"></span>
              <span className="avgtext">Average</span>
              <span id="blwavg"></span>
              <span className="avgtext">
                <span style={{ fontWeight: "bold" }}>Below</span> Average
              </span>
            </div>
          </div>
          {/* </Grid> */}
          <div className="mobile-search-box">
            <input
              placeholder="Search All Brands"
              value={inputValue}
              onChange={handleChange}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <i
              className="mobile-search-box-arrow"
              onClick={() => setShowList(!showList)}
            ></i>
            {showList && (
              <div className="mobile-search-companyList">
                {companyList.map((item, index) => {
                  return (
                    <div key={index} onClick={() => addBrand(item)}>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <CompareTool
            selectedCompaniesList={selectedCompaniesList}
            fetchBrand={fetchBrand}
            removeBrand={removeBrand}
          />
        </Row>
      </Grid>
    </div>
  );
};

export default Comparison;
