import TitleCard from "./TitleCard.jsx"
import Profiles from "./Profiles.jsx"
import Skill from "./Skill.jsx"
import Contact from "./Contact.jsx"
import Star from "./Star.jsx"

export default function About(){
    return (
        <div className="aboutDiv" style={{marginTop:"150px", width: "100vw",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <span className="heroText">
                Hi. I'm Soumya.
            </span>
            <span className="heroText">
                A Developer.
            </span>
            <p className="headingTwo">
                Passionate about building modern web apps, from pixels to problem sets, crafting and solving through code.
            </p>
            <TitleCard title={"Skills"}/>
            <Skill/>
            <TitleCard title={"Profiles"}/>
            <Profiles/>
            <TitleCard title={"Contact"}/>
            <Contact/>

        </div>
    )     
}