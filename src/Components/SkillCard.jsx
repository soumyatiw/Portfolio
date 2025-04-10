export default function SkillCard({title,path,wid,level}){
    return(
    <div className="skillCard">
        <img src={path} style={{
            width: "100px",
            height: "100px",
            marginTop: "10px"
        }}/>
        <h2 style={{
            fontFamily: "'acorn', sans-serif",
            fontSize: "clamp(2rem, 8vw, 2.2rem)",
            margin: "15px 0 0 0"
        }}>{title}</h2>
        <div style={{
            marginTop: "20px",
            height: "9px",
            width: "80%",
            backgroundColor: "rgb(131, 131, 131, 0.6)",
            borderRadius: "10px"
        }}>
            <div style={{
                backgroundColor: "white",
                height: "9px",
                width: `${wid}px`,
                borderRadius: "10px",
                transition: "width 0.5s ease-in-out",
                background: "linear-gradient(90deg,rgb(96, 205, 171),rgb(0, 104, 64))"
            }} className="aniCard"></div>
        </div>
        <h3 style={{
            color: "rgb(150, 150, 150)",
            fontFamily: "'acorn', sans-serif",
            fontSize: "clamp(1rem, 8vw, 1.2rem)",
            margin: "15px 0 0 0"
        }}>{level}</h3>
    </div>
    )
}