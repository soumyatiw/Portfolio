export default function ProjectCard({title, description, image, backColor, link}){
    return(
        <div className="projectCardDiv" style={{
            backgroundColor: backColor
        }}>
            <h1 style={{fontFamily: '"acorn",sans-serif', fontSize: "clamp(2rem, 8vw, 2.5rem)", marginRight: "40px", color:"#364442"}}>{title}</h1>

            <p style={{fontFamily: '"Ubuntu",sans-serif', fontSize: "clamp(1rem, 8vw, 1.35rem)",  color:"#364442", padding: "20px", margin: "0"}}>{description}</p>

            
            <a src={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="image" style={{width: "30vw"}}/>
            </a>    
            
        </div>
    )
}