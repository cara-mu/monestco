import {useEffect, useState} from "react";
import axios from "axios";
import SubSimilarBrand from './SubSimilarBrand';


export default function SimilarBrand(props) {

    const similarbrands = {
        "1": {
            "name": "",
            "score": 0
          },
        "2": {
          "name": "",
          "score": 0
        },
        "3": {
          "name": "",
          "score": 0
        },
        "4": {
          "name": "",
          "score": 0
        }
    }

    const [SimilarBrand, setSimilarBrand] = useState(similarbrands);

    //There are special characters inside company name, such as 'H&M'
    let company_name = encodeURIComponent(props.company);
    let url = "/api/v1/similarcompanies?company=" + company_name;

    // hook
    useEffect(() => {

        axios.get(url).
        then((resp) => {
            setSimilarBrand(resp.data);
        })
    }, [props.company]);
    
    return (
    
    <div>
        <div className="similar_brands">
        <div className='Brand-Section-title'>Similar Brands</div>
        <div className='Decorative-Line'></div>
        <div className="similar_brands-container">
            <div>
            <SubSimilarBrand name = {SimilarBrand["1"].name} score = {SimilarBrand["1"].score}/>
            </div>
            <div>
            <SubSimilarBrand name = {SimilarBrand["2"].name} score = {SimilarBrand["2"].score}/>
            </div>
            <div>
            <SubSimilarBrand name = {SimilarBrand["3"].name} score = {SimilarBrand["3"].score}/>
            </div>
            <div>
            <SubSimilarBrand name = {SimilarBrand["4"].name} score = {SimilarBrand["4"].score}/>
            </div>
        </div>
        </div>
    </div>
    );
}