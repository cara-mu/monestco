import React from 'react'; 
import '../styles/Comparison.css';

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
                <p>Filter by:</p>
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
            </div>
        )
    }
}

export default CompareSearch;