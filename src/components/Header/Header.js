import  {NavLink} from 'react-router-dom';
export default function Header(){

    return(
        <div className="App-header">
            <div className="header">
                <h1>Brian Stewart</h1>
                <h4>&copy;</h4>
            </div>
            <div>
                <NavLink to="/" className="home-nav">Home</NavLink>
                <NavLink to="about" className="home-nav">About</NavLink>
                <NavLink to="projects" className="home-nav">Projects</NavLink>
            </div>
        </div>
    )
}