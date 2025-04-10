import SkillCard from "./SkillCard"
export default function Skill() {
    return (
        <div style={{
            width: "80%",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "80px"

        }}>
            <SkillCard title={"HTML"} path={"./src/Logos/html_logo.png"} wid={210} level={"Advanced"} />
            <SkillCard title={"CSS"} path={"./src/Logos/css_icon.png"} wid={210} level={"Advanced"} />
            <SkillCard title={"Javascript"} path={"./src/Logos/js_logo.png"} wid={170} level={"Intermediate"} />
            <SkillCard title={"React"} path={"./src/Logos/react_logo.png"} wid={150} level={"Intermediate"} />
            <SkillCard title={"Python"} path={"./src/Logos/python_logo.png"} wid={210} level={"Advanced"} />
        </div>
    )
}