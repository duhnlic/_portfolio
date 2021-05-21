import Languages from '../Languages/Languages';
import NavBar from '../NavBar/NavBar'
export default function AboutMe(){
    return(
        <div className="about-me">
            <NavBar/>
            <h2>About</h2>
            <div className="about-content">
            <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/drrk%3Agreen-sun.GIF" className="profile-pic" width="350" height="450" alt="portrait"></img>
        
            <p className="description">	Full Stack Developer with knowledge in HTML, CSS, JavaScript, Python, ReactJS, NodeJS, SQL, Express, MongoDB/Mongoose, and Django. An asset that can see the big picture from the start. I spearhead the tasks given to me to ensure a quality product is being created. I specialize in React and database structures. I work well with other collaborators because I have a large scope of development without losing the detailed scope of each design element. </p>
            </div>
            <Languages/>
        </div>
    )
}