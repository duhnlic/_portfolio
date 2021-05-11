// import logo from './logo.svg';
import './App.css';
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Background/>
  
      <Router>
        <header className="App-header">
          <h1>This Site is Under Construction</h1>
          <h3>&copy; Brian Stewart 2021</h3>
          <div className="link1">
            <a href="https://github.com/duhnlic" className="link">Github</a>
          </div>
          <div className="link2">
            <a href="https://www.linkedin.com/in/bpstew8au/" className="link">Linkedin</a>
          </div>

          
        </header>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
