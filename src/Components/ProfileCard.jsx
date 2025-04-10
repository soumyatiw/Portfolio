export default function Card({name,imgSrc,url,para}){
    return (
        <div style={{margin:"25px 0px 25px 0px"}}className="platCard">
            <div className="titleDiv">
                <h1 style={{fontFamily:"Acorn", fontWeight:"bolder", fontSize:"clamp(2rem, 8vw, 3rem)", margin:"15px 0 12px 0", color:"rgb(2, 73, 73)"}}>{name}</h1>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="profileBtn" >View Profile</button>
                </a>
                <p style={{fontFamily:"'Ubuntu',sans-serif", width: "80%", textAlign:"left", marginLeft:"30px", fontSize:"clamp(0.75rem, 8vw, 1.20rem", lineHeight: "1.30", color:"rgb(118, 139, 134)"}}>{para}</p>
            </div>
            <img style={{borderRadius:"10px"}} width="700px" src={imgSrc}/>
        </div>
    )
}