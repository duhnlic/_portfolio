

export default function Background(){
    return(
        <div>
            <video 
                id="video-bg" 
                className="background" 
                autoPlay 
                muted 
                loop
                >
                <source src='https://bstewart-portfolio.s3.us-east-2.amazonaws.com/Iridescent_4K_Motion_Background_Loop.mp4' type="video/mp4"/>
            </video>
        </div>
    )
}