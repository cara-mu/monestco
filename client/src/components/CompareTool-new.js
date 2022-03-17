import React, { useState, useEffect, useLayoutEffect } from "react";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import HelpOutlineTwoToneIcon from "@material-ui/icons/HelpOutlineTwoTone";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "../styles/compareTool-new.css";
import axios from "axios";
import {AiOutlineClose} from 'react-icons/ai';

const field = [
  {
    mainField: "DIVERSITY & INCLUSION",
    mainScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
    scoreDenominator: 100,
    industrialStandard: [],
    totalScore: 100,
    subfield: [
      {
        mainNestedField: "Discrimination",
        scoreDenominator : 16,
        subNestedField: [
          {
            title: "Prohibits discrimination",
            popupText: "Non-discriminatory policies are set and measures are taken to prevent bias in hiring and promotions.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            scoreDenominator : 6,
            industrialStandard: [40],
            totalScore: 6,
            texts: [
              { text: "a11 stuff" },
              { text: "a11 stuff" },
              { text: "a11 stuff" },
            ],
          },
          {
            title: "Identifies and addresses discrimination concerns",
            popupText: "Employee hotline channels are offered and actions are taken to address violations.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            scoreDenominator : 10,
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "a12 stuff" },
              { text: "a12 stuff" },
              { text: "a12 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 16,
      },
      {
        mainNestedField: "Gender Equality",
        scoreDenominator : 32,
        subNestedField: [
          {
            title:
              "Commits to improving gender equality",
              popupText: "Goals are set and initiatives are taken to increase female recruitment, retention and advancement.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            scoreDenominator : 6,
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "a21 stuff" },
              { text: "a21 stuff" },
              { text: "a21 stuff" },
            ],
          },
          {
            title:
              "Has strong female representation in leadership positions",
              popupText: "Senior management, executive, and board committee positions are filled with a strong representation of women.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            scoreDenominator : 16,
            industrialStandard: [],
            totalScore: 16,
            texts: [
              { text: "a22 stuff" },
              { text: "a22 stuff" },
              { text: "a22 stuff" },
            ],
          },
          {
            title: "Ensures equal pay for equal work",
            popupText: "Actions are taken to achieve pay parity and progress is published on current gender wage gaps for hourly and bonus pay.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            scoreDenominator : 10,
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "a23 stuff" },
              { text: "a23 stuff" },
              { text: "a23 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 32,
      },
      {
        mainNestedField: "Cultural Diversity",
        scoreDenominator : 16,
        subNestedField: [
          {
            title:
              "Commits to increasing cultural diversity",
              popupText: "Goals are set and initiatives are taken to increase BIPOC recruitment, retention and advancement.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "a31 stuff" },
              { text: "a31 stuff" },
              { text: "a31 stuff" },
            ],
          },
          {
            title:
              "Has diverse ethnic representation in leadership positions",
            popupText: "Senior management, executive, and board committee positions are filled with ethnically diverse representation.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 14,
            texts: [
              { text: "a32 stuff" },
              { text: "a32 stuff" },
              { text: "a32 stuff" },
            ],
          },
          {
            title: "Supports BIPOC and marginalized communities",
            popupText: "Initiatives are taken to internally and externally support BIPOC employees and the community at large.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "a33 stuff" },
              { text: "a33 stuff" },
              { text: "a33 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 32,
      },
      {
        mainNestedField: "Inclusivity",
        subNestedField: [
          {
            title:
              "Fosters an inclusive workplace for LGBTQ+ employees",
              popupText: "Initiatives are taken to internally and externally support LGBTQ+ employees and the community at large.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "a41 stuff" },
              { text: "a41 stuff" },
              { text: "a41 stuff" },
            ],
          },
          {
            title: "Supports the growth of employees with disabilities",
            popupText: "Actions are taken to increase recruitment of employees with disabilities, provide accomodation and train store employees.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "a42 stuff" },
              { text: "a42 stuff" },
              { text: "a42 stuff" },
            ],
          },
          {
            title: "Promotes body positivity and inclusivity to consumers",
            popupText: "Efforts are made to ensure marketing campaigns promote diversity and product designs are inclusive to all sizes. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            texts: [
              { text: "a43 stuff" },
              { text: "a43 stuff" },
              { text: "a43 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 20,
      },
    ],
  },
  {
    mainField: "WORKER EXPLOITATION",
    mainScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
    industrialStandard: [],
    totalScore: 100,
    subfield: [
      {
        mainNestedField: "Child Labour",
        subNestedField: [
          {
            title:
              "Prohibits the use of child labour",
              popupText: "Policies, vetting processes, and corrective action plans are implemented to prevent the use of child labour.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "b11 stuff" },
              { text: "b11 stuff" },
              { text: "b11 stuff" },
            ],
          },
          {
            title:
              "Identifies and prevents child labour violations",
              popupText: "Suppliers are audited, grievance mechanisms are offered, and the supply chain is traced to identify potential violations.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "b12 stuff" },
              { text: "b12 stuff" },
              { text: "b12 stuff" },
            ],
          },
          {
            title:
              "Enrolls child labour victims in educational programs",
            popupText: "Effective remediation policies and processes are implemented to support child labourers if violations occur.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "b13 stuff" },
              { text: "b13 stuff" },
              { text: "b13 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 18,
      },
      {
        mainNestedField: "Forced Labour",
        subNestedField: [
          {
            title:
              "Prohibits the use of forced labour",
              popupText: "Policies, vetting processes, and corrective action plans are implemented to prevent the use of forced labour.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "b21 stuff" },
              { text: "b21 stuff" },
              { text: "b21 stuff" },
            ],
          },
          {
            title:
              "Identifies and prevents forced labour violations",
              popupText: "Suppliers are audited, grievance mechanisms are offered, and the supply chain is traced to identify potential violations.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "b22 stuff" },
              { text: "b22 stuff" },
              { text: "b22 stuff" },
            ],
          },
          {
            title:
              "Supports the recovery of forced labour victims",
              popupText: "Effective remediation policies and processes are implemented to support child labourers if violations occur.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "b23 stuff" },
              { text: "b23 stuff" },
              { text: "b23 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 18,
      },
      {
        mainNestedField: "Living Wage",
        subNestedField: [
          {
            title: "Pays all factory workers a living wage",
            popupText: "Supplier policies and responsible purchasing practices are adopted to facilitate living wage payments for factory workers. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "b31 stuff" },
              { text: "b31 stuff" },
              { text: "b31 stuff" },
            ],
          },
          {
            title:
              "Commits to fair compensation and higher wages",
              popupText: "Living wage benchmarks are calculated, goals are set, and initiatives are taken to advocate for wage progression in the industry.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 14,
            texts: [
              { text: "b32 stuff" },
              { text: "b32 stuff" },
              { text: "b32 stuff" },
            ],
          },
          {
            title:
              "Pays wages and benefits on time and in full",
              popupText: "Policies and assesssment processes are implemented to ensure workers are paid on time and in full.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "b33 stuff" },
              { text: "b33 stuff" },
              { text: "b33 stuff" },
            ],
          },
          {
            title:
              "Guarantees the right to freedom of association",
              popupText: "Policies and processes are implemented to ensure workers have the right to freedom of association and collective bargaining. ",            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "b34 stuff" },
              { text: "b34 stuff" },
              { text: "b34 stuff" },
            ],
          },
          // {
          //   title:
          //     "Advocates for wage progression and fair compensation in the industry",
          //     popupText: "Non-discriminatory policies are set and measures are taken to prevent bias in hiring and promotions.",
          //   scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
          //   industrialStandard: [],
          //   texts: [
          //     { text: "b35 stuff" },
          //     { text: "b35 stuff" },
          //     { text: "b35 stuff" },
          //   ],
          // },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 34,
      },
      {
        mainNestedField: "Working Conditions",
        subNestedField: [
          {
            title:
              "Prioritizes factory health and safety conditions",
              popupText: "Standards are set and initiatives are taken to improve the health and safety conditions of factories.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "b41 stuff" },
              { text: "b41 stuff" },
              { text: "b41 stuff" },
            ],
          },
          {
            title: "Prohibits excessive work hours",
            popupText: "Supplier policies and responsible purchasing practices are adopted to ensure workers are not subject to excessive working hours.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "b42 stuff" },
              { text: "b42 stuff" },
              { text: "b42 stuff" },
            ],
          },
          {
            title: "Prohibits all forms of harassment or abuse",
            popupText: "Policies, vetting processes, and corrective action plans are implemented to prevent harassment or abuse towards workers.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "b43 stuff" },
              { text: "b43 stuff" },
              { text: "b43 stuff" },
            ],
          },
          {
            title:
              "Compensates and supports mistreated workers",
            popupText: "Effective remediation policies and processes are implemented to compensate mistreated workers if violations occur.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "b44 stuff" },
              { text: "b44 stuff" },
              { text: "b44 stuff" },
            ],
          },
          // {
          //   title:
          //     "Compensates mistreated workers after discovering violations",
          //   scores: [{ score: "" }, { score: "" }, { score: "" }],
          //   industrialStandard: "",
          //   texts: [
          //     { text: "b45 stuff" },
          //     { text: "b45 stuff" },
          //     { text: "b45 stuff" },
          //   ],
          // },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 30,
      },
    ],
  },
  {
    mainField: "WASTE & POLLUTION",
    mainScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
    industrialStandard: [],
    totalScore: 100,
    subfield: [
      {
        mainNestedField: "Air Pollution",
        subNestedField: [
          {
            title: "Commits to reducing energy consumption",
            popupText: "Commitments are made to track and reduce energy consumption across the entire value chain. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c11 stuff" },
              { text: "c11 stuff" },
              { text: "c11 stuff" },
            ],
          },
          {
            title:
              "Commits to reducing greenhouse gas emissions",
            popupText: "Commitments are made to track and reduce greenhouse gas emissions across the entire value chain. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "c12 stuff" },
              { text: "c12 stuff" },
              { text: "c12 stuff" },
            ],
          },
          {
            title: "Works towards reducing the operational carbon footprint",
            popupText: "Initiatives are taken to increase renewable energy use and energy efficiency in retail stores and corporate offices.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "c13 stuff" },
              { text: "c13 stuff" },
              { text: "c13 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce manufacturing pollution",
            popupText: "Supply chain initiatives are taken reduce energy use and emissions throughout the production process.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c14 stuff" },
              { text: "c14 stuff" },
              { text: "c14 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 28,
      },
      {
        mainNestedField: "Water Pollution & Waste",
        subNestedField: [
          {
            title: "Commits to reducing water consumption",
            popupText: "Commitments are made to track and reduce water consumption throughout the supply chain. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c21 stuff" },
              { text: "c21 stuff" },
              { text: "c21 stuff" },
            ],
          },
          {
            title: "Works with suppliers to reduce water waste",
            popupText: "Supply chain initiatives are taken to reduce, reuse, and recycle water throughout the production process. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "c22 stuff" },
              { text: "c22 stuff" },
              { text: "c22 stuff" },
            ],
          },
          {
            title:
              "Eliminates use of hazardous chemicals in products",
            popupText: "Chemical management initiatives are taken to eliminate hazardous chemical usage throughout the production process.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c23 stuff" },
              { text: "c23 stuff" },
              { text: "c23 stuff" },
            ],
          },
          {
            title: "Filters wastewater to prevent freshwater pollution",
            popupText: "Wastewater management intiaitives are taken to prevent discharged water from polluting fresh water supplies.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c24 stuff" },
              { text: "c24 stuff" },
              { text: "c24 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 22,
      },
      {
        mainNestedField: "Packaging Waste",
        subNestedField: [
          {
            title: "Does not use plastic bags and packaging",
            popupText: "Goals are set and initiatives are taken towards eliminating the use of plastic in packaging.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c31 stuff" },
              { text: "c31 stuff" },
              { text: "c31 stuff" },
            ],
          },
          {
            title: "Uses recycled packaging materials",
            popupText: "Goals are set towards increasing use of recycled packaging to reduce the environmental impacts of producing new materials.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "c32 stuff" },
              { text: "c32 stuff" },
              { text: "c32 stuff" },
            ],
          },
          {
            title:
              "Ensures packaging is reused, recycled or composted",
            popupText: "Actions are taken towards increasing use of packaging that can be reused, easily recycled or composted.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "c33 stuff" },
              { text: "c33 stuff" },
              { text: "c33 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce packaging waste",
            popupText: "Initiatives are taken to reduce, reuse, and recycle packaging throughout the distribution process to reduce packaging waste.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "c34 stuff" },
              { text: "c34 stuff" },
              { text: "c34 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 22,
      },
      {
        mainNestedField: "Material Waste",
        subNestedField: [
          {
            title: "Uses recycled materials in products",
            popupText: "Commitments are made towards increasing use of recycled synthetic materials to reduce micorfibre pollution.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [
              { text: "c41 stuff" },
              { text: "c41 stuff" },
              { text: "c41 stuff" },
            ],
          },
          {
            title: "Repurposes damaged and excess products",
            popupText: "Excess unsold and damaged products are repurposed or recycled as inputs in the production process to reduce material use. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [
              { text: "c42 stuff" },
              { text: "c42 stuff" },
              { text: "c42 stuff" },
            ],
          },
          {
            title:
              "Offers consumer take-back or repair programs",
            popupText: "Effective take-back and repair programs are offered to extend product life and reduce over-consumption.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 4,
            texts: [
              { text: "c43 stuff" },
              { text: "c43 stuff" },
              { text: "c43 stuff" },
            ],
          },
          {
            title:
              "Works with suppliers to reduce material waste",
            popupText: "Initiatives are taken to reduce, reuse, and recycle materials throughout the production process to reduce material waste.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [
              { text: "c44 stuff" },
              { text: "c44 stuff" },
              { text: "c44 stuff" },
            ],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 28,
      },
    ],
  },
  {
    mainField: "ETHICAL SOURCING",
    mainScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
    industrialStandard: [],
    totalScore: 100,
    subfield: [
      {
        mainNestedField: "Cotton Farming",
        subNestedField: [
          {
            title: "Uses sustainably produced cotton",
            popupText: "Commitments are made to use certified sustainable, organic or recycled cotton to ensure sourcing from ethical producers.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 18,
            texts: [{ text: "d11 stuff" }, { text: "d11" }, { text: "d11" }],
          },
          {
            title: "Advocates against unethical farming practices",
            popupText: "Actions are taken to invest in the sustainability of cotton production and prevent sourcing from countries with high-risk of forced labour.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [{ text: "d12 stuff" }, { text: "d12" }, { text: "d12" }],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 26,
      },
      {
        mainNestedField: "Deforestation",
        subNestedField: [
          {
            title: "Uses sustainably procured forest-based fabrics",
            popupText: "Commitments are made to use certified sustainable or recycled man-made cellulosics (MMC) to prevent deforestation.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 12,
            texts: [{ text: "d21 stuff" }, { text: "d21" }, { text: "d21" }],
          },
          {
            title: "Uses sustainably procured paper materials",
            popupText: "Commitments are made to use certified sustainable or recycled paper materials to prevent deforestation.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [{ text: "d22 stuff" }, { text: "d22" }, { text: "d22" }],
          },
          {
            title: "Protects forests from deforestation",
            popupText: "Actions are taken to fight deforestation and prevent sourcing from ancient and endangered forests.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 8,
            texts: [{ text: "d23 stuff" }, { text: "d23" }, { text: "d23" }],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 28,
      },
      {
        mainNestedField: "Animal Welfare",
        subNestedField: [
          {
            title: "Prohibits animal cruelty",
            popupText: "Policies and ethical sourcing practices are implemented to ensure animals are treated humanely throughout the value chain.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 6,
            texts: [{ text: "d31 stuff" }, { text: "d31" }, { text: "d31" }],
          },
          {
            title: "Uses sustainably procured leather",
            popupText: "Commitments are made to use certified sustainable or recycled leather from chrome-free tanneries and by-products of the meat industry.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [{ text: "d32 stuff" }, { text: "d32" }, { text: "d32" }],
          },
          {
            title: "Uses sustainably procured fur",
            popupText: "Commitments are made to use certified sustainable or recycled fur, or policies banning the use of fur are implemented. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [{ text: "d33 stuff" }, { text: "d33" }, { text: "d33" }],
          },
          {
            title: "Uses sustainably procured wool",
            popupText:
              "Commitments are made to use certified sustainable or recycled wool to protect sheep welfare and prevent mulesing practices.",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [{ text: "d34 stuff" }, { text: "d34" }, { text: "d34" }],
          },
          {
            title: "Uses sustainably procured down",
            popupText:
              "Commitments are made to use certified sustainable or recycled down to ensure birds are not force-fed or live plucked. ",
            scores: [{ score: -1 }, { score: -1 }, { score: -1 }],
            industrialStandard: [],
            totalScore: 10,
            texts: [{ text: "d35 stuff" }, { text: "d35" }, { text: "d35" }],
          },
        ],
        mainNestedScore: [{ score: -1 }, { score: -1 }, { score: -1 }],
        industrialStandard: [],
        totalScore: 46,
      },
    ],
  },
];

const ComparePopup = ({ title, popupText, handleClose }) => {
  return (
    <div className="compare-popup">
      <div className="compare-popup-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <div className="compare-popup-title">{title}</div>
          <div className="compare-popup-text">{popupText}</div>
        </div>
        <HighlightOffRoundedIcon
          onClick={handleClose}
          className="popup-close-icon"
        />
      </div>
    </div>
  );
};

const LearnMorePopup = ({ learnMoreText, tabView, setShowLearnMoreText }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="compare-learn-more"
        onClick={() =>
          tabView ? setShowPopup(true) : setShowLearnMoreText(true)
        }
      >
        Learn More
        <ChevronRightIcon />
      </div>
      {tabView && showPopup && (
        <ComparePopup
          title="Learn More"
          popupText={learnMoreText.text}
          handleClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

const ScoreContainer = ({
  denominator,
  score,
  industrialStandard,
  totalScore,
  firstLayer,
  secondLayer,
  learnMoreText,
  inputBrandOne,
  inputBrandTwo,
  inputBrandThree
}) => {  
  const [showLearnMoreText, setShowLearnMoreText] = useState(false);
  const [tabView, setTabView] = useState(false);
  
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

  if (score >=0) {
    console.log(score);
    console.log(industrialStandard[0]);
    console.log(industrialStandard[1]);
    if (score > industrialStandard[1]) {
      return (
        <div className={`compare-card-container ${!firstLayer && !secondLayer && "greensquare2"}`}>
          {!showLearnMoreText && (
            <div
              className={
                firstLayer
                  ? "compare__tool-scoreContainer greensquare border"
                  : secondLayer
                  ? "compare__tool-scoreContainer greensquare1"
                  : "compare__tool-scoreContainer card-front greensquare2"
              }
            >
              {score}/{totalScore}
              {!firstLayer && !secondLayer && (
                <LearnMorePopup
                  learnMoreText={learnMoreText}
                  tabView={tabView}
                  setShowLearnMoreText={setShowLearnMoreText}
                />
              )}
            </div>
          )}
          {!firstLayer && !secondLayer && showLearnMoreText && (
            <div className="card-back">
              <ChevronLeftIcon
                onClick={() => setShowLearnMoreText(false)}
                style={{ cursor: "pointer" }}
              />
              {learnMoreText.text}
            </div>
          )}
        </div>
      );
      // g
    } else if (score < industrialStandard[1] && score > industrialStandard[0]) {
      return (
        <div className={`compare-card-container ${!firstLayer && !secondLayer && "yellowsquare2"}`}>
          {!showLearnMoreText && (
            <div
              className={
                firstLayer
                  ? "compare__tool-scoreContainer yellowsquare border"
                  : secondLayer
                  ? "compare__tool-scoreContainer yellowsquare1"
                  : "compare__tool-scoreContainer card-front yellowsquare2"
              }
            >
              {score}/{totalScore}
              {!firstLayer && !secondLayer && (
                <LearnMorePopup
                  learnMoreText={learnMoreText}
                  tabView={tabView}
                  setShowLearnMoreText={setShowLearnMoreText}
                />
              )}
            </div>
          )}
          {!firstLayer && !secondLayer && showLearnMoreText && (
            <div className="card-back">
              <ChevronLeftIcon
                onClick={() => setShowLearnMoreText(false)}
                style={{ cursor: "pointer" }}
              />
              {learnMoreText.text}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className={`compare-card-container ${!firstLayer && !secondLayer && "orangesquare2"}`}>
          {!showLearnMoreText && (
            <div
              className={
                firstLayer
                  ? "compare__tool-scoreContainer orangesquare border"
                  : secondLayer
                  ? "compare__tool-scoreContainer orangesquare1"
                  : "compare__tool-scoreContainer card-front orangesquare2"
              }
            >
              {score}/{totalScore}
              {!firstLayer && !secondLayer && (
                <LearnMorePopup
                  learnMoreText={learnMoreText}
                  tabView={tabView}
                  setShowLearnMoreText={setShowLearnMoreText}
                />
              )}
            </div>
          )}
          {!firstLayer && !secondLayer && showLearnMoreText && (
            <div className="card-back">
              <ChevronLeftIcon
                onClick={() => setShowLearnMoreText(false)}
                style={{ cursor: "pointer" }}
              />
              {learnMoreText.text}
            </div>
          )}
        </div>
      );
    }
  } else if (score == -2) {
    return (
      <div 
        className={
        firstLayer
          ? "compare__tool-scoreContainer graysquare border"
          : "compare__tool-scoreContainer graysquare"
      }
      >NA</div>
    )
  }
  else {
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

const SubNestedField = ({item, tabView, mobileView, inputBrandOne, inputBrandTwo, inputBrandThree}) => {
  const [showPopup, setShowPopup] = useState(false);  
  
  return (
    <div className="nestedField-container">
      <span className="nestedField-title">
        {item.title}
        <span style={{ position: "relative" }}>
          <HelpOutlineTwoToneIcon
            className="compare-info-icon"
            onClick={() => tabView && setShowPopup(true)}
            style={{
              fontSize: "18px",
              marginLeft: "5px",
              fill: "#26385A",
            }}
          />
          <span className="info-text-hover">{item.popupText}</span>
          {showPopup && tabView && (
            <ComparePopup
              title={item.title}
              popupText={item.popupText}
              handleClose={() => setShowPopup(false)}
            />
          )}
        </span>
      </span>
      {item.scores.map((element, index) => {
        console.log("tf");
        if (mobileView && index < 2) {
          return (
            <ScoreContainer
              key={index}
              inputBrandOne={inputBrandOne}
              inputBrandTwo={inputBrandTwo}
              inputBrandThree={inputBrandThree}
              score={element.score}
              industrialStandard={item.industrialStandard}
              totalScore={item.totalScore}
              learnMoreText={item.texts[index]}
            />
          );
        }
        if (!mobileView) {
          return (
            <ScoreContainer
              key={index}
              inputBrandOne={inputBrandOne}
              inputBrandTwo={inputBrandTwo}
              inputBrandThree={inputBrandThree}
              score={element.score}
              industrialStandard={item.industrialStandard}
              totalScore={item.totalScore}
              learnMoreText={item.texts[index]}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

const NestedField = ({ item, subIndexKey, inputBrandOne, inputBrandTwo, inputBrandThree, show, setShow }) => {
  // let v = ["he", "she"]

  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [tabView, setTabView] = useState(window.innerWidth < 800);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 600) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="subField-container">
        <div className="subField-title">{item.mainNestedField}</div>
        {item.mainNestedScore.map((element, index) => {
          if (mobileView && index < 2) {
            return (
              <ScoreContainer
                key={index}
                inputBrandOne={inputBrandOne}
                inputBrandTwo={inputBrandTwo} 
                inputBrandThree={inputBrandThree}
                score={element.score}
                industrialStandard={item.industrialStandard}
                totalScore={item.totalScore}
                secondLayer
              />
            );
          }
          if (!mobileView) {
            return (
              <ScoreContainer
                key={index}
                inputBrandOne={inputBrandOne}
                inputBrandTwo={inputBrandTwo} 
                inputBrandThree={inputBrandThree}
                score={element.score}
                industrialStandard={item.industrialStandard}
                totalScore={item.totalScore}
                secondLayer
              />
            );
          }
          return null;
        })}
        {item.subNestedField.length > 0 && (
          <ExpandMoreSharpIcon
            onClick={() =>
              show === subIndexKey ? setShow(null) : setShow(subIndexKey)
            }
            className={show === subIndexKey ? "circle-new-close" : "circle-new"}
          />
        )}
      </div>
      <div className={`animate-field ${show === subIndexKey ? "animate" : ""}`}>
        {show === subIndexKey &&
          item.subNestedField.map((item, index) => {
            return <SubNestedField key={index} item={item} tabView={tabView} mobileView={mobileView} inputBrandOne={inputBrandOne} inputBrandTwo={inputBrandTwo} inputBrandThree={inputBrandThree}/>
          })}
      </div>
    </div>
  );
};

const Subfield = ({indexKey, item, showSubField, setShowSubField, inputBrandOne, inputBrandTwo, inputBrandThree }) => {  
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [show, setShow] = useState(null);
  
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
                inputBrandOne={inputBrandOne}
                inputBrandTwo={inputBrandTwo} 
                inputBrandThree={inputBrandThree}
                score={element.score}
                scoreDenominator = {element.denominator}
                industrialStandard={item.industrialStandard}
                totalScore={item.totalScore}
                firstLayer
              />
            );
          }
          if (!mobileView) {
            return (
              <ScoreContainer
                key={index}
                inputBrandOne={inputBrandOne}
                inputBrandTwo={inputBrandTwo} 
                inputBrandThree={inputBrandThree}
                score={element.score}
                industrialStandard={item.industrialStandard}
                totalScore={item.totalScore}
                firstLayer
              />
            );
          }
          return null;
        })}
        {item.subfield.length > 0 && (
          <ExpandMoreSharpIcon
            onClick={() => {
              if (showSubField === indexKey) {
                setShow(null);
                setShowSubField(null);
              } else {
                setShow(null);
                setShowSubField(indexKey);
              }
            }}
            className={
              showSubField === indexKey ? "circle-new-close" : "circle-new"
            }
          />
        )}
      </div>
      <div
        className={`animate-field ${
          showSubField === indexKey ? "animate" : ""
        }`}
      >
        {showSubField === indexKey &&
          item.subfield.map((item, index) => {
            return <NestedField key={index} subIndexKey={index} item={item} inputBrandOne={inputBrandOne} inputBrandTwo={inputBrandTwo} show={show} inputBrandThree={inputBrandThree} setShow={(key) => setShow(key)}/>;
          })}
      </div>
    </div>
  );
};

const CompareTool = ({ selectedCompaniesList, removeBrand, fetchBrand}) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [inputBrandOne, setInputBrandOne] = useState("");
  const [inputBrandTwo, setInputBrandTwo] = useState("");
  const [inputBrandThree, setInputBrandThree] = useState("");
  const [returnedComp1, setReturnedComp1] = useState([]);
  const [returnedComp2, setReturnedComp2] = useState([]);
  const [returnedComp3, setReturnedComp3] = useState([]);
  const [listBrandOne, setListBrandOne] = useState(false);
  const [listBrandTwo, setListBrandTwo] = useState(false);
  const [listBrandThree, setListBrandThree] = useState(false);
  // const [scoreDenominator, setScoreDenominator] = useState(scoreInfo);
  const [fieldData, setFieldData] = useState(field);
  // const [state, setState] = useState([])
  const [showSubField, setShowSubField] = useState(null);
  const [inputBrand, setInputBrand] = useState([false, false, false]);

  const handleAllChanges = (comp) => {
    return companiesList.filter(company => {
      return company.toLowerCase().startsWith(comp.toLowerCase());
    })
  }

  const handleChangeOne = (e) => {
    setInputBrandOne(e.target.value);
    const returnedCompanies = handleAllChanges(e.target.value);
    setReturnedComp1(returnedCompanies);
    setListBrandOne(true);
  };

  const handleChangeTwo = (e) => {
    setInputBrandTwo(e.target.value);
    const returnedCompanies = handleAllChanges(e.target.value);
    setReturnedComp2(returnedCompanies);
    setListBrandTwo(true);
  };

  const handleChangeThree = (e) => {
    setInputBrandThree(e.target.value);
    const returnedCompanies = handleAllChanges(e.target.value);
    setReturnedComp3(returnedCompanies);
    setListBrandThree(true);
  };

  const deleteField = (inputIndex) => {
    if (inputIndex == 0) {
      setInputBrandOne("");
    }
    if (inputIndex == 1) setInputBrandTwo("");
    if (inputIndex == 2) setInputBrandThree("");

    let data = fieldData;
    data[0].mainScore[inputIndex].score = -1;
    data[0].subfield[0].mainNestedScore[inputIndex].score = -1
    data[0].subfield[0].subNestedField[0].texts[inputIndex].text = ""
    data[0].subfield[0].subNestedField[0].scores[inputIndex].score = -1
    data[0].subfield[0].subNestedField[1].texts[inputIndex].text = ""
    data[0].subfield[0].subNestedField[1].scores[inputIndex].score = -1

    data[0].subfield[1].mainNestedScore[inputIndex].score = -1
    data[0].subfield[1].subNestedField[0].texts[inputIndex].text = ""
    data[0].subfield[1].subNestedField[0].scores[inputIndex].score = -1
    data[0].subfield[1].subNestedField[1].texts[inputIndex].text = ""
    data[0].subfield[1].subNestedField[1].scores[inputIndex].score = -1
    data[0].subfield[1].subNestedField[2].texts[inputIndex].text = ""
    data[0].subfield[1].subNestedField[2].scores[inputIndex].score = -1

    data[0].subfield[2].mainNestedScore[inputIndex].score = -1
    data[0].subfield[2].subNestedField[0].texts[inputIndex].text = ""
    data[0].subfield[2].subNestedField[0].scores[inputIndex].score = -1
    data[0].subfield[2].subNestedField[1].texts[inputIndex].text = ""
    data[0].subfield[2].subNestedField[1].scores[inputIndex].score = -1
    data[0].subfield[2].subNestedField[2].texts[inputIndex].text = ""
    data[0].subfield[2].subNestedField[2].scores[inputIndex].score = -1

    data[0].subfield[3].mainNestedScore[inputIndex].score = -1
    data[0].subfield[3].subNestedField[0].texts[inputIndex].text = ""
    data[0].subfield[3].subNestedField[0].scores[inputIndex].score = -1
    data[0].subfield[3].subNestedField[1].texts[inputIndex].text = ""
    data[0].subfield[3].subNestedField[1].scores[inputIndex].score = -1
    data[0].subfield[3].subNestedField[2].texts[inputIndex].text = ""
    data[0].subfield[3].subNestedField[2].scores[inputIndex].score = -1

    data[1].mainScore[inputIndex].score = -1

    data[1].subfield[0].mainNestedScore[inputIndex].score = -1
    data[1].subfield[0].subNestedField[0].texts[inputIndex].text = ""
    data[1].subfield[0].subNestedField[0].scores[inputIndex].score = -1
    data[1].subfield[0].subNestedField[1].texts[inputIndex].text = ""
    data[1].subfield[0].subNestedField[1].scores[inputIndex].score = -1
    data[1].subfield[0].subNestedField[2].texts[inputIndex].text = ""
    data[1].subfield[0].subNestedField[2].scores[inputIndex].score = -1

    data[1].subfield[1].mainNestedScore[inputIndex].score = -1
    data[1].subfield[1].subNestedField[0].texts[inputIndex].text = ""
    data[1].subfield[1].subNestedField[0].scores[inputIndex].score = -1
    data[1].subfield[1].subNestedField[1].texts[inputIndex].text = ""
    data[1].subfield[1].subNestedField[1].scores[inputIndex].score = -1
    data[1].subfield[1].subNestedField[2].texts[inputIndex].text = ""
    data[1].subfield[1].subNestedField[2].scores[inputIndex].score = -1

    data[1].subfield[2].mainNestedScore[inputIndex].score = -1
    data[1].subfield[2].subNestedField[0].texts[inputIndex].text = ""
    data[1].subfield[2].subNestedField[0].scores[inputIndex].score = -1
    data[1].subfield[2].subNestedField[1].texts[inputIndex].text = ""
    data[1].subfield[2].subNestedField[1].scores[inputIndex].score = -1
    data[1].subfield[2].subNestedField[2].texts[inputIndex].text = ""
    data[1].subfield[2].subNestedField[2].scores[inputIndex].score = -1
    data[1].subfield[2].subNestedField[3].texts[inputIndex].text = ""
    data[1].subfield[2].subNestedField[3].scores[inputIndex].score = -1

    data[1].subfield[3].mainNestedScore[inputIndex].score = -1
    data[1].subfield[3].subNestedField[0].texts[inputIndex].text = ""
    data[1].subfield[3].subNestedField[0].scores[inputIndex].score = -1
    data[1].subfield[3].subNestedField[1].texts[inputIndex].text = ""
    data[1].subfield[3].subNestedField[1].scores[inputIndex].score = -1
    data[1].subfield[3].subNestedField[2].texts[inputIndex].text = ""
    data[1].subfield[3].subNestedField[2].scores[inputIndex].score = -1
    data[1].subfield[3].subNestedField[3].texts[inputIndex].text = ""
    data[1].subfield[3].subNestedField[3].scores[inputIndex].score = -1

    data[2].mainScore[inputIndex].score = -1

    data[2].subfield[0].mainNestedScore[inputIndex].score = -1
    data[2].subfield[0].subNestedField[0].texts[inputIndex].text = ""
    data[2].subfield[0].subNestedField[0].scores[inputIndex].score = -1
    data[2].subfield[0].subNestedField[1].texts[inputIndex].text = ""
    data[2].subfield[0].subNestedField[1].scores[inputIndex].score = -1
    data[2].subfield[0].subNestedField[2].texts[inputIndex].text = ""
    data[2].subfield[0].subNestedField[2].scores[inputIndex].score = -1
    data[2].subfield[0].subNestedField[3].texts[inputIndex].text = "" 
    data[2].subfield[0].subNestedField[3].scores[inputIndex].score = -1

    data[2].subfield[1].mainNestedScore[inputIndex].score = -1
    data[2].subfield[1].subNestedField[0].texts[inputIndex].text = ""
    data[2].subfield[1].subNestedField[0].scores[inputIndex].score = -1
    data[2].subfield[1].subNestedField[1].texts[inputIndex].text = ""
    data[2].subfield[1].subNestedField[1].scores[inputIndex].score = -1
    data[2].subfield[1].subNestedField[2].texts[inputIndex].text = ""
    data[2].subfield[1].subNestedField[2].scores[inputIndex].score = -1
    data[2].subfield[1].subNestedField[3].texts[inputIndex].text = ""
    data[2].subfield[1].subNestedField[3].scores[inputIndex].score = -1

    data[2].subfield[2].mainNestedScore[inputIndex].score = -1
    data[2].subfield[2].subNestedField[0].texts[inputIndex].text = ""
    data[2].subfield[2].subNestedField[0].scores[inputIndex].score = -1
    data[2].subfield[2].subNestedField[1].texts[inputIndex].text = ""
    data[2].subfield[2].subNestedField[1].scores[inputIndex].score =  -1
    data[2].subfield[2].subNestedField[2].texts[inputIndex].text = ""
    data[2].subfield[2].subNestedField[2].scores[inputIndex].score = -1
    data[2].subfield[2].subNestedField[3].texts[inputIndex].text = ""
    data[2].subfield[2].subNestedField[3].scores[inputIndex].score = -1

    data[2].subfield[3].mainNestedScore[inputIndex].score = -1
    data[2].subfield[3].subNestedField[0].texts[inputIndex].text = ""
    data[2].subfield[3].subNestedField[0].scores[inputIndex].score = -1
    data[2].subfield[3].subNestedField[1].texts[inputIndex].text = ""
    data[2].subfield[3].subNestedField[1].scores[inputIndex].score = -1
    data[2].subfield[3].subNestedField[2].texts[inputIndex].text = ""
    data[2].subfield[3].subNestedField[2].scores[inputIndex].score = -1
    data[2].subfield[3].subNestedField[3].texts[inputIndex].text = ""
    data[2].subfield[3].subNestedField[3].scores[inputIndex].score = -1

    data[3].mainScore[inputIndex].score = -1;

    data[3].subfield[0].mainNestedScore[inputIndex].score = -1
    data[3].subfield[0].subNestedField[0].texts[inputIndex].text = ""
    data[3].subfield[0].subNestedField[0].scores[inputIndex].score = -1
    data[3].subfield[0].subNestedField[1].texts[inputIndex].text = ""
    data[3].subfield[0].subNestedField[1].scores[inputIndex].score = -1

    data[3].subfield[1].mainNestedScore[inputIndex].score = -1
    data[3].subfield[1].subNestedField[0].texts[inputIndex].text = ""
    data[3].subfield[1].subNestedField[0].scores[inputIndex].score = -1
    data[3].subfield[1].subNestedField[1].texts[inputIndex].text = ""
    data[3].subfield[1].subNestedField[1].scores[inputIndex].score = -1
    data[3].subfield[1].subNestedField[2].texts[inputIndex].text = ""
    data[3].subfield[1].subNestedField[2].scores[inputIndex].score = -1

    data[3].subfield[2].mainNestedScore[inputIndex].score = -1
    data[3].subfield[2].subNestedField[0].texts[inputIndex].text = ""
    data[3].subfield[2].subNestedField[0].scores[inputIndex].score = -1
    data[3].subfield[2].subNestedField[1].texts[inputIndex].text = ""
    data[3].subfield[2].subNestedField[1].scores[inputIndex].score = -1
    data[3].subfield[2].subNestedField[2].texts[inputIndex].text = ""
    data[3].subfield[2].subNestedField[2].scores[inputIndex].score = -1
    data[3].subfield[2].subNestedField[3].texts[inputIndex].text = ""
    data[3].subfield[2].subNestedField[3].scores[inputIndex].score = -1
    data[3].subfield[2].subNestedField[4].texts[inputIndex].text = ""
    data[3].subfield[2].subNestedField[4].scores[inputIndex].score = -1

    setFieldData(data);
    removeBrand(inputIndex);
  }

  async function renderData(company, inputIndex) {
    let data = fieldData;
    inputIndex--;

    //There are special characters inside company name, such as 'H&M'
    let company_name = encodeURIComponent(company);
    let a_url = "/api/v1/scores?company=" + company_name + "&type=A";
    let b_url = "/api/v1/scores?company=" + company_name + "&type=B";
    let c_url = "/api/v1/scores?company=" + company_name + "&type=C";
    let d_url = "/api/v1/scores?company=" + company_name + "&type=D";

    await axios
      .get(a_url)
      .then((resp) => {
        data[0].mainScore[inputIndex].score = resp.data.rows[0]["Ascore"];

        data[0].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A1score"];
        data[0].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A1.1short"];
        data[0].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A1.1score"];
        data[0].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A1.2short"];
        data[0].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A1.2score"];

        data[0].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A2score"];
        data[0].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A2.1short"];
        data[0].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A2.1score"];
        data[0].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A2.2short"];
        data[0].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A2.2score"];
        data[0].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["A2.3short"];
        data[0].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["A2.3score"];

        data[0].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A3score"];
        data[0].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A3.1short"];
        data[0].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A3.1score"];
        data[0].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A3.2short"];
        data[0].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A3.2score"];
        data[0].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["A3.3short"];
        data[0].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["A3.3score"];

        data[0].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["A4score"];
        data[0].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["A4.1short"];
        data[0].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["A4.1score"];
        data[0].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["A4.2short"];
        data[0].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["A4.2score"];
        data[0].subfield[3].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["A4.3short"];
        data[0].subfield[3].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["A4.3score"];
      });

    await axios
      .get(b_url)
      .then((resp) => {
        data[1].mainScore[inputIndex].score = resp.data.rows[0]["Bscore"];

        data[1].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B1score"];
        data[1].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B1.1short"];
        data[1].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B1.1score"];
        data[1].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B1.2short"];
        data[1].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B1.2score"];
        data[1].subfield[0].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B1.3short"];
        data[1].subfield[0].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B1.3score"];

        data[1].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B2score"];
        data[1].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B2.1short"];
        data[1].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B2.1score"];
        data[1].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B2.2short"];
        data[1].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B2.2score"];
        data[1].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B2.3short"];
        data[1].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B2.3score"];

        data[1].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B3score"];
        data[1].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B3.1short"];
        data[1].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B3.1score"];
        data[1].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B3.2short"];
        data[1].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B3.2score"];
        data[1].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B3.3short"];
        data[1].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B3.3score"];
        data[1].subfield[2].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["B3.4short"];
        data[1].subfield[2].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["B3.4score"];

        data[1].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["B4score"];
        data[1].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["B4.1short"];
        data[1].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["B4.1score"];
        data[1].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["B4.2short"];
        data[1].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["B4.2score"];
        data[1].subfield[3].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["B4.3short"];
        data[1].subfield[3].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["B4.3score"];
        data[1].subfield[3].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["B4.4short"];
        data[1].subfield[3].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["B4.4score"];
        // data[1].subfield[3].subNestedField[4].texts[inputIndex].text =
        //   resp.data.rows[0]["B45short"];
        // data[1].subfield[3].subNestedField[4].scores[inputIndex].score =
        //   resp.data.rows[0]["B45_score"];
      });

    await axios
      .get(c_url)
      .then((resp) => {
        data[2].mainScore[inputIndex].score = resp.data.rows[0]["Cscore"];

        data[2].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C1score"];
        data[2].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C1.1short"];
        data[2].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C1.1score"];
        data[2].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C1.2short"];
        data[2].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C1.2score"];
        data[2].subfield[0].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C1.3short"];
        data[2].subfield[0].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C1.3score"];
        data[2].subfield[0].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C1.4short"];
        data[2].subfield[0].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C1.4score"];

        data[2].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C2score"];
        data[2].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C2.1short"];
        data[2].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C2.1score"];
        data[2].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C2.2short"];
        data[2].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C2.2score"];
        data[2].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C2.3short"];
        data[2].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C2.3score"];
        data[2].subfield[1].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C2.4short"];
        data[2].subfield[1].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C2.4score"];

        data[2].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C3score"];
        data[2].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C3.1short"];
        data[2].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C3.1score"];
        data[2].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C3.2short"];
        data[2].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C3.2score"];
        data[2].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C3.3short"];
        data[2].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C3.3score"];
        data[2].subfield[2].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C3.4short"];
        data[2].subfield[2].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C3.4score"];

        data[2].subfield[3].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["C4score"];
        data[2].subfield[3].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["C4.1short"];
        data[2].subfield[3].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["C4.1score"];
        data[2].subfield[3].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["C4.2short"];
        data[2].subfield[3].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["C4.2score"];
        data[2].subfield[3].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["C4.3short"];
        data[2].subfield[3].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["C4.3score"];
        data[2].subfield[3].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["C4.4short"];
        data[2].subfield[3].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["C4.4score"];
      });

    await axios
      .get(d_url)
      .then((resp) => {
        data[3].mainScore[inputIndex].score = resp.data.rows[0]["Dscore"];

        data[3].subfield[0].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D1score"];
        data[3].subfield[0].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["D1.1short"];
        data[3].subfield[0].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["D1.1score"];
        data[3].subfield[0].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["D1.2short"];
        data[3].subfield[0].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["D1.2score"];

        data[3].subfield[1].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D2score"];
        data[3].subfield[1].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["D2.1short"];
        data[3].subfield[1].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["D2.1score"];
        data[3].subfield[1].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["D2.2short"];
        data[3].subfield[1].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["D2.2score"];
        data[3].subfield[1].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["D2.3short"];
        data[3].subfield[1].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["D2.3score"];

        data[3].subfield[2].mainNestedScore[inputIndex].score =
          resp.data.rows[0]["D3score"];
        data[3].subfield[2].subNestedField[0].texts[inputIndex].text =
          resp.data.rows[0]["D3.1short"];
        data[3].subfield[2].subNestedField[0].scores[inputIndex].score =
          resp.data.rows[0]["D3.1score"];
        data[3].subfield[2].subNestedField[1].texts[inputIndex].text =
          resp.data.rows[0]["D3.2short"];
        data[3].subfield[2].subNestedField[1].scores[inputIndex].score =
          resp.data.rows[0]["D3.2score"];
        data[3].subfield[2].subNestedField[2].texts[inputIndex].text =
          resp.data.rows[0]["D3.3short"];
        data[3].subfield[2].subNestedField[2].scores[inputIndex].score =
          resp.data.rows[0]["D3.3score"];
        data[3].subfield[2].subNestedField[3].texts[inputIndex].text =
          resp.data.rows[0]["D3.4short"];
        data[3].subfield[2].subNestedField[3].scores[inputIndex].score =
          resp.data.rows[0]["D3.4score"];
        data[3].subfield[2].subNestedField[4].texts[inputIndex].text =
          resp.data.rows[0]["D3.5short"];
        data[3].subfield[2].subNestedField[4].scores[inputIndex].score =
          resp.data.rows[0]["D3.5score"];
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
    axios.get("/api/v1/allcompanies").then((resp) => {
      const allcompanies = [];
      console.log("before all comp");
      console.log(resp.data);
      console.log("after all comp");
      for (var i = 0; i < resp.data.rows.length; i++) {
        allcompanies.push(resp.data.rows[i].Name);
      }
      setCompaniesList(allcompanies);
      fetchBrand(allcompanies);
    });
    deleteField(0);
    deleteField(1);
    deleteField(2);


    axios.get("/api/v1/industry").then((resp) => {
      console.log("respat");
      console.log(resp.data);
      let data = fieldData;

      data[0].industrialStandard.push(resp.data.rows[0]["Alow"]);
      data[0].industrialStandard.push(resp.data.rows[0]["Ahigh"]);
      data[1].industrialStandard.push(resp.data.rows[0]["Blow"]);
      data[1].industrialStandard.push(resp.data.rows[0]["Bhigh"]);
      data[2].industrialStandard.push(resp.data.rows[0]["Clow"]);
      data[2].industrialStandard.push(resp.data.rows[0]["Chigh"]);
      data[3].industrialStandard.push(resp.data.rows[0]["Dlow"]);
      data[3].industrialStandard.push(resp.data.rows[0]["Dhigh"]);

      data[0].subfield[0].industrialStandard.push(resp.data.rows[0]["A1low"]);
      data[0].subfield[0].industrialStandard.push(resp.data.rows[0]["A1high"]);
      data[0].subfield[1].industrialStandard.push(resp.data.rows[0]["A2low"]);
      data[0].subfield[1].industrialStandard.push(resp.data.rows[0]["A2high"]);
      data[0].subfield[2].industrialStandard.push(resp.data.rows[0]["A3low"]);
      data[0].subfield[2].industrialStandard.push(resp.data.rows[0]["A3high"]);
      data[0].subfield[3].industrialStandard.push(resp.data.rows[0]["A4low"]);
      data[0].subfield[3].industrialStandard.push(resp.data.rows[0]["A4high"]);

      data[0].subfield[0].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A1.1low"]);
      data[0].subfield[0].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A1.1high"]);
      data[0].subfield[0].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A1.2low"]);
      data[0].subfield[0].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A1.2high"]);
      data[0].subfield[1].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A2.1low"]);
      data[0].subfield[1].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A2.1high"]);
      data[0].subfield[1].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A2.2low"]);
      data[0].subfield[1].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A2.2high"]);
      data[0].subfield[1].subNestedField[2].industrialStandard.push(resp.data.rows[0]["A2.3low"]);
      data[0].subfield[1].subNestedField[2].industrialStandard.push(resp.data.rows[0]["A2.3high"]);
      data[0].subfield[2].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A3.1low"]);
      data[0].subfield[2].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A3.1high"]);
      data[0].subfield[2].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A3.2low"]);
      data[0].subfield[2].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A3.2high"]);
      data[0].subfield[2].subNestedField[2].industrialStandard.push(resp.data.rows[0]["A3.3low"]);
      data[0].subfield[2].subNestedField[2].industrialStandard.push(resp.data.rows[0]["A3.3high"]);
      data[0].subfield[3].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A4.1low"]);
      data[0].subfield[3].subNestedField[0].industrialStandard.push(resp.data.rows[0]["A4.1high"]);
      data[0].subfield[3].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A4.2low"]);
      data[0].subfield[3].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A4.2high"]);
      data[0].subfield[3].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A4.3low"]);
      data[0].subfield[3].subNestedField[1].industrialStandard.push(resp.data.rows[0]["A4.3high"]);

      data[1].subfield[0].industrialStandard.push(resp.data.rows[0]["B1low"]);
      data[1].subfield[0].industrialStandard.push(resp.data.rows[0]["B1high"]);
      data[1].subfield[1].industrialStandard.push(resp.data.rows[0]["B2low"]);
      data[1].subfield[1].industrialStandard.push(resp.data.rows[0]["B2high"]);
      data[1].subfield[2].industrialStandard.push(resp.data.rows[0]["B3low"]);
      data[1].subfield[2].industrialStandard.push(resp.data.rows[0]["B3high"]);
      data[1].subfield[3].industrialStandard.push(resp.data.rows[0]["B4low"]);
      data[1].subfield[3].industrialStandard.push(resp.data.rows[0]["B4high"]);

      data[1].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B1.1low"]
      );
      data[1].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B1.1high"]
      );
      data[1].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B1.2low"]
      );
      data[1].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B1.2high"]
      );
      data[1].subfield[0].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B1.3low"]
      );
      data[1].subfield[0].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B1.3high"]
      );

      data[1].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B2.1low"]
      );
      data[1].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B2.1high"]
      );
      data[1].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B2.2low"]
      );
      data[1].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B2.2high"]
      );
      data[1].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B2.3low"]
      );
      data[1].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B2.3high"]
      );

      data[1].subfield[2].subNestedField[0].industrialStandard.push(resp.data.rows[0]["B3.1low"]);
      data[1].subfield[2].subNestedField[0].industrialStandard.push(resp.data.rows[0]["B3.1high"]);
      data[1].subfield[2].subNestedField[1].industrialStandard.push(resp.data.rows[0]["B3.2low"]);
      data[1].subfield[2].subNestedField[1].industrialStandard.push(resp.data.rows[0]["B3.2high"]);
      data[1].subfield[2].subNestedField[2].industrialStandard.push(resp.data.rows[0]["B3.3low"]);
      data[1].subfield[2].subNestedField[2].industrialStandard.push(resp.data.rows[0]["B3.3high"]);
      data[1].subfield[2].subNestedField[3].industrialStandard.push(resp.data.rows[0]["B3.4low"]);
      data[1].subfield[2].subNestedField[3].industrialStandard.push(resp.data.rows[0]["B3.4high"]);

      data[1].subfield[3].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B4.1low"]
      );
      data[1].subfield[3].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["B4.1high"]
      );
      data[1].subfield[3].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B4.2low"]
      );
      data[1].subfield[3].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["B4.2high"]
      );
      data[1].subfield[3].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B4.3low"]
      );
      data[1].subfield[3].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["B4.3high"]
      );
      data[1].subfield[3].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["B4.4low"]
      );
      data[1].subfield[3].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["B4.4high"]
      );
      // data[1].subfield[3].subNestedField[4].industrialStandard =
      //   resp.data.rows[0]["B45"];

      data[2].subfield[0].industrialStandard.push(resp.data.rows[0]["C1low"]);
      data[2].subfield[0].industrialStandard.push(resp.data.rows[0]["C1high"]);
      data[2].subfield[1].industrialStandard.push(resp.data.rows[0]["C2low"]);
      data[2].subfield[1].industrialStandard.push(resp.data.rows[0]["C2high"]);
      data[2].subfield[2].industrialStandard.push(resp.data.rows[0]["C3low"]);
      data[2].subfield[2].industrialStandard.push(resp.data.rows[0]["C3high"]);
      data[2].subfield[3].industrialStandard.push(resp.data.rows[0]["C4low"]);
      data[2].subfield[3].industrialStandard.push(resp.data.rows[0]["C4high"]);

      data[2].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C1.1low"]
      );
      data[2].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C1.1high"]
      );
      data[2].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C1.2low"]
      );
      data[2].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C1.2high"]
      );
      data[2].subfield[0].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C1.3low"]
      );
      data[2].subfield[0].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C1.3high"]
      );
      data[2].subfield[0].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C1.4low"]
      );
      data[2].subfield[0].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C1.4high"]
      );

      data[2].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C2.1low"]
      );
      data[2].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C2.1high"]
      );
      data[2].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C2.2low"]
      );
      data[2].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C2.2high"]
      );
      data[2].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C2.3low"]
      );
      data[2].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C2.3high"]
      );
      data[2].subfield[1].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C2.4low"]
      );
      data[2].subfield[1].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C2.4high"]
      );

      data[2].subfield[2].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C3.1low"]
      );
      data[2].subfield[2].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C3.1high"]
      );
      data[2].subfield[2].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C3.2low"]
      );
      data[2].subfield[2].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C3.2high"]
      );
      data[2].subfield[2].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C3.3low"]
      );
      data[2].subfield[2].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C3.3high"]
      );
      data[2].subfield[2].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C3.4low"]
      );
      data[2].subfield[2].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C3.4high"]
      );

      data[2].subfield[3].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C4.1low"]
      );
      data[2].subfield[3].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["C4.1high"]
      );
      data[2].subfield[3].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C4.2low"]
      );
      data[2].subfield[3].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["C4.2high"]
      );
      data[2].subfield[3].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C4.3low"]
      );
      data[2].subfield[3].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["C4.3high"]
      );
      data[2].subfield[3].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C4.4low"]
      );
      data[2].subfield[3].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["C4.4high"]
      );

      data[3].subfield[0].industrialStandard.push(resp.data.rows[0]["D1low"]);
      data[3].subfield[0].industrialStandard.push(resp.data.rows[0]["D1high"]);
      data[3].subfield[1].industrialStandard.push(resp.data.rows[0]["D2low"]);
      data[3].subfield[1].industrialStandard.push(resp.data.rows[0]["D2high"]);
      data[3].subfield[2].industrialStandard.push(resp.data.rows[0]["D3low"]);
      data[3].subfield[2].industrialStandard.push(resp.data.rows[0]["D3high"]);

      data[3].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D1.1low"]
      );
      data[3].subfield[0].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D1.1high"]
      );
      data[3].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D1.2low"]
      );
      data[3].subfield[0].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D1.2high"]
      );

      data[3].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D2.1low"]
      );
      data[3].subfield[1].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D2.1high"]
      );
      data[3].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D2.2low"]
      );
      data[3].subfield[1].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D2.2high"]
      );
      data[3].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["D2.3low"]
      );
      data[3].subfield[1].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["D2.3high"]
      );

      data[3].subfield[2].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D3.1low"]
      );
      data[3].subfield[2].subNestedField[0].industrialStandard.push(
        resp.data.rows[0]["D3.1high"]
      );
      data[3].subfield[2].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D3.2low"]
      );
      data[3].subfield[2].subNestedField[1].industrialStandard.push(
        resp.data.rows[0]["D3.2high"]
      );
      data[3].subfield[2].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["D3.3low"]
      );
      data[3].subfield[2].subNestedField[2].industrialStandard.push(
        resp.data.rows[0]["D3.3high"]
      );
      data[3].subfield[2].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["D3.4low"]
      );
      data[3].subfield[2].subNestedField[3].industrialStandard.push(
        resp.data.rows[0]["D3.4high"]
      );
      data[3].subfield[2].subNestedField[4].industrialStandard.push(
        resp.data.rows[0]["D3.5low"]
      );
      data[3].subfield[2].subNestedField[4].industrialStandard.push(
        resp.data.rows[0]["D3.5high"]
      );
      console.log("data");
      console.log(data);
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
        <div className="compare-input-section">
        <input
          placeholder="Type the brand"
          value={inputBrandOne}
          onChange={handleChangeOne}
          onBlur={() => setTimeout(() => setListBrandOne(false), 200)}
          onFocus={handleChangeOne}
        />
        <AiOutlineClose className="desktop-only" onClick = {() => deleteField(0)} />
        </div>
        <div className="compare-input-section">
        <input
          style={{marginLeft: '4%'}}
          placeholder="Type the brand"
          value={inputBrandTwo}
          onChange={handleChangeTwo}
          onBlur={() => setTimeout(() => setListBrandTwo(false), 200)}
          onFocus={handleChangeTwo}
        />
        <AiOutlineClose className="desktop-only" onClick = {() => deleteField(1)} />
        </div>
        <div className="compare-input-section compare-input-section-three ">
        <input
          style={{marginLeft: '4%'}}
          placeholder="Type the brand"
          value={inputBrandThree}
          onChange={handleChangeThree}
          onBlur={() => setTimeout(() => setListBrandThree(false), 200)}
          onFocus={handleChangeThree}
        />
        <AiOutlineClose className="desktop-only" onClick = {() => deleteField(2)} />
        </div>
        <div className="compare-companyList-container">
          {listBrandOne && (
            <div className="compare-companyList list-1">
              {returnedComp1.map((item, index) => {
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
              {returnedComp2.map((item, index) => {
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
              {returnedComp3.map((item, index) => {
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
          console.log(item);
          return (
            <div key={index} className="brand-button-container">
              {!inputBrand[index] && item && 
              <span
                className={item ? "brand-button-close" : "diplay-none"}
                onClick={() => {
                  deleteField(index);
                  // var spec_idx = inputBrand;
                  // spec_idx[index] = true;
                  // setInputBrand(spec_idx);
                }}
              >
                &#10006;
              </span>}
              <span className={item ? "brand-name" : "brand-name-placeholder"}>
                {item ? item : "Select the brand"}
              </span>
            </div>
          );
        })}
      </div>
      {fieldData.map((item, index) => (
        <Subfield key={index} indexKey={index} item={item} showSubField={showSubField} inputBrandOne={inputBrandOne} inputBrandTwo={inputBrandTwo} inputBrandThree={inputBrandThree} setShowSubField={(key) => setShowSubField(key)} />
      ))}
    </div>
  );
};

export default CompareTool;
