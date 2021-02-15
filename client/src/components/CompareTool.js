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
            companystandards1: {},
            companystandards2: {},
            companystandards3: {},
            firstcomp: '',
            secondcomp: '',
            thirdcomp: '',
            allcompanies: [],
            returnedCompanies1: [],
            returnedCompanies2: [],
            returnedCompanies3: []
        }

        this.enterFirst = this.enterFirst.bind(this);
        this.enterSecond = this.enterSecond.bind(this);
        this.enterThird = this.enterThird.bind(this);
        this.returnIndustryStandards = this.returnIndustryStandards.bind(this);
        this.enterCompanies = this.enterCompanies.bind(this);
        this.renderCompanies = this.renderCompanies.bind(this);

    }

    mapCompanies = (companies) => {
        return companies.map(company => {
            return company;
        })
    }

    async returnIndustryStandards(company, condition) {
        console.log(company);
        await axios.post('/companydetails', {}, {
               params: company
            }).then(resp => {
                const companystandards = {};
                for (const standard in resp.data.rows[0]) {
                    companystandards[standard] = resp.data.rows[0][standard];
                }
                if (condition == 1) this.setState({companystandards1: companystandards});
                if (condition == 2) this.setState({companystandards2: companystandards});
                if (condition == 3) this.setState({companystandards3: companystandards});
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

    compareStandards(companystandard, industrystandard) {
        if (companystandard > industrystandard) return "greensquare";
        if (companystandard < industrystandard) return "orangesquare";
        if (companystandard == industrystandard) return "yellowsquare";
        else return 'graysquare';
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

    renderGridItems(companystandards) {
        console.log(this.state.companystandards1);
        const industryfields = ['diversityandinclusion', 'workerexploitation', 'wasteandpollution', 'sustainablematerials']
        return industryfields.map(field => {
            return <div className={'square ' + this.compareStandards(this.state.industrystandards[field], companystandards[field])}></div>
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

        const renderGridItems1 = () => {
            return this.renderGridItems(this.state.companystandards1);
        }

        const renderGridItems2 = () => {
            return this.renderGridItems(this.state.companystandards2);
        }

        const renderGridItems3 = () => {
            return this.renderGridItems(this.state.companystandards3);
        }

        return(
            <div className="apparelsearch" style={{marginTop: '2.5%', border: ''}}>
                <span style={{marginLeft: '19.5%', border: ''}}>
                    <input type='text' placeholder="Type the brand" value={this.state.firstcomp} onChange={this.enterFirst} />
                    <input placeholder="Type the brand" value={this.state.secondcomp} onChange={this.enterSecond} />
                    <input placeholder="Type the brand" value={this.state.thirdcomp} onChange={this.enterThird} />
                    {renderCompanies1()}
                    <div style={{marginLeft: "22%"}}>{renderCompanies2()}</div>
                    <div style={{marginLeft: "44%"}}>{renderCompanies3()}</div>
                </span>
                <Grid container style={{border: 'solid'}}>
                <Row container className="fieldnames" style={{width: '21%'}}>
                    <p className="specificfield" style={{marginTop: '33%'}}>DIVERSITY & INCLUSION</p>
                    <p className="specificfield">WORKER EXPLOITATION</p>
                    <p className="specificfield">WASTE & POLLUTION</p>
                    <p className="specificfield">SUSTAINABLE MATERIALS</p>
                </Row>
                <Row container className='squarecontainer firstcontainer'>
                    {renderGridItems1(this.state.companystandards)}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems2(this.state.companystandards)}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems3(this.state.companystandards)}
                </Row>
                <Row container className="dropdownarrows">
                    <div className="circle" style={{marginTop: '65px'}}>
                        <i className="arrowdown"></i>
                    </div>
                    <div className="circle">
                        <i className="arrowdown"></i>
                    </div>
                    <div className="circle">
                        <i className="arrowdown"></i>
                    </div>
                    <div className="circle">
                        <i className="arrowdown"></i>
                    </div>
                </Row>
                </Grid>
            </div>
        )
    }
}

export default CompareTool;
