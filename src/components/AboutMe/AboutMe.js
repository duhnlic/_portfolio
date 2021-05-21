import Languages from '../Languages/Languages';
import NavBar from '../NavBar/NavBar'
export default function AboutMe(){

    const linkedin = <img src="https://i.imgur.com/X6FIV55.png" className="contact-icon" width="90px" height="90px" alt="bash-icon"></img>

    const github = <img src="https://i.imgur.com/Eu41Jz0.png" className="contact-icon" width="110px" height="110px" alt="nodejs-icon"></img>

    return(
        <div className="about-me">
            <NavBar/>
            <h2>About</h2>
            <div className="about-content">
                <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/drrk%3Agreen-sun.GIF" className="profile-pic" width="350" height="450" alt="portrait"></img>
                <div className="about-section">
                    <p className="description">	Full Stack Developer with knowledge in HTML, CSS, JavaScript, Python, ReactJS, NodeJS, SQL, Express, MongoDB/Mongoose, and Django. An asset that can see the big picture from the start. I spearhead the tasks given to me to ensure a quality product is being created. I specialize in React and database structures. I work well with other collaborators because I have a large scope of development without losing the detailed scope of each design element. </p>
                    <div className="about-x-links">
                        <div
                            className="contact-link" 
                            onClick={()=>{
                            window.open('https://github.com/duhnlic');
                        }}>
                        {github}
                        </div>
                        <div
                            className="contact-link" 
                            onClick={()=>{
                            window.open('https://www.linkedin.com/in/bpstew8au/');
                        }}>
                        {linkedin}
                        </div>
                    </div>
                </div>
            </div>
            <Languages/>
        </div>
    )
}