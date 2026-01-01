export default function SkillCard({ title, icon, color }) {
    return (
        <div className="skillCardCompact" data-aos="fade-up" style={{ '--skill-color': color }}>
            <div className="skillIconWrapper">
                <img src={icon} alt={title} className="skillIcon" />
            </div>
            <h3 className="skillTitle">{title}</h3>
        </div>
    );
}