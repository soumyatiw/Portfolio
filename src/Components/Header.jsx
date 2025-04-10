
export default function Header({pageChange, page}) {
    function styleButton(name){
        return{
            backgroundColor: page === name ? "rgb(255,255,255,0.5)" : 'transparent',
            borderRadius: "15px",
            cursor: "pointer"
        }
    }
    return (
        <div className='headerSection'>
            <div className="navButton" onClick={()=>pageChange("about")} style={styleButton("about")}>About</div>
            <div className="navButton" onClick={()=>pageChange("projects")} style={styleButton("projects")}>Projects</div>
            <div className="navButton">Resume</div>
        </div>
    )
}