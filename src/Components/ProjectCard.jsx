export default function ProjectCard({ title, category, image, link, bgColor }) {
    return (
        <div
            className="project-card"
            style={{ backgroundColor: bgColor }}
            onClick={() => window.open(link, '_blank')}
        >
            <div className="project-card-content">
                <span className="project-category">{category}</span>
                <h2 className="project-title">{title}</h2>
            </div>
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
            </div>
        </div>
    );
}