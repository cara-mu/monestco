import axios from 'axios';

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

export default function BrandProfile(props){
    const [companyDetails, setCompanyDetails] = React.useState(companyinfo);

    axios.get('/companyname',
        {
            params: companyName
        }
    )
        .then((resp) => {
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

    return (
        <div className='Left-Menu'>
                        <div>
                            <img className='brand-logo' src={`${companyDetails[0]["Logo"]}`} alt={`${companyDetails[0]["Logo"]}`} />

                            {/* conditional rendering for subsidiary */}
                            {companyDetails[0]["Subsidiary"] != null &&
                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#797979', margin: '10px 0' }}>Subsidiary of {companyDetails[0]["Subsidiary"]}</div>
                            }

                            <p style={{ marginTop: "5%", color: '#4F4F4F' }}><b>{companyDetails[0]["Name"]}</b> {companyDetails[0]["Description"]}</p>
                        </div>
                        <div>
                            <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginLeft: '105px' }}>industry average</div>
                            <AiFillCaretDown style={{ marginLeft: '155px' }} />
                            {/* {companyDetails[0]["SliderLength"]} */}
                            <div class="horizontalline" style={{ width: `${companyDetails[0]["SliderLength"]}px` }}></div>
                            <div class="verticalline"></div>
                            <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" />
                            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: '#4F4F4F' }} >underperforming<span style={{ marginLeft: '145px' }}>overperforming</span></p>
                            <div className="brand_inside_text">
                                <span className='navy'>{Math.round(companyDetails[0]["TotalScore"], 2)}</span>
                                <span>/100</span>
                            </div>
                            <Link to={`/brand-breakdown/${props.companyName}`} className='breakDown-link'>Detailed Breakdown</Link>
                        </div>
                    </div>
    );
}