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

    // hook
    useEffect(() => {

        axios.get(`/api/v1/similarcompanies?company=${props.company}`).
        then((resp) => {
            let data = SimilarBrand;
            data["1"].name = resp.data["1"].name;
            data["1"].score = resp.data["1"].score;
            data["2"].name = resp.data["2"].name;
            data["2"].score = resp.data["2"].score;
            data["3"].name = resp.data["3"].name;
            data["3"].score = resp.data["3"].score;
            data["4"].name = resp.data["4"].name;
            data["4"].score = resp.data["4"].score;
            setSimilarBrand(data);
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