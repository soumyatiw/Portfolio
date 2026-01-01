import SkillCard from "./SkillCard"
import htmlLogo from "../Logos/html_logo.png"
import cssLogo from "../Logos/css_icon.png"
import jsLogo from "../Logos/js_logo.png"
import reactLogo from "../Logos/react_logo.png"
import nodejsLogo from "../Logos/nodejs_logo.png"
import expressLogo from "../Logos/express_logo.png"
import pythonLogo from "../Logos/python_logo.png"
import prismaLogo from "../Logos/prisma_logo.png"
import mysqlLogo from "../Logos/mysql_logo.png"

export default function Skill() {
    const skills = [
        { title: "HTML", icon: htmlLogo, color: "#E34F26" },
        { title: "CSS", icon: cssLogo, color: "#1572B6" },
        { title: "JavaScript", icon: jsLogo, color: "#F7DF1E" },
        { title: "React", icon: reactLogo, color: "#61DAFB" },
        { title: "Node.js", icon: nodejsLogo, color: "#339933" },
        { title: "Express", icon: expressLogo, color: "#000000" },
        { title: "Python", icon: pythonLogo, color: "#3776AB" },
        { title: "Prisma", icon: prismaLogo, color: "#2D3748" },
        { title: "MySQL", icon: mysqlLogo, color: "#4479A1" },
        { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { title: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#150458" },
    ];

    return (
        <div className="skillsGrid">
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    title={skill.title}
                    icon={skill.icon}
                    color={skill.color}
                />
            ))}
        </div>
    );
}