export default function TitleCard({title}){
    return (
        <div className="titCardDiv">
            <h1 style={{
                fontFamily: '"acorn", sans-serif',
                color: "white",
                fontSize: "60px",
            }}>{title}</h1>
        </div>
    )
}