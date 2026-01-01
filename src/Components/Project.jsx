import TitleCard from "./TitleCard";
import ProjectCard from "./ProjectCard";
import Star from "./Star";

export default function Project() {
    return (
        <div className="aboutDiv" style={{
            marginTop: "150px",
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingBottom: "100px"
        }}>
            <span className="heroText">
                My Projects.
                <Star width={"90px"} height={"90px"} />
            </span>
            <p className="headingTwo">
                A collection of sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "40px",
                width: "90%",
                maxWidth: "1400px",
                marginTop: "80px",
                justifyItems: "center"
            }}>
                <ProjectCard
                    title="MeTube"
                    description="A YouTube Clone built with HTML and CSS featuring a responsive layout, interactive hover effects, and a clean modern interface that mimics the popular video platform."
                    image="./src/Logos/MeTube.jpeg"
                    link="https://github.com/yourusername/metube"
                    demoLink="#"
                />
                <ProjectCard
                    title="Capstone"
                    description="A professional demo website showcasing modern web design principles, built with HTML and CSS featuring a fully responsive layout and elegant animations."
                    image="./src/Logos/Capstone.jpeg"
                    link="https://github.com/yourusername/capstone"
                    demoLink="#"
                />
                <ProjectCard
                    title="Portfolio"
                    description="A personal portfolio website built with React, featuring smooth animations, modern design aesthetics, and an interactive user experience to showcase my work."
                    image="./src/Logos/portfolio.png"
                    link="https://github.com/yourusername/portfolio"
                    demoLink="#"
                />
            </div>
        </div>
    );
}