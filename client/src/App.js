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
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import AboutUs from './pages/AboutUs';
import Instagram from './components/Redirects/Instagram';
import LinkedIn from './components/Redirects/LinkedIn';
import TikTok from './components/Redirects/TikTok'
import Facebook from './components/Redirects/Facebook'
import Twitter from './components/Redirects/Twitter'


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
      <Route path="/instagram" exact render={()=><Instagram/>}/>
      <Route path="/linkedin" exact render={()=><LinkedIn/>}/>
      <Route path="/tiktok" exact render={()=><TikTok/>}/>
      <Route path="/facebook" exact render={()=><Facebook/>}/>
      <Route path="/twitter" exact render={()=><Twitter/>}/>
      <Footer/>
    </Router>
  );
}

export default App;
