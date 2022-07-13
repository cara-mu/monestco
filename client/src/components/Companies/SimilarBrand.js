import SubSimilarBrand from './SubSimilarBrand';

export default function SimilarBrand(props) {

    return (
    
    <div>
        <div className="similar_brands">
        <div className='Brand-Section-title'>Similar Brands</div>
        <div className='Decorative-Line'></div>
        <div className="similar_brands-container">
            <div>
            <SubSimilarBrand name = {props.A_name} score = {props.A_score}/>
            </div>
            <div>
            <SubSimilarBrand name = {props.B_name} score = {props.B_score}/>
            </div>
            <div>
            <SubSimilarBrand name = {props.C_name} score = {props.C_score}/>
            </div>
            <div>
            <SubSimilarBrand name = {props.D_name} score = {props.D_score}/>
            </div>
        </div>
        </div>
    </div>
    );
}