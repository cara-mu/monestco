import React from 'react'

import '../styles/BrandDirectory.css';

export default function BrandDirectory() {
    const letterArray = {
        'A':["Abercrombie & Fitch","Aldo","Aritiza","Adidas","American Eagle"],
        'B':["Banana Republic","Burberry","Boohoo","Balenciaga"],
        'C':["Canada Goose","Chanel","Converse","Calvin Klein","Christian Dior","Columbia","Champion","Coach"],
        'D':["Dynamite"],
        'E':[],
        'F':["Fila","Forever 21"],
        'G':["Gap","Giorgio Armani","Guess","Garage","Givenchy","Gildan","Gucci"],
        'H':["H & M","Hermes"],
        'I':[],
        'J':["J.Crew"],
        'K':["Kate Spade"],
        'L':["Lacoste","Lululemon Athletica","Levi’s","Louis Vuitton"],
        'M':["Mango","Marc Jacobs","Michael Kors"],
        'N':["NastyGal","New Balance","Nike"],
        'O':["Old Navy"],
        'P':["Patagonia","Prada","PrettyLittleThing"],
        'Q':["Ralph Lauren","Reebok","Roots"],
        'R':[],
        'S':["Skechers","Steve Madden"],
        'T':["Ted Baker","The North Face","Tommy Hilfiger"],
        'U':["Under Armour","Uniqlo","Urban Outfitters"],
        'V':["Vans","Versace","Victoria’s Secret"],
        'W':[],
        'X':[],
        'Y':[],
        'Z':["Zara"]
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
                        <a href={`#${key}`}><span  className={key === "E"  ||  key === "I" || key=== "Q" || key=== "W"||key=== "X"||key=== "Y"  ? "greyed_color":"black_color"} style={{marginLeft:1, marginRight:2}}>{key}</span></a>
                    ))
                }
            </div>
            <div className="brand_directory_wholeList">
             <hr className="hr"></hr>
                {
                    Object.keys(letterArray).map((key)=>(
                        <>
                        { 
                            letterArray[key].length>0 ?
                                <div>
                                    <div className="brand_directory_eachRow d-block d-md-flex"  id={`${key}`}>
                                        {letterArray[key].length>0 ? <> 
                                            <h6 className="letter" >{key}</h6>
                                            
                                            <div className="row ml-5 ml-md-3 mr-auto">
                                                {letterArray[key].length>0 && letterArray[key].map(val=>(
                                                    <p className={`col-3 col-md-3 ml-5 ml-md-0 list_letter 
                                                            ${val==="Burberry" ||val==="Balenciaga" ||val==="Canada Goose" ||val==="Chanel"||val==="Christian Dior"||val==="Coach"
                                                            ||val==="Dynamite"||val==="Fila"||val==="Giorgio Armani "||val==="Gucci"||val==="Givenchy"||val==="Garage"||val==="Gildan"
                                                            ||val==="Hermes"||val==="Hugo Boss"||val==="J. Crew"||val==="Kate Spade"||val==="Lacoste"||val==="Louis Vuitton"
                                                            ||val==="Mango"||val==="Marc Jacobs"||val==="Michael Kors"||val==="Prada"||val==="Roots"||val==="Skechers"||val==="Ted Baker"
                                                            ||val==="Urban Outfitters"||val==="Versace"
                                                            ? "greyed_color":"black_color"}`}
                                                    >
                                                        {val}
                                                    </p>
                                                ))}
                                            </div>
                                            </>:
                                            null}
                                    </div>
                                    <hr className="hr"></hr>
                                </div>
                            :null}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
