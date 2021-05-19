

export default function Background(){
    return(
        <div className="background-container">
            <video 
                id="video-bg" 
                className="background" 
                autoPlay 
                muted 
                loop
                >
                <source src='https://bstewart-portfolio.s3.us-east-2.amazonaws.com/Portfolio+Background+video+(large)+(1).mp4' type="video/mp4"/>
            </video>
        </div>
    )
}