import Languages from '../Languages/Languages';
import NavBar from '../NavBar/NavBar'
import resume from '../../assets/Brian_Stewart_Resume.pdf'
import ReactTooltip from 'react-tooltip';


export default function AboutMe(){

    const linkedin = <img src="https://i.imgur.com/X6FIV55.png" className="linkedin-icon" alt="linked-icon"></img>

    const github = <img src="https://i.imgur.com/Eu41Jz0.png" className="contact-icon" alt="github-icon"></img>

    const resumeIcon = <img src="https://i.imgur.com/fXfjqwS.png" className="contact-icon" alt="resume-icon"></img>

    const connect = <img src="https://i.imgur.com/8UJFfal.png" className="contact-icon" alt="connect-icon"></img>


    return(
        <div className="about-me">
            <NavBar/>
            <ReactTooltip/>
            <div className="about-content">
                <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/IMG_8711.JPG" className="profile-pic"  alt="portrait"></img>
                <div className="about-section">
                    <p className="description">	Full Stack Developer with knowledge in HTML, CSS, JavaScript, Python, ReactJS, NodeJS, SQL, Express, MongoDB/Mongoose, and Django. An asset that can see the big picture from the start. I spearhead the tasks given to me to ensure a quality product is being created. I specialize in React and database structures. I work well with other collaborators because I have a large scope of development without losing the detailed scope of each design element. </p>
                    <div className="about-x-links">
                        <div
                            className="contact-link"
                            data-tip="github profile" 
                            onClick={()=>{
                            window.open('https://github.com/duhnlic');
                        }}>
                        {github}
                        </div>
                        <div
                            className="contact-link" 
                            data-tip="linkedin profile"
                            onClick={()=>{
                            window.open('https://www.linkedin.com/in/bpstew8au/');
                        }}>
                        {linkedin}
                        </div>
                        <a href={resume} target="_blank" data-tip="download resume">{resumeIcon}</a>
                        <a href="mailto:brianphillipstewart@gmail.com" target="_blank" data-tip="email">{connect}</a>
                    </div>
                </div>
            </div>
            <Languages/>
        </div>
    )
}