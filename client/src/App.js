import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Company from './components/Companies/Company';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </Router>
  );
}

export default App;
