import NavBar from '../NavBar/NavBar'
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const contentStyle = {
    height: '200px',
    width: '335px',
    color: '#fff',
    lineHeight: '260px',
    contentAlign: 'center',
    margin: 'auto',


};



export default function Projects(){

    return(
        <div className="project-page">
        <NavBar/>
            <div className="project-gallery">
                <Row gutter={[16, 40]}>
                        <Col span={12}>
                            <div className="portfolio-item">
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
                                        <img src="https://i.imgur.com/UtuG308.png" className="project-indiv" alt="radio-screenshot" style={contentStyle}></img>
                                    </div>
                                </Carousel>
                                <h4 className="carousel-title">Pebl Radio: Internet Radio App</h4>
                                <p className="carousel-description">React | Mongo | Express | Node</p>
                                <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/pebl_radio');
                                            }
                                        }>Front End
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/worldwide-radio-database');
                                            }
                                        }>Back End
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://www.peblradio.com');
                                            }
                                        }>Live Version
                                    </Button>    
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://duhnlic.github.io/pebl_radio/#/');
                                            }
                                        }>Previous Version
                                    </Button>
                                </ButtonGroup>      
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="portfolio-item">
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
                                <h4 className="carousel-title">betterQuest: Personal Betterment App</h4>
                                <p className="carousel-description">React | Django</p>
                                <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/betterQuest');
                                            }
                                        }>Front End
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/questingapp_api');
                                            }
                                        }>Back End
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://betterquest.herokuapp.com/');
                                            }
                                        }>Live Version
                                    </Button>  
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="portfolio-item">
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
                                <h4 className="carousel-title">Tungsten: Internet Bookmarks App</h4>
                                <p className="carousel-description">React | Mongo | Express | Node</p>
                                <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/tungsten-bookmarks');
                                            }
                                        }>Front End
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/bookmarkapi');
                                            }
                                        }>Back End
                                    </Button> 
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://tungsten-bookmarks.herokuapp.com/');
                                            }
                                        }>Live Version
                                    </Button> 
                                </ButtonGroup> 
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="portfolio-item">
                                <Carousel autoplay>
                                    <div>
                                        <img src="https://i.imgur.com/TgM0zsZ.png" className="project-indiv" alt="weather-screenshot" style={contentStyle}></img>
                                    </div>
                                    <div>
                                        <img src="https://i.imgur.com/Lg5FW6R.png" className="project-indiv" alt="weather-screenshot" style={contentStyle}></img>
                                    </div>
                                </Carousel>
                                <h4 className="carousel-title">BS Weather: Weather Info App</h4>
                                <p className="carousel-description">HTML | CSS | JS</p>
                                <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://github.com/duhnlic/weather-app');
                                            }
                                        }>Front End        
                                    </Button>
                                    <Button
                                        className="btn" 
                                        onClick={()=>{
                                            window.open('https://duhnlic.github.io/weather-app/');
                                            }
                                        }>Live Version
                                    </Button>
                                </ButtonGroup>  
                            </div>
                        </Col>
                        </Row>
                        <Row gutter={[16, 40]}>
                        <Col span={12}>
                        <div className="portfolio-item">
                            <Carousel autoplay>
                            <div>
                                <img src="https://i.imgur.com/JvGvIxc.png" className="project-indiv" alt="giphy-screenshot" style={contentStyle}></img>
                            </div>
                            <div>
                                <img src="https://i.imgur.com/FSzJaGk.png" className="project-indiv" alt="giphy-screenshot" style={contentStyle}></img>
                            </div>
                            </Carousel>
                            <h4 className="carousel-title">Giphy Searcher: A Giphy Search Engine</h4>
                            <p className="carousel-description">HTML | CSS | JS</p>
                            <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                <Button
                                    className="btn" 
                                    onClick={()=>{
                                        window.open('https://github.com/duhnlic/giphy-app');
                                        }
                                    }>Front End
                                </Button>
                                <Button
                                    className="btn" 
                                    onClick={()=>{
                                        window.open('https://60b41bdfbd34e45ad8483913--hopeful-benz-b1beda.netlify.app/');
                                        }
                                    }>Live Version
                                </Button> 
                            </ButtonGroup> 
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="portfolio-item">
                        <Carousel autoplay>
                        <div>
                            <img src="https://i.imgur.com/74jE4wz.png" className="project-indiv" alt="todo-screenshot" style={contentStyle}></img>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/ZyiKyie.png" className="project-indiv" alt="todo-screenshot" style={contentStyle}></img>
                        </div>
                        </Carousel>
                        <h4 className="carousel-title">To Do List App</h4>
                        <p className="carousel-description">HTML | CSS | JS</p>
                        <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                            <Button
                                className="btn" 
                                onClick={()=>{
                                    window.open('https://github.com/duhnlic/todo_list-app');
                                    }
                                }>Front End
                            </Button>
                            <Button
                                className="btn" 
                                onClick={()=>{
                                    window.open('https://your-toodoos.herokuapp.com/');
                                    }
                                }>Live Version
                            </Button>
                        </ButtonGroup>
                        </div>
                    </Col>
                    <Col span={12}>
                    <div className="portfolio-item">
                    <Carousel autoplay>
                            <div>
                                <img src="https://i.imgur.com/4kqiFsX.jpg" className="project-indiv" alt="first-screenshot" style={contentStyle}></img>
                            </div>
                            <div>
                                <img src="https://i.imgur.com/y4fTQbE.png" className="project-indiv" alt="first-screenshot" style={contentStyle}></img>
                            </div>
                        </Carousel>
                        <h4 className="carousel-title">Salvage Op: Expanse RPG Game</h4>
                        <p className="carousel-description">HTML | SASS | JS</p>
                        <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                            <Button
                                className="btn" 
                                onClick={()=>{
                                    window.open('https://github.com/duhnlic/salvage_op_game.io');
                                    }
                                }>Front End
                            </Button>
                            <Button
                                className="btn" 
                                onClick={()=>{
                                    window.open('https://duhnlic.github.io/salvage_op_game.io/');
                                    }
                                }>Live Version
                            </Button>
                        </ButtonGroup>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="portfolio-item">
                            <Carousel autoplay>
                                <div>
                                    <img src="https://i.imgur.com/0p7681c.png" className="project-indiv" alt="portfolio-screenshot" style={contentStyle}></img>
                                </div>
                                <div>
                                    <img src="https://i.imgur.com/aER92Oc.png" className="project-indiv" alt="portfolio-screenshot" style={contentStyle}></img>
                                </div>
                            </Carousel>
                            <h4 className="carousel-title">Portfolio</h4>
                            <p className="carousel-description">React</p>
                            <ButtonGroup orientation="vertical" variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                <Button
                                    className="btn" 
                                    onClick={()=>{
                                        window.open('https://github.com/duhnlic/_portfolio');
                                        }
                                    }>Front End
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>          
            </div>
        </div>
    )
}



