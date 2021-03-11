
import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import Comparison from './pages/Comparison';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Methodology from './pages/Methodology';
import BrandBreakdown from './pages/BrandBreakdown';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path="/comparison" exact render={() => <Comparison />} />
      <Route path="/methodology" exact render ={()=> <Methodology/>}/>
      <Route path="/brand-breakdown" exact render ={()=> <BrandBreakdown/>}/>
    </Router>
  );
}

export default App;
