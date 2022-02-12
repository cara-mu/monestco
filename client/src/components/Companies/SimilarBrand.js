import React, {useEffect, useState} from "react";
import axios from "axios";
import CompanyDetails from './CompanyDetails';


export default function SimilarBrand(props) {  
    // const declarations
    const companyinfo = [
        {
            A_ID: 0,
            B_ID: 0,
            C_ID: 0,
            D_ID: 0,
            TotalScore: 0,
            Category: "",
            Description: "",
            IndustryStandardsID: 0,
            Logo: 0,
            Name: "",
            SimilarCompany1: "",
            SimilarCompany2: "",
            SimilarCompany3: "",
            SimilarCompany4: "",
            Subsidiary: "",
            CompanyID: ""
        }
    ]

    const [state, setState] = useState([])
    const [companyDetails, setCompanyDetails] = React.useState(companyinfo);

    // hook
    useEffect(() => {

        // send a post request and get similar company data for the specific company
        axios.get('/companyname',{params: props.company}).
        then((resp) => { 
                let data = companyDetails;
                // data[0]["A_ID"] = resp.data[0]["A_ID"];
                // data[0]["B_ID"] = resp.data[0]["B_ID"];
                // data[0]["C_ID"] = resp.data[0]["C_ID"];
                // data[0]["D_ID"] = resp.data[0]["D_ID"];
                data[0]["Category"] = resp.data[0]["Category"];
                data[0]["Description"] = resp.data[0]["Description"];
                data[0]["IndustryStandardsID"] = resp.data[0]["IndustryStandardsID"];
                data[0]["Logo"] = resp.data[0]["Logo"];
                data[0]["Name"] = resp.data[0]["Name"];
                data[0]["SimilarCompany1"] = resp.data[0]["SimilarCompany1"];
                data[0]["SimilarCompany2"] = resp.data[0]["SimilarCompany2"];
                data[0]["SimilarCompany3"] = resp.data[0]["SimilarCompany3"];
                data[0]["SimilarCompany4"] = resp.data[0]["SimilarCompany4"];
                data[0]["Subsidiary"] = resp.data[0]["Subsidiary"];
                setCompanyDetails(data);
                setState(resp.data);
            })

        axios.get('/similarCompany1',{params: props.company}).
        then((resp) => { 
            let data = companyDetails;
            data[0]["company1Ascore"] = resp.data[0]["Ascore"];
            data[0]["company1Bscore"] = resp.data[0]["Bscore"];
            data[0]["company1Cscore"] = resp.data[0]["Cscore"];
            data[0]["company1Dscore"] = resp.data[0]["Dscore"];
            let company1TotalScore = (parseInt(data[0]["company1Ascore"]) + parseInt(data[0]["company1Bscore"]) + parseInt(data[0]["company1Cscore"]) + parseInt(data[0]["company1Dscore"])) / 4;
            let comp1SliderLength = 324 * company1TotalScore / 100
            data[0]["company1TotalScore"] = company1TotalScore;
            data[0]["comp1SliderLength"] = comp1SliderLength;
        })
        axios.get('/similarCompany2',{params: props.company}).
        then((resp) => { 
            let data = companyDetails;
            data[0]["company2Ascore"] = resp.data[0]["Ascore"];
            data[0]["company2Bscore"] = resp.data[0]["Bscore"];
            data[0]["company2Cscore"] = resp.data[0]["Cscore"];
            data[0]["company2Dscore"] = resp.data[0]["Dscore"];
            let company2TotalScore = (parseInt(data[0]["company2Ascore"]) + parseInt(data[0]["company2Bscore"]) + parseInt(data[0]["company2Cscore"]) + parseInt(data[0]["company2Dscore"])) / 4;
            let comp2SliderLength = 324 * company2TotalScore / 100
            data[0]["company2TotalScore"] = company2TotalScore;
            data[0]["comp2SliderLength"] = comp2SliderLength;
        })
        axios.get('/similarCompany3',{params: props.company}).
        then((resp) => { 
            let data = companyDetails;
            data[0]["company3Ascore"] = resp.data[0]["Ascore"];
            data[0]["company3Bscore"] = resp.data[0]["Bscore"];
            data[0]["company3Cscore"] = resp.data[0]["Cscore"];
            data[0]["company3Dscore"] = resp.data[0]["Dscore"];
            let company3TotalScore = (parseInt(data[0]["company3Ascore"]) + parseInt(data[0]["company3Bscore"]) + parseInt(data[0]["company3Cscore"]) + parseInt(data[0]["company3Dscore"])) / 4;
            let comp3SliderLength = 324 * company3TotalScore / 100
            data[0]["company3TotalScore"] = company3TotalScore;
            data[0]["comp3SliderLength"] = comp3SliderLength;
        })
        axios.get('/similarCompany4',{params: props.company}).
        then((resp) => { 
            let data = companyDetails;
            data[0]["company4Ascore"] = resp.data[0]["Ascore"];
            data[0]["company4Bscore"] = resp.data[0]["Bscore"];
            data[0]["company4Cscore"] = resp.data[0]["Cscore"];
            data[0]["company4Dscore"] = resp.data[0]["Dscore"];
            let company4TotalScore = (parseInt(data[0]["company4Ascore"]) + parseInt(data[0]["company4Bscore"]) + parseInt(data[0]["company4Cscore"]) + parseInt(data[0]["company4Dscore"])) / 4;
            let comp4SliderLength = 324 * company4TotalScore / 100
            data[0]["company4TotalScore"] = company4TotalScore;
            data[0]["comp4SliderLength"] = comp4SliderLength;
        })
    }, [props.company]);
    
    return (
        <div>
            <div className="similar_brands">
            <div className='Brand-Section-title'>Similar Brands</div>
            <div className='Decorative-Line'></div>
            <div className="similar_brands-container">

            <div>
            <CompanyDetails similarCompany = {companyDetails[0]["SimilarCompany1"]} sliderLength = {companyDetails[0]["comp1SliderLength"]} score = {companyDetails[0]["company1TotalScore"]}/>
            </div>

            <div>
            <CompanyDetails similarCompany = {companyDetails[0]["SimilarCompany2"]} sliderLength = {companyDetails[0]["comp2SliderLength"]} score = {companyDetails[0]["company2TotalScore"]}/>
            </div>

            <div>
            <CompanyDetails similarCompany = {companyDetails[0]["SimilarCompany3"]} sliderLength = {companyDetails[0]["comp3SliderLength"]} score = {companyDetails[0]["company3TotalScore"]}/>
            </div>

            <div>
            <CompanyDetails similarCompany = {companyDetails[0]["SimilarCompany4"]} sliderLength = {companyDetails[0]["comp4SliderLength"]} score = {companyDetails[0]["company4TotalScore"]}/>
            </div>

            </div>
        </div>

</div>

    );
}