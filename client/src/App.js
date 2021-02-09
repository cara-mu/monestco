
import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import Comparison from './pages/Comparison';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path="/comparison" exact render={() => <Comparison />} />
    </Router>
  );
}

export default App;
