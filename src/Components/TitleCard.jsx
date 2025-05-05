import Star from "./Star";

export default function TitleCard({title}){
    return (
        <div style={{
            display: "flex",
            alignSelf: "flex-start",
            justifyContent: "space-between",
            alignItems: "center",
            width: "40vw"
        }}>
            <div className="titCardDiv">
                <h1 style={{
                    fontFamily: '"acorn", sans-serif',
                    color: "white",
                    fontSize: "60px",
                }}>{title}</h1>
            </div>
            <Star width={"90px"} height={"90px"}/>
        </div>

        
    )
}