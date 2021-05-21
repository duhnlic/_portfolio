import  {NavLink} from 'react-router-dom';

export default function NavBar(){

    return(
        <div className="navbar">
            <NavLink to="/" className="navlink">Home</NavLink>
            <NavLink to="about" className="navlink">About</NavLink>
            <NavLink to="projects" className="navlink">projects</NavLink>
        </div>
    )
}