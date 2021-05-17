import NavBar from '../NavBar/NavBar'
export default function Projects(){

    return(
        <div>
            <NavBar/>
            <div className="project-gallery">
                <div className="radio-app">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="radio-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>Pebl Radio: Internet Radio App</h4>
                    <p></p>
                    <button 
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/pebl_radio');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/worldwide-radio-database');
                        }
                    }>Back End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://www.peblradio.com');
                        }
                    }>Live Version
                    </button>    
                    {/* <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Previous Version
                    </button>       */}
                </div>
                <div className="betterQuest">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="betterquest-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>betterQuest: Personal Betterment App</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/betterQuest');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/questingapp_api');
                        }
                    }>Back End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://betterquest.herokuapp.com/');
                        }
                    }>Live Version
                    </button>  
                </div>
                <div className="bookmarks-app">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="bookmarks-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>Tungsten: Internet Bookmarks App</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/tungsten-bookmarks');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/bookmarkapi');
                        }
                    }>Back End
                    </button> 
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Live Version
                    </button>  
                </div>
                <div className="weather-app">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="weather-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>BS Weather: Weather Info App</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/weather-app');
                        }
                    }>Front End        
                    </button>
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Live Version
                    </button>  
                </div>
                <div className="giphy-app">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="giphy-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>Giphy Searcher: A Giphy Search Engine</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/giphy-app');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Live Version
                    </button>  
                </div>
                <div className="todo-app">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="todo-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>To Do List App</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/todo_list-app');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Live Version
                    </button>
                </div>
                <div className="first-project">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="first-screenshot"></img>
                    {/* maybe hover image */}
                    <h4>Salvage Op: A point and click Expanse RPG Game</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('');
                        }
                    }>Live Version
                    </button>
                </div>
                <div className="portfolio-backend">
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" width="300" height="225" alt="repo-screenshot"></img>
                    <h4>Portfolio</h4>
                    <p></p>
                    <button
                    onClick={()=>{
                        window.open('https://github.com/duhnlic/salvage_op_game.io');
                        }
                    }>Front End
                    </button>
                    <button
                    onClick={()=>{
                        window.open('https://duhnlic.github.io/salvage_op_game.io/');
                        }
                    }>Live Version
                    </button>
                </div>
            </div>
        </div>
    )
}