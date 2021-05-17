import  {NavLink} from 'react-router-dom';
export default function Header(){

    return(
        <div className="App-header">
            <div className="header">
                <h1>Brian Stewart</h1>
                <h4>&copy;</h4>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="projects">Projects</NavLink>
            </div>
        </div>
    )
}