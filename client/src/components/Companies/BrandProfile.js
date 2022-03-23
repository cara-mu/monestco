import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function BrandProfile(props){

    const companyinfo = {
        TotalScore: 0,
        Category: "",
        Description: "",
        Logo: "",
        Name: "",
        SimilarCompany1: "",
        SimilarCompany2: "",
        SimilarCompany3: "",
        SimilarCompany4: "",
        Subsidiary: "",
    }


    const [companyDetails, setCompanyDetails] = useState(companyinfo);

    //There are special characters inside company name, such as 'H&M'
    let company_name = encodeURIComponent(props.company);
    let url = "/api/v1/companybasic?company=" + company_name;

    useEffect(() => {

        axios.get(url)
            .then((resp) => {
                let data = companyDetails;
                data["Category"] = resp.data["Category"];
                data["Description"] = resp.data["Description"];
                data["IndustryStandardsID"] = resp.data["IndustryStandardsID"];
                data["Logo"] = resp.data["Logo"];
                data["Name"] = resp.data["Name"];
                data["SimilarCompany1"] = resp.data["SimilarCompany1"];
                data["SimilarCompany2"] = resp.data["SimilarCompany2"];
                data["SimilarCompany3"] = resp.data["SimilarCompany3"];
                data["SimilarCompany4"] = resp.data["SimilarCompany4"];
                data["Subsidiary"] = resp.data["Subsidiary"];
                data["TotalScore"] = resp.data['TotalScore'];
                data["SliderLength"] = 324 * data["TotalScore"] / 100;
                setCompanyDetails(data);
        })

    }, [props.company]);


    return (
        <div className='Left-Menu'>
                        <div>
                            <img className='brand-logo' src={`${companyDetails["Logo"]}`} alt={`${companyDetails["Logo"]}`} />

                            {/* conditional rendering for subsidiary */}
                            {companyDetails["Subsidiary"] != null &&
                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#797979', margin: '10px 0' }}>Subsidiary of {companyDetails["Subsidiary"]}</div>
                            }

                            <p style={{ marginTop: "5%", color: '#4F4F4F' }}><b>{companyDetails["Name"]}</b> {companyDetails["Description"]}</p>
                        </div>
                        <div>
                            <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginLeft: '105px' }}>industry average</div>
                            <AiFillCaretDown style={{ marginLeft: '155px' }} />
                            {/* {companyDetails[0]["SliderLength"]} */}
                            <div class="horizontalline" style={{ width: `${companyDetails["SliderLength"]}px` }}></div>
                            <div class="verticalline"></div>
                            <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" />
                            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: '#4F4F4F' }} >underperforming<span style={{ marginLeft: '145px' }}>overperforming</span></p>
                            <div className="brand_inside_text">
                                <span className='navy'>{Math.round(companyDetails["TotalScore"], 2)}</span>
                                <span>/100</span>
                            </div>
                            <Link to={`/brand-breakdown/${props.company}`} className='breakDown-link'>Detailed Breakdown</Link>
                        </div>
                    </div>
    );
}