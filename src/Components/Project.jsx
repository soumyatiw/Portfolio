import TitleCard from "./TitleCard";
import ProjectCard from "./ProjectCard";
import Star from "./Star";
export default function Project(){
    return (
        <div className="aboutDiv" style={{marginTop:"150px", width: "100vw",height: "100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <span className="heroText">
                My Projects.
                <Star width={"90px"} height={"90px"}/>
            </span>
            <p className="headingTwo">
                A collection of sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
            </p>
            <div style={{display:"flex", justifyContent: "space-between", width:"90vw", marginTop: "100px"}}>
                <ProjectCard title={"MeTube"} description={"A Youtube Clone built with HTML, CSS featuring a responsive layout and interactive hover effects."} image={"./src/Logos/MeTube.jpeg"} backColor={"#D094E5"}/>
                <ProjectCard title={"Capstone"} description={"This is a demo website which is built with HTML, CSS featuring a responsive layout."} image={"./src/Logos/Capstone.jpeg"} backColor={"#a3dcd4"} />
            </div>
        </div>
    )
}