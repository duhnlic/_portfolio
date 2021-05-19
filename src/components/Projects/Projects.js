import NavBar from '../NavBar/NavBar'
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
    height: '200px',
    width: '500px',
    color: '#fff',
    lineHeight: '260px',
    contentAlign: 'center',
    margin: 'auto',
};


export default function Projects(){

    return(
        <div>
            <NavBar/>
            <div className="project-gallery">
                <div className="radio-app">
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/ElCVwDZ.png" className="project-indiv" alt="radio-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/6WHJm3s.png" className="project-indiv" alt="radio-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/W0JXAL6.png" className="project-indiv" alt="radio-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://bstewart-portfolio.s3.us-east-2.amazonaws.com/img_placeholder.JPG" className="project-indiv" alt="radio-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
                    <h4>Pebl Radio: Internet Radio App</h4>
                    <p>A radio streaming </p>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/AQ1lC2h.png" className="project-indiv" alt="betterquest-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/i3L0Zu2.png" className="project-indiv" alt="betterquest-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/EurjeAw.png" className="project-indiv" alt="betterquest-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/LsYGpSH.png" className="project-indiv" alt="bookmarks-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/vM0FJZU.png" className="project-indiv" alt="bookmarks-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/ysgBJnt.png" className="project-indiv" alt="bookmarks-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/TgM0zsZ.png" className="project-indiv" alt="weather-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/Lg5FW6R.png" className="project-indiv" alt="weather-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/JvGvIxc.png" className="project-indiv" alt="giphy-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/FSzJaGk.png" className="project-indiv" alt="giphy-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/74jE4wz.png" className="project-indiv" alt="todo-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/ZyiKyie.png" className="project-indiv" alt="todo-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
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
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/4kqiFsX.jpg" className="project-indiv" alt="first-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/y4fTQbE.png" className="project-indiv" alt="first-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
                    <h4>Salvage Op: A point and click Expanse RPG Game</h4>
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
                <div className="portfolio-backend">
                <Carousel autoplay>
                    <div>
                    <img src="https://i.imgur.com/0p7681c.png" className="project-indiv" alt="portfolio-screenshot" style={contentStyle}></img>
                    </div>
                    <div>
                    <img src="https://i.imgur.com/aER92Oc.png" className="project-indiv" alt="portfolio-screenshot" style={contentStyle}></img>
                    </div>
                    </Carousel>
                    <h4>Portfolio</h4>
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
            </div>
        </div>
    )
}



