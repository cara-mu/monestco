import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Uniqlo from './components/Companies/uniqlo';
import HomePage from './components/Home/HomePage';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      <Switch>
        <Route path = '/components/Companies/uniqlo.js' exact component = {Uniqlo}/>
      </Switch>
    </Router>
  );
}

export default App;
