import { Link, useParams, withRouter, useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

export default function CompanyDetails(props) {
    return (
    <Link className='Similar-Link' to={'/companies/' + props.similarCompany}> <p>{props.similarCompany}</p>
        <div className='brand_box'>
            <div className="d-fldex justify-content-center" style={{ position: "relative" }}>
                <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginTop: '8%', textAlign: 'center' }}>industry average</div>
                <div style={{ textAlign: 'center' }}><AiFillCaretDown style={{}} /></div>
                <div class="horizontalline2" style={{ width: `${props.sliderLength}px` }}></div>
                <div class="verticalline2"></div>
                <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" className="brand_logo" />
                <div className="performing-Container"><span>underperforming</span><span>overperforming</span></div>
            </div>
            <div className="brand_inside_text ml-10perc">
                <span>{Math.round(props.score, 2)}</span>
                <span>/100</span>
            </div>
        </div>
    </Link>
    )
}




