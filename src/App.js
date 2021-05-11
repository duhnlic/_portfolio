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
          <a href="https://github.com/duhnlic">Github</a>
          <a href="https://www.linkedin.com/in/bpstew8au/">Linkedin</a>
          
        </header>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
