// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
      {/* <NavBar/> */}
          {/* <Header/>          */}
      <Switch>
        <Route exact path={"/"} component={Header}/>
        <Route exact path={"/about"} component={AboutMe}/>
        <Route exact path={"/projects"} component={Projects}/>
      </Switch>
        {/* <AboutMe/> */}
        {/* <Projects/> */}
        {/* <Languages/> */}
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

