import React from 'react';
import '../styles/Comparison.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class CompareTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            industrystandards: {},
            firstA: -1,
            firstA1: {},
            firstA2: {},
            firstA3: {},
            firstA4: {},
            firstB: -1,
            firstB1: {},
            firstB2: {},
            firstB3: {},
            firstB4: {},
            firstC: -1,
            firstC1: {},
            firstC2: {},
            firstC3: {},
            firstC4: {},
            firstD: -1,
            firstD1: {},
            firstD2: {},
            firstD3: {},
            secondA: -1,
            secondA1: {},
            secondA2: {},
            secondA3: {},
            secondA4: {},
            secondB: -1,
            secondB1: {},
            secondB2: {},
            secondB3: {},
            secondB4: {},
            secondC: -1,
            secondC1: {},
            secondC2: {},
            secondC3: {},
            secondC4: {},
            secondD: -1,
            secondD1: {},
            secondD2: {},
            secondD3: {},
            thirdA: -1,
            thirdA1: {},
            thirdA2: {},
            thirdA3: {},
            thirdA4: {},
            thirdB: -1,
            thirdB1: {},
            thirdB2: {},
            thirdB3: {},
            thirdB4: {},
            thirdC: -1,
            thirdC1: {},
            thirdC2: {},
            thirdC3: {},
            thirdC4: {},
            thirdD: -1,
            thirdD1: {},
            thirdD2: {},
            thirdD3: {},
            firstcomp: '',
            secondcomp: '',
            thirdcomp: '',
            allcompanies: [],
            returnedCompanies1: [],
            returnedCompanies2: [],
            returnedCompanies3: [],
            a_show: false,
            b_show: false,
            c_show: false,
            d_show: false,
            a1_show: false,
            a2_show: false,
            a3_show: false,
            a4_show: false
        }

        this.enterFirst = this.enterFirst.bind(this);
        this.enterSecond = this.enterSecond.bind(this);
        this.enterThird = this.enterThird.bind(this);
        this.returnIndustryStandards = this.returnIndustryStandards.bind(this);
        this.enterCompanies = this.enterCompanies.bind(this);
        this.renderCompanies = this.renderCompanies.bind(this);
        this.renderCompanies = this.renderCompanies.bind(this);
        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);
        this.changeC = this.changeC.bind(this);
        this.changeD = this.changeD.bind(this);
        this.changeA1 = this.changeA1.bind(this);
        this.changeA2 = this.changeA2.bind(this);
        this.changeA3 = this.changeA3.bind(this);
        this.changeA4 = this.changeA4.bind(this);
    }

    mapCompanies = (companies) => {
        return companies.map(company => {
            return company;
        })
    }

    async returnIndustryStandards(company, condition) {
        console.log(condition);
        await axios.post('/companydetailsA', {}, {
               params: company
            }).then(resp => {
                console.log("A");

                var A1 = {};
                A1['A1'] = resp.data.rows[0]['A1'];
                A1['A11_text'] = resp.data.rows[0]['A11_text'];
                A1['A11_score'] = resp.data.rows[0]['A11_score'];
                A1['A12_text'] = resp.data.rows[0]['A12_text'];
                A1['A12_score'] = resp.data.rows[0]['A12_score'];
                
                var A2 = {};
                A2['A2'] = resp.data.rows[0]['A2'];
                A2['A21_score'] = resp.data.rows[0]['A21_score'];
                A2['A21_text'] = resp.data.rows[0]['A22_text'];
                A2['A22_score'] = resp.data.rows[0]['A21_score'];
                A2['A22_text'] = resp.data.rows[0]['A21_text'];
                A2['A23_score'] = resp.data.rows[0]['A23_score'];
                A2['A23_text'] = resp.data.rows[0]['A23_text'];

                var A3 = {};
                A3['A3'] = resp.data.rows[0]['A3'];
                A3['A31_score'] = resp.data.rows[0]['A31_score'];
                A3['A31_text'] = resp.data.rows[0]['A31_text'];
                A3['A32_score'] = resp.data.rows[0]['A32_score'];
                A3['A32_text'] = resp.data.rows[0]['A32_text'];
                A3['A33_score'] = resp.data.rows[0]['A33_score'];
                A3['A33_text'] = resp.data.rows[0]['A33_text'];

                var A4 = {};
                A4['A4'] = resp.data.rows[0]['A4'];
                A4['A41_score'] = resp.data.rows[0]['A41_score'];
                A4['A41_text'] = resp.data.rows[0]['A41_text'];
                A4['A42_score'] = resp.data.rows[0]['A42_score'];
                A4['A42_text'] = resp.data.rows[0]['A42_text'];

                console.log(this.state.firstA4);

                if (condition == 1) this.setState({
                    firstA: resp.data.rows[0]['A'],
                    firstA1: A1,
                    firstA2: A2,
                    firstA3: A3,
                    firstA4: A4         
                });
                if (condition == 2) this.setState({
                    secondA: resp.data.rows[0]['A'],
                    secondA1: A1,
                    secondA2: A2,
                    secondA3: A3,
                    secondA4: A4
                });
                if (condition == 3) this.setState({
                    thirdA: resp.data.rows[0]['A'],
                    thirdA1: A1,
                    thirdA2: A2,
                    thirdA3: A3,
                    thirdA4: A4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsB', {}, {
               params: company
            }).then(resp => {
                console.log("B");
                
                var B1 = {};
                B1['B1'] = resp.data.rows[0]['B1'];
                B1['B11_text'] = resp.data.rows[0]['B11_text'];
                B1['B11_score'] = resp.data.rows[0]['B11_score'];
                B1['B12_text'] = resp.data.rows[0]['B12_text'];
                B1['B12_score'] = resp.data.rows[0]['B12_score'];
                B1['B13_text'] = resp.data.rows[0]['B13_text'];
                B1['B13_score'] = resp.data.rows[0]['B13_score'];
                
                var B2 = {};
                B2['B2'] = resp.data.rows[0]['B2'];
                B2['B21_score'] = resp.data.rows[0]['B21_score'];
                B2['B21_text'] = resp.data.rows[0]['B22_text'];
                B2['B22_score'] = resp.data.rows[0]['B21_score'];
                B2['B22_text'] = resp.data.rows[0]['B21_text'];
                B2['B23_score'] = resp.data.rows[0]['B23_score'];
                B2['B23_text'] = resp.data.rows[0]['B23_text'];

                var B3 = {};
                B3['B3'] = resp.data.rows[0]['B3'];
                B3['B31_score'] = resp.data.rows[0]['B31_score'];
                B3['B31_text'] = resp.data.rows[0]['B31_text'];
                B3['B32_score'] = resp.data.rows[0]['B32_score'];
                B3['B32_text'] = resp.data.rows[0]['B32_text'];
                B3['B33_score'] = resp.data.rows[0]['B33_score'];
                B3['B33_text'] = resp.data.rows[0]['B33_text'];
                B3['B34_score'] = resp.data.rows[0]['B34_score'];
                B3['B34_text'] = resp.data.rows[0]['B34_text'];

                var B4 = {};
                B4['B4'] = resp.data.rows[0]['B4'];
                B4['B41_score'] = resp.data.rows[0]['B41_score'];
                B4['B41_text'] = resp.data.rows[0]['B41_text'];
                B4['B42_score'] = resp.data.rows[0]['B42_score'];
                B4['B42_text'] = resp.data.rows[0]['B42_text'];
                B4['B43_score'] = resp.data.rows[0]['B43_score'];
                B4['B43_text'] = resp.data.rows[0]['B43_text'];
                B4['B44_score'] = resp.data.rows[0]['B44_score'];
                B4['B44_text'] = resp.data.rows[0]['B44_text'];
                B4['B45_score'] = resp.data.rows[0]['B45_score'];
                B4['B45_text'] = resp.data.rows[0]['B45_text'];

                if (condition == 1) this.setState({
                    firstB: resp.data.rows[0]['B'],
                    firstB1: B1,
                    firstB2: B2,
                    firstB3: B3,
                    firstB4: B4
                });
                if (condition == 2) this.setState({
                    secondB: resp.data.rows[0]['B'],
                    secondB1: B1,
                    secondB2: B2,
                    secondB3: B3,
                    secondB4: B4
                });
                if (condition == 3) this.setState({
                    thirdB: resp.data.rows[0]['B'],
                    thirdB1: B1,
                    thirdB2: B2,
                    thirdB3: B3,
                    thirdB4: B4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsC', {}, {
               params: company
            }).then(resp => {
                console.log("C");

                var C1 = {};
                C1['C1'] = resp.data.rows[0]['C1'];
                C1['C11_text'] = resp.data.rows[0]['C11_text'];
                C1['C11_score'] = resp.data.rows[0]['C11_score'];
                C1['C12_text'] = resp.data.rows[0]['C12_text'];
                C1['C12_score'] = resp.data.rows[0]['C12_score'];
                C1['C13_text'] = resp.data.rows[0]['C13_text'];
                C1['C13_score'] = resp.data.rows[0]['C13_score'];
                C1['C14_text'] = resp.data.rows[0]['C14_text'];
                C1['C14_score'] = resp.data.rows[0]['C14_score'];

                var C2 = {};
                C2['C2'] = resp.data.rows[0]['C2'];
                C2['C2_score'] = resp.data.rows[0]['C2_score'];
                C2['C21_text'] = resp.data.rows[0]['C21_text'];
                C2['C21_score'] = resp.data.rows[0]['C21_score'];
                C2['C22_text'] = resp.data.rows[0]['C22_text'];
                C2['C22_score'] = resp.data.rows[0]['C22_score'];
                C2['C23_text'] = resp.data.rows[0]['C23_text'];
                C2['C23_score'] = resp.data.rows[0]['C23_score'];
                C2['C24_text'] = resp.data.rows[0]['C24_text'];
                C2['C24_score'] = resp.data.rows[0]['C24_score'];

                var C3 = {};
                C3['C3'] = resp.data.rows[0]['C3'];
                C3['C3_score'] = resp.data.rows[0]['C3_score'];
                C3['C31_text'] = resp.data.rows[0]['C31_text'];
                C3['C31_score'] = resp.data.rows[0]['C31_score'];
                C3['C32_text'] = resp.data.rows[0]['C32_text'];
                C3['C32_score'] = resp.data.rows[0]['C32_score'];
                C3['C33_text'] = resp.data.rows[0]['C33_text'];
                C3['C33_score'] = resp.data.rows[0]['C33_score'];
                C3['C34_text'] = resp.data.rows[0]['C34_text'];
                C3['C34_score'] = resp.data.rows[0]['C34_score'];

                var C4 = {};
                C4['C4'] = resp.data.rows[0]['C4'];
                C4['C4_score'] = resp.data.rows[0]['C4_score'];
                C4['C41_text'] = resp.data.rows[0]['C41_text'];
                C4['C41_score'] = resp.data.rows[0]['C41_score'];
                C4['C42_text'] = resp.data.rows[0]['C42_text'];
                C4['C42_score'] = resp.data.rows[0]['C42_score'];
                C4['C43_text'] = resp.data.rows[0]['C43_text'];
                C4['C43_score'] = resp.data.rows[0]['C43_score'];
                C4['C44_text'] = resp.data.rows[0]['C44_text'];
                C4['C44_score'] = resp.data.rows[0]['C44_score'];

                if (condition == 1) this.setState({
                    firstC: resp.data.rows[0]['C'],
                    firstC1: C1,
                    firstC2: C2,
                    firstC3: C3,
                    firstC4: C4
                });
                if (condition == 2) this.setState({
                    secondC: resp.data.rows[0]['C'],
                    secondC1: C1,
                    secondC2: C2,
                    secondC3: C3,
                    secondC4: C4
                });
                if (condition == 3) this.setState({
                    thirdC: resp.data.rows[0]['C'],
                    thirdC1: C1,
                    thirdC2: C2,
                    thirdC3: C3,
                    thirdC4: C4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsD', {}, {
               params: company
            }).then(resp => {
                console.log(resp.data.rows[0]);

                var D1 = {};
                D1['D1'] = resp.data.rows[0]['D1'];
                D1['D11_text'] = resp.data.rows[0]['D11_text'];
                D1['D11_score'] = resp.data.rows[0]['D11_score'];
                D1['D12_text'] = resp.data.rows[0]['D12_text'];

                var D2 = {};
                D2['D2'] = resp.data.rows[0]['D2'];
                D2['D2_score'] = resp.data.rows[0]['D2_score'];
                D2['D21_text'] = resp.data.rows[0]['D21_text'];
                D2['D21_score'] = resp.data.rows[0]['D21_score'];
                D2['D22_text'] = resp.data.rows[0]['D22_text'];
                D2['D23_score'] = resp.data.rows[0]['D23_score'];
                D2['D23_text'] = resp.data.rows[0]['D23_text'];

                var D3 = {};
                D3['D3'] = resp.data.rows[0]['D3'];
                D3['D3_score'] = resp.data.rows[0]['D3_score'];
                D3['D31_text'] = resp.data.rows[0]['D31_text'];
                D3['D31_score'] = resp.data.rows[0]['D31_score'];
                D3['D32_text'] = resp.data.rows[0]['D32_text'];
                D3['D33_score'] = resp.data.rows[0]['D33_score'];
                D3['D33_text'] = resp.data.rows[0]['D33_text'];
                D3['D34_score'] = resp.data.rows[0]['D34_score'];
                D3['D34_text'] = resp.data.rows[0]['D34_text'];
                D3['D35_score'] = resp.data.rows[0]['D35_score'];
                D3['D35_text'] = resp.data.rows[0]['D35_text'];

                if (condition == 1) this.setState({
                    firstD: resp.data.rows[0]['D'],
                    firstD1: D1,
                    firstD2: D2,
                    firstD3: D3
                });
                if (condition == 2) this.setState({
                    secondD: resp.data.rows[0]['D'],
                    secondD1: D1,
                    secondD2: D2,
                    secondD3: D3
                });
                if (condition == 3) this.setState({
                    thirdD: resp.data.rows[0]['D'],
                    thirdD1: D1,
                    thirdD2: D2,
                    thirdD3: D3
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    enterCompanies(comp) {
        const companies = this.mapCompanies(this.state.allcompanies);
        return companies.filter(company => {
            return company.toLowerCase().match(comp.toLowerCase());
        })
    }

    async enterFirst(event) {
        this.setState({firstcomp: event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.firstcomp);
        await this.setState({returnedCompanies1: returnedCompanies});
        console.log(this.state.returnedCompanies1);
    }

    async enterSecond(event) {
        this.setState({secondcomp : event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.secondcomp);
        await this.setState({returnedCompanies2: returnedCompanies});
    }

    async enterThird(event) {
        this.setState({thirdcomp : event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.thirdcomp);
        await this.setState({returnedCompanies3: returnedCompanies});
    }

    changeA() {
        const opp = !this.state.a_show;
        this.setState({a_show: opp});
    }

    changeB() {
        const opp = !this.state.b_show;
        this.setState({b_show: opp});
    }

    changeC() {
        const opp = !this.state.c_show;
        this.setState({c_show: opp});
    }

    changeD() {
        const opp = !this.state.d_show;
        this.setState({d_show: opp});
    }

    changeA1() {
        const opp = !this.state.a1_show;
        this.setState({a1_show: opp});
    }

    changeA2() {
        const opp = !this.state.a2_show;
        this.setState({a2_show: opp});
    }

    changeA3() {
        const opp = !this.state.a3_show;
        this.setState({a3_show: opp});
    }

    changeA4() {
        const opp = !this.state.a4_show;
        this.setState({a4_show: opp});
    }

    componentDidMount() {
        axios.get('/allcompanies').then((resp) => {
            const allcompanies = [];
            for (var i = 0; i < resp.data.rows.length; i++) {
                allcompanies.push(resp.data.rows[i].name);
            }
            this.setState({allcompanies: allcompanies});
        })

        axios.get('/industry').then((resp) => {
            const industrystandards = {};
            for (const standard in resp.data.rows[0]) {
                industrystandards[standard] = resp.data.rows[0][standard];
            }
            this.setState({industrystandards: industrystandards});
        })
    }

    compareStandards(industrystandard, companystandard) {
        if (companystandard == -1 || companystandard == undefined) return "graysquare";
        if (companystandard == industrystandard) return "yellowsquare";
        if (companystandard > industrystandard) return "greensquare";
        else return "orangesquare";
    }

    compareNestedStandards(industrystandard, companystandard) {
        if (companystandard == -1 || companystandard == undefined) return "graysquare";
        if (companystandard == industrystandard) return "yellowsquare1";
        if (companystandard > industrystandard) return "greensquare1";
        else return "orangesquare1";
    }

    renderCompanies(returnedcompanies, condition) {
        if (returnedcompanies.length != 0) {
            return (
                <div className='returnedcompanies'>
                {returnedcompanies.map((company, i) => {
                    return <div key={i} style={{cursor: "pointer"}} onClick={() => this.returnIndustryStandards(company, condition)}>{company}</div>
                })}
                </div>
            )
        }
    }

    renderNestedGrid = (letter, field) => {
        console.log(letter[field]);
        return <div className={'square1 ' + this.compareNestedStandards(this.state.industrystandards[field], letter[field])}>
            {letter[field] != undefined && <div style={{marginTop: '8%', fontWeight: 500}}>{letter[field]} / 100</div> }
        </div>
    }

    renderNestedTwoGrid = (letter, field) => {
        console.log(letter[field]);
        return <div className={'square2 ' + this.compareNestedStandards(this.state.industrystandards[field], letter[field])}>
            {letter[field] != undefined && <div style={{marginTop: '8%', fontWeight: 500}}>{letter[field]} / 100</div> }
        </div>
    }

    // takes in all the company scores for first, second, or third column and shows grids depending
    renderGridItems(firstlevelstandards, A1, B1, C1, D1, A2, B2, C2, D2, A3, B3, C3, D3, A4, B4, C4) {
        const industryfields = ['A', 'B', 'C', 'D'];
        console.log(this.state.industrystandards);
        return industryfields.map((field, i) => {
            return (
                <div style={{marginTop: '15%', border: ''}}>
                    <div key={i} className={'square ' + this.compareStandards(this.state.industrystandards[field], firstlevelstandards[field])}>
                        {firstlevelstandards[field] != -1 && <div style={{marginTop: '15%', fontWeight: 500}}>{firstlevelstandards[field]} / 100</div> }
                    </div>
                    {i == 0 && this.state.a_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(A1, 'A1')}
                            {i == 0 && this.state.a1_show ?    
                        <div style={{marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedTwoGrid(A1, 'A1')}
                            {this.renderNestedTwoGrid(A2, 'A2')}
                            {this.renderNestedTwoGrid(A3, 'A3')}
                            {this.renderNestedTwoGrid(A4, 'A4')}
                        </div>
                        : null
                    }
                            {this.renderNestedGrid(A2, 'A2')}
                            {this.renderNestedGrid(A3, 'A3')}
                            {this.renderNestedGrid(A4, 'A4')}
                        </div>
                        : null
                    }
                    {i == 1 && this.state.b_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(B1, 'B1')}
                            {this.renderNestedGrid(B2, 'B2')}
                            {this.renderNestedGrid(B3, 'B3')}
                            {this.renderNestedGrid(B4, 'B4')}
                        </div>
                        : null
                    }
                    {i == 2 && this.state.c_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(C1, 'C1')}
                            {this.renderNestedGrid(C2, 'C2')}
                            {this.renderNestedGrid(C3, 'C3')}
                            {this.renderNestedGrid(C4, 'C4')}
                        </div>
                        : null
                    }
                    {i == 3 && this.state.d_show ?    
                        <div style={{border: '', marginTop: '-35%'}}>
                            {this.renderNestedGrid(D1, 'D1')}
                            {this.renderNestedGrid(D2, 'D2')}
                            {this.renderNestedGrid(D3, 'D3')}
                        </div>
                        : null
                    }
                </div>
            )
        })
    }

    render() {

        const renderCompanies1 = () => {
            return this.renderCompanies(this.state.returnedCompanies1, 1);
        }
    
        const renderCompanies2 = () => {
            return this.renderCompanies(this.state.returnedCompanies2, 2);
        }
    
        const renderCompanies3 = () => {
            return this.renderCompanies(this.state.returnedCompanies3, 3);
        }

        // returns first level nesting scores of the first company, including all of its second and third nested scores
        const renderGridItems1 = () => {
            const firstlevel = {};
            
            firstlevel['A'] = this.state.firstA;
            firstlevel['B'] = this.state.firstB;
            firstlevel['C'] = this.state.firstC;
            firstlevel['D'] = this.state.firstD;
            
            return this.renderGridItems(firstlevel, this.state.firstA1, this.state.firstB1, this.state.firstC1, this.state.firstD1, this.state.firstA2, this.state.firstB2, this.state.firstC2, this.state.firstD2, this.state.firstA3, this.state.firstB3, this.state.firstC3, this.state.firstD3, this.state.firstA4, this.state.firstB4, this.state.firstC4);
        }

        // returns first level nesting scores of the second company, including all of its second and third nested scores
        const renderGridItems2 = () => {
            const firstlevel = {};
            firstlevel['A'] = this.state.secondA;
            firstlevel['B'] = this.state.secondB;
            firstlevel['C'] = this.state.secondC;
            firstlevel['D'] = this.state.secondD;

            return this.renderGridItems(firstlevel, this.state.secondA1, this.state.secondB1, this.state.secondC1, this.state.secondD1, this.state.secondA2, this.state.secondB2, this.state.secondC2, this.state.secondD2, this.state.secondA3, this.state.secondB3, this.state.secondC3, this.state.secondD3, this.state.secondA4, this.state.secondB4, this.state.secondC4);
        }

        // returns first level nesting scores of the third company, including all of its second and third nested scores
        const renderGridItems3 = () => {
            const firstlevel = {};
            firstlevel['A'] = this.state.thirdA;
            firstlevel['B'] = this.state.thirdB;
            firstlevel['C'] = this.state.thirdC;
            firstlevel['D'] = this.state.thirdD;
            return this.renderGridItems(firstlevel, this.state.thirdA1, this.state.thirdB1, this.state.thirdC1, this.state.thirdD1, this.state.thirdA2, this.state.thirdB2, this.state.thirdC2, this.state.thirdD2, this.state.thirdA3, this.state.thirdB3, this.state.thirdC3, this.state.thirdD3, this.state.thirdA4, this.state.thirdB4, this.state.thirdC4);
        }

        return(
            <div className="apparelsearch" style={{marginTop: '2.5%'}}>
                <span style={{marginLeft: '19.5%'}}>
                    <input type='text' placeholder="Type the brand" value={this.state.firstcomp} onChange={this.enterFirst} />
                    <input placeholder="Type the brand" value={this.state.secondcomp} onChange={this.enterSecond} />
                    <input placeholder="Type the brand" value={this.state.thirdcomp} onChange={this.enterThird} />
                    {renderCompanies1()}
                    <div style={{marginLeft: "22%"}}>{renderCompanies2()}</div>
                    <div style={{marginLeft: "44%"}}>{renderCompanies3()}</div>
                </span>
                <Grid container style={{border: ''}}>
                <Row container className="fieldnames" style={{width: '21%', border: ''}}>
                    <p className="specificfield" style={{marginTop: '33%'}}>DIVERSITY & INCLUSION</p>
                    <hr className="underline" />
                    {this.state.a_show ? 
                        <div style={{border: ''}}>
                            <p className="specificfield_a">Discrimination</p> 
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Gender Equality</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Cultural Diversity</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Inclusivity</p>
                            <hr className="underline_nested" />
                        </div>
                    : null}
                    <p className="specificfield">WORKER EXPLOITATION</p>
                    <hr className="underline" />
                    {this.state.b_show ? 
                        <div>
                            <p className="specificfield_a">Child Labour</p> 
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Forced Labour</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Living Wage</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Working Conditions</p>
                            <hr className="underline_nested" />
                        </div>
                    : null}
                    <p className="specificfield">WASTE & POLLUTION</p>
                    <hr className="underline" />
                    {this.state.c_show ? 
                        <div>
                            <p className="specificfield_a">Air Pollution (GHGs)</p> 
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Water Pollution & Wastes</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Packaging Waste</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Material Waste</p>
                            <hr className="underline_nested" />
                        </div>
                    : null}
                    <p className="specificfield">SUSTAINABLE MATERIALS</p>
                    <hr className="underline" />
                    {this.state.d_show ? 
                        <div>
                            <p className="specificfield_a">Cotton Farming</p> 
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Deforestation</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Animal Welfare</p>
                            <hr className="underline_nested" />
                        </div>
                    : null}
                </Row>
                <Row container className='squarecontainer firstcontainer'>
                    {renderGridItems1()}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems2()}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems3()}
                </Row>
                <Row container className="dropdownarrows">
                    <div className="circle" style={{marginTop: '65px'}} onClick={this.changeA}>
                        <i className="arrowdown"></i>
                    </div>
                    {this.state.a_show ?
                    <div>
                        <div className="circle_nested" onClick={this.changeA1}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className="circle_nested" onClick={this.changeA2}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className="circle_nested" onClick={this.changeA3}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className="circle_nested" onClick={this.changeA4}>
                            <i className="arrowdown"></i>
                        </div>
                    </div>
                    : null
                    }
                    <div className={"circle " + (this.state.a_show ? "extraspace" : null)} onClick={this.changeB}>
                        <i className="arrowdown"></i>
                    </div>
                    <div className={"circle " + (this.state.b_show ? "extraspace" : null)} onClick={this.changeC}>
                        <i className="arrowdown"></i>
                    </div>
                    <div className={"circle " + (this.state.c_show ? "extraspace" : null)} onClick={this.changeD}>
                        <i className="arrowdown"></i>
                    </div>
                </Row>
                </Grid>
            </div>
        )
    }
}

export default CompareTool;
