
import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import Comparison from './pages/Comparison';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Methodology from './pages/Methodology';
import Methodology from './pages/Methodology-new';
//import BrandBreakdown from './pages/BrandBreakdown';
import BrandBreakdown from './pages/BrandBreakdown-new';
import BrandDirectory from './pages/BrandDirectory';
import Company from './components/Companies/Company';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      <Switch>
        <Route path = '/Companies/:companyName' exact component = {Company}/>
      </Switch>
      <Route path="/comparison" exact component = {Comparison} />
      <Route path="/methodology" exact component ={Methodology}/>
      <Route path="/brand-breakdown" exact render ={()=> <BrandBreakdown/>}/>
      <Route path="/brand-directory" exact render={()=><BrandDirectory/>}/>
    </Router>
  );
}

export default App;
