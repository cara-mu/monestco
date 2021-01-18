import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default App;
