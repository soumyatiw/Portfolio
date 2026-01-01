import linkedInLogo from "../Logos/linkedIn.png"
import githubLogo from "../Logos/github.png"
import gmailLogo from "../Logos/gmail.png"

export default function Contact() {
    return (
        <div data-aos="fade-up" className="contactDiv">
            <ContactCard logoSrc={linkedInLogo} contactTitle={"LinkedIn"} id={"Soumya Tiwari"} link={"https://www.linkedin.com/in/soumya-tiwari-766430323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} text={"Connect"} />

            <ContactCard logoSrc={githubLogo} contactTitle={"GitHub"} id={"soumyatiw"} link={"https://github.com/soumyatiw"} text={"Connect"} />

            <ContactCard2 logoSrc={gmailLogo} contactTitle={"Email"} id={"soumyatiwari2005@gmail.com"} text={"Connect"} />

        </div>
    )
}

function ContactCard({ logoSrc, contactTitle, id, link, text }) {
    return (
        <div className="contactCardDiv">
            <img width={70} src={logoSrc} />
            <h3 style={{
                fontFamily: "'acorn', sans-serif",
                fontSize: "clamp(2rem, 8vw, 2.2rem)",
                margin: "0 0 0 0"
            }}>{contactTitle}</h3>
            <h4 style={{
                fontWeight: "Normal",
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: "clamp(1rem, 8vw, 1.2rem)",
                marginBottom: "10px",
                marginTop: "0px"
            }}>{id}</h4>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="contactButton">{text}</button>
            </a>
        </div>
    )
}

function ContactCard2({ logoSrc, contactTitle, id, text }) {
    return (
        <div className="contactCardDiv">
            <img width={70} src={logoSrc} />
            <h3 className="conHead" style={{
                fontFamily: "'acorn', sans-serif",
                fontSize: "clamp(2rem, 8vw, 2.2rem)",
                margin: "0 0 0 0"
            }}>{contactTitle}</h3>
            <h4 style={{
                fontWeight: "Normal",
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: "clamp(1rem, 8vw, 1.2rem)",
                marginBottom: "10px",
                marginTop: "0px"
            }}>{id}</h4>

            <button onClick={() => window.location.href = "mailto:soumyatiwari2005@gmail.com"} className="contactButton">{text}</button>

        </div>
    )
}