import SkillCard from "./SkillCard"

export default function Skill() {
    const skills = [
        { title: "HTML", icon: "./src/Logos/html_logo.png", color: "#E34F26" },
        { title: "CSS", icon: "./src/Logos/css_icon.png", color: "#1572B6" },
        { title: "JavaScript", icon: "./src/Logos/js_logo.png", color: "#F7DF1E" },
        { title: "React", icon: "./src/Logos/react_logo.png", color: "#61DAFB" },
        { title: "Node.js", icon: "./src/Logos/nodejs_logo.png", color: "#339933" },
        { title: "Express", icon: "./src/Logos/express_logo.png", color: "#000000" },
        { title: "Python", icon: "./src/Logos/python_logo.png", color: "#3776AB" },
        { title: "Prisma", icon: "./src/Logos/prisma_logo.png", color: "#2D3748" },
        { title: "MySQL", icon: "./src/Logos/mysql_logo.png", color: "#4479A1" },
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