import React from 'react'; 
import '../styles/Comparison.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

var filterBy = [
    'Clothing', 'Sportswear', 'Shoes', 'All'
];

class CompareSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: false,
            sportswear: false,
            shoes: false,
            all: false
        };  
        this.toggleClassClothing = this.toggleClassClothing.bind(this);
        this.toggleClassSportswear = this.toggleClassSportswear.bind(this);
        this.toggleClassShoes = this.toggleClassShoes.bind(this);
        this.toggleClassAll = this.toggleClassAll.bind(this);
    };

    toggleClassClothing() {
        const currentState = this.state.clothing;
        this.setState({clothing: !currentState});
    }
    toggleClassSportswear() {
        const currentState = this.state.sportswear;
        this.setState({sportswear: !currentState});
    }
    toggleClassShoes() {
        const currentState = this.state.shoes;
        this.setState({shoes: !currentState});
    }
    toggleClassAll() {
        const currentState = !this.state.all;
        this.setState({all: !currentState});
    }

    render() {   
        return (
            <div>
                <p style={{marginBottom: '9%', fontSize: '18px', color: '#3D3E3F'}}>Filter by:</p>
                <span 
                    className={this.state.clothing ? 'categoryfocus' : null}
                    onClick = {this.toggleClassClothing}
                >Clothing</span>
                <span 
                    className={this.state.sportswear ? 'categoryfocus' : null}
                    onClick = {this.toggleClassSportswear}
                >Sportswear</span>
                <span 
                    className={this.state.shoes ? 'categoryfocus' : null}
                    onClick = {this.toggleClassShoes}
                >Shoes</span>
                <span 
                    className={this.state.all ? 'categoryfocus' : null}
                    onClick = {this.toggleClassAll}
                >All</span>

                <hr />
                <FontAwesomeIcon style={{position: "absolute", marginTop: '22px', marginLeft: '8px', color: 'rgba(50, 50, 50, 0.5'}} icon={faSearch} />
                <input type="text" onChange={this.handleChange} placeholder="Search the brand" />
            </div>
        )
    }
}

export default CompareSearch;