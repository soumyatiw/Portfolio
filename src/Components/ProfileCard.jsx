export default function Card({ name, url, para, bColor, aniprop }) {
    return (
        <div data-aos={aniprop} className="titleDiv" style={{ margin: "25px 0px 25px 0px", backgroundColor: bColor }}>
            <h1 style={{ fontFamily: "Acorn", fontWeight: "bolder", fontSize: "clamp(2rem, 8vw, 2.5rem)", margin: "20px 0 12px 0", color: "#364442" }}>{name}</h1>
            <p style={{ fontFamily: "'Ubuntu',sans-serif", textAlign: "left", marginLeft: "40px", marginRight: "40px", fontSize: "clamp(0.75rem, 8vw, 1.20rem", lineHeight: "1.30", color: "rgb(54, 68, 66, 0.6)" }}>{para}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="profileBtn" >View Profile</button>
            </a>
        </div>

    )
}