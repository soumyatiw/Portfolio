import TitleCard from "./TitleCard";
import ProjectCard from "./ProjectCard";
import Star from "./Star";

export default function Project() {
    const projects = [
        {
            title: "Rentlee",
            category: "RENTAL PLATFORM",
            image: "./src/Logos/rentlee.png",
            link: "https://rentlee-soumya.vercel.app/",
            bgColor: "#E5C9F5" // Lavender
        },
        {
            title: "Medsi",
            category: "HEALTHCARE",
            image: "./src/Logos/medsi.png",
            link: "https://medsi-soumya.vercel.app/",
            bgColor: "#A8E6CF" // Mint green
        },
        {
            title: "Querly",
            category: "AI EMAIL MANAGER",
            image: "./src/Logos/MeTube.jpeg",
            link: "https://github.com/soumyatiw/Querly",
            bgColor: "#B8D8F0" // Light blue
        },
        {
            title: "Portfolio",
            category: "PERSONAL",
            image: "./src/Logos/portfolio.png",
            link: "https://github.com/soumyatiw/Portfolio",
            bgColor: "#FFD4B8" // Peach
        },
        {
            title: "MeTube",
            category: "VIDEO PLATFORM",
            image: "./src/Logos/MeTube.jpeg",
            link: "https://soumyatiw.github.io/MEtube/",
            bgColor: "#b1ede9ff" // Soft coral
        },
        {
            title: "Capstone",
            category: "ACADEMIC",
            image: "./src/Logos/Capstone.jpeg",
            link: "https://soumyatiw.github.io/Capstone/",
            bgColor: "#E8D5F2" // Soft lilac
        }
    ];

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

            <div className="projects-grid">
                {/* Row 1: Narrow | Wide */}
                <div className="project-row row-narrow-wide">
                    <ProjectCard {...projects[0]} />
                    <ProjectCard {...projects[1]} />
                </div>

                {/* Row 2: Wide | Narrow */}
                <div className="project-row row-wide-narrow">
                    <ProjectCard {...projects[2]} />
                    <ProjectCard {...projects[3]} />
                </div>

                {/* Row 3: Narrow | Wide */}
                <div className="project-row row-narrow-wide">
                    <ProjectCard {...projects[4]} />
                    <ProjectCard {...projects[5]} />
                </div>
            </div>
        </div>
    );
}