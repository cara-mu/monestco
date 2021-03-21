import React from 'react'

import '../styles/BrandDirectory.css';

export default function BrandDirectory() {
    const letterArray = {
        'A':["test","test1","test3","test4","test5","test6"],
        'B':["test2"],
        'C':[],
        'D':[],
        'E':[],
        'F':[],
        'G':[],
        'H':[],
        'I':[],
        'J':[],
        'K':[],
        'L':[],
        'M':[],
        'N':[],
        'O':[],
        'P':[],
        'Q':[],
        'R':[],
        'S':[],
        'T':[],
        'U':[],
        'V':[],
        'W':[],
        'X':[],
        'Y':[],
        'Z':[]
    }

    console.log(letterArray['A'])
    return (
        <div className="brand_directory">
            <div className="brand_directory_title">
                <p>All Brands - Apparel</p>
            </div>
            <div className="brand_directory_list">
                {
                    Object.keys(letterArray).map((key)=>(
                        <a href={`#${key}`}>{key}</a>
                    ))
                }
            </div>
            <div className="brand_directory_wholeList">
             <hr></hr>
                {
                    Object.keys(letterArray).map((key)=>(
                        <div>
                            <div className="brand_directory_eachRow d-block d-md-flex"  id={`${key}`}>
                                <h6 className="letter" >{key}</h6>
                                <div className="row ml-5 ml-md-3 mr-auto">
                                {
                                    letterArray[key].map(val=>(
                                        <p className="col-3 col-md-3 ml-5 ml-md-0">{val}</p>
                                    ))
                                }
                                </div>
                            </div>
                        <hr></hr>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
