
export default function Header({ pageChange, page }) {
    function styleButton(name) {
        return {
            backgroundColor: page === name ? "rgb(255,255,255,0.5)" : 'transparent',
            borderRadius: "15px",
            cursor: "pointer"
        }
    }

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/Resume_Soumya_Tiwari.pdf';
        link.download = 'Resume_Soumya_Tiwari.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='headerSection'>
            <div className="navButton" onClick={() => pageChange("about")} style={styleButton("about")}>About</div>
            <div className="navButton" onClick={() => pageChange("projects")} style={styleButton("projects")}>Projects</div>
            <div className="navButton" onClick={handleResumeDownload}>Resume</div>
        </div>
    )
}