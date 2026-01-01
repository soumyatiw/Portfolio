export default function ProjectCard({ title, description, image, link, demoLink }) {
    return (
        <div className="projectCardDiv" data-aos="fade-up">
            <h1 className="projectTitle">{title}</h1>

            <div className="projectImageWrapper">
                <img src={image} alt={title} className="projectImage" />
            </div>

            <p className="projectDescription">{description}</p>

            <div className="projectLinks">
                {link && (
                    <button className="projectButton" onClick={() => window.open(link, '_blank')}>
                        View Code
                    </button>
                )}
                {demoLink && (
                    <button className="projectButton secondary" onClick={() => window.open(demoLink, '_blank')}>
                        Live Demo
                    </button>
                )}
            </div>
        </div>
    );
}