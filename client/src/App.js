
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
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import ThankYou from './components/ThankYou';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      <Switch>
        <Route path = '/companies/:companyName' exact component = {Company}/>
      </Switch>
      <Route path="/comparison" exact component = {Comparison} />
      <Route path="/methodology" exact component = {Methodology}/>
      <Route path="/brand-breakdown/:companyName" exact component={BrandBreakdown}/>
      <Route path="/brand-directory" exact render={()=><BrandDirectory/>}/>
      <Route path="/FAQ" exact render={()=><FAQ/>}/>
      <Route path="/PrivacyPolicy" exact render={()=><PrivacyPolicy/>}/>
      <Route path="/ContactUs" exact render={()=><ContactUs/>}/>
      <Route path="/ThankYou" exact render={()=><ThankYou/>}/>
      <Route path="/AboutUs" exact render={()=><AboutUs/>}/>
    </Router>
  );
}

export default App;
