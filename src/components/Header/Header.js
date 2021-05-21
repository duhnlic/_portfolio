import  {NavLink} from 'react-router-dom';
import name from '../../assets/brian_stewart.svg';
import about from '../../assets/about.svg';
import projects from '../../assets/projects.svg';

export default function Header(){

    return(
        <div className="App-header">
            <div className="header">
            <img src={name} width="1200" height="400" className="name" alt="name" />
                <h4>&copy;</h4>
            </div>
            <div className="home-links">
                <NavLink to="about" className="home-nav1">
                    <img src={about} width="150" height="120" className="" alt="name" />
                </NavLink>
                <NavLink to="projects" className="home-nav2">
                    <img src={projects} width="190" height="150" className="" alt="name" />
                </NavLink>
            </div>
        </div>
    )
}