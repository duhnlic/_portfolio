// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'
import Languages from './components/Languages/Languages';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
        <header className="App-header"> 
          <Header/>         
        </header>
        <AboutMe/>
        <Projects/>
        <Languages/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

