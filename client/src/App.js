
import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import Comparison from './pages/Comparison';

import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Company from './components/Companies/Company';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Methodology from './pages/Methodology';
import BrandBreakdown from './pages/BrandBreakdown';
import BrandDirectory from './pages/BrandDirectory';

>>>>>>> d053cabcc7eacb404c6d2c88a7e8f752977049b1
function App() {
  return (
    <Router>
      <NavigationBar />
<<<<<<< HEAD
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      <Switch>
        <Route path = '/Companies/:companyName' exact component = {Company}/>
      </Switch>
=======
      <Route path="/comparison" exact render={() => <Comparison />} />
      <Route path="/methodology" exact render ={()=> <Methodology/>}/>
      <Route path="/brand-breakdown" exact render ={()=> <BrandBreakdown/>}/>
      <Route path="/brand-directory" exact render={()=><BrandDirectory/>}/>
>>>>>>> d053cabcc7eacb404c6d2c88a7e8f752977049b1
    </Router>
  );
}

export default App;
