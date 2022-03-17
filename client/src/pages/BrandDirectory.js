import React from "react";
import { Link } from "react-router-dom";
import "../styles/BrandDirectory.css";

const letterArray = {
  A: ["Abercrombie & Fitch", "Aldo", "Aritzia", "Adidas", "American Eagle"],
  B: ["Banana Republic", "Burberry", "Boohoo", "Balenciaga"],
  C: [
    "Canada Goose",
    "Chanel",
    "Converse",
    "Calvin Klein",
    "Christian Dior",
    "Columbia",
    "Champion",
    "Club Monaco",
    "Coach",
  ],
  D: ["Dynamite"],
  E: [],
  F: ["Fila", "Forever 21"],
  G: [
    "Gap",
    "Giorgio Armani",
    "Guess",
    "Garage",
    "Givenchy",
    "Gildan",
    "Gucci",
  ],
  H: ["H&M", "Hermes"],
  I: [],
  J: ["J.Crew"],
  K: ["Kate Spade"],
  L: ["Lacoste", "Lululemon", "Levi's", "Louis Vuitton"],
  M: ["Mango", "Marc Jacobs", "Michael Kors"],
  N: ["Nasty Gal", "New Balance", "Nike"],
  O: ["Old Navy"],
  P: ["Patagonia", "Prada", "PrettyLittleThing"],
  Q: [],
  R: ["Ralph Lauren", "Reebok", "Roots"],
  S: ["Skechers", "Steve Madden"],
  T: ["Ted Baker", "The North Face", "Tommy Hilfiger"],
  U: ["Under Armour", "Uniqlo", "Urban Outfitters"],
  V: ["Vans", "Versace", "Victoria's Secret"],
  W: [],
  X: [],
  Y: [],
  Z: ["Zara"],
};

export default function BrandDirectory() {
  const scrollToBrand = (ele) => {
    const element = document.getElementById(ele);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const setId = (key) => {
    if (key.charCodeAt(0) < 90) {
      for (let i = 1; i < 26; i++) {
        let newKey = String.fromCharCode(key.charCodeAt(0) + i);
        if (letterArray[newKey] && letterArray[newKey].length > 0) {
          return newKey;
        }
      }
    }
  };

  function getLinkClass(brandName) {
    if (
      brandName === "Burberry" ||
      brandName === "Balenciaga" ||
      brandName === "Canada Goose" ||
      brandName === "Chanel" ||
      brandName === "Christian Dior" ||
      brandName === "Coach" ||
      brandName === "Dynamite" ||
      brandName === "Fila" ||
      brandName === "Giorgio Armani " ||
      brandName === "Gucci" ||
      brandName === "Givenchy" ||
      brandName === "Garage" ||
      brandName === "Gildan" ||
      brandName === "Hermes" ||
      brandName === "Hugo Boss" ||
      brandName === "J.Crew" ||
      brandName === "Kate Spade" ||
      brandName === "Lacoste" ||
      brandName === "Louis Vuitton" ||
      brandName === "Mango" ||
      brandName === "Marc Jacobs" ||
      brandName === "Michael Kors" ||
      brandName === "Prada" ||
      brandName === "Roots" ||
      brandName === "Skechers" ||
      brandName === "Ted Baker" ||
      brandName === "Urban Outfitters" ||
      brandName === "Versace" ||
      brandName === "Giorgio Armani"
    ) {
      return "greyed_color";
    }
    return "black_color";
  }

  return (
    <div className="brand_directory">
      <div className="brand_directory_title">
        <p>All Brands - Apparel</p>
      </div>
      <div className="brand_directory_list">
        {Object.keys(letterArray).map((key) => (
          <a id={`#${key}Link`} onClick={() => scrollToBrand(key)}>
            <span
              className={
                key === "E" ||
                key === "I" ||
                key === "Q" ||
                key === "W" ||
                key === "X" ||
                key === "Y"
                  ? "greyed_color"
                  : "black_color"
              }
              style={{ marginLeft: 1, marginRight: 2 }}
            >
              {key}
            </span>
          </a>
        ))}
      </div>
      <div className="brand_directory_wholeList">
        <hr className="hr" id="A"></hr>
        {Object.keys(letterArray).map((key) => (
          <>
            {letterArray[key].length > 0 ? (
              <div>
                <div className="brand_directory_eachRow d-block d-md-flex">
                  {letterArray[key].length > 0 ? (
                    <>
                      <h6 className="letter">{key}</h6>
                      <div className="brand-name-container">
                        {letterArray[key].length > 0 &&
                          letterArray[key].map((val) => (
                            <Link
                              to={"/companies/" + val}
                              className={`col-3 col-md-3 ml-md-0 list_letter ${getLinkClass(
                                val
                              )}`}
                            >
                              {val}
                            </Link>
                          ))}
                      </div>
                    </>
                  ) : null}
                </div>
                <hr className="hr" id={setId(key)}></hr>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}
