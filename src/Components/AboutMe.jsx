import { useEffect } from 'react';
import AOS from 'aos';

export default function AboutMe() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="aboutMeSection" data-aos="fade-up" data-aos-duration="1000">
            <div className="aboutMeContent">
                <div className="aboutMeImageWrapper" data-aos="fade-right" data-aos-delay="200">
                    <img
                        src="/assets/profile_photo.png"
                        alt="Soumya Tiwari"
                        className="aboutMeImage"
                    />
                </div>
                <div className="aboutMeText" data-aos="fade-left" data-aos-delay="400">
                    <h2 className="aboutMeTitle">About Me</h2>
                    <p className="aboutMeDescription">
                        Hi! I'm <span className="highlight">Soumya Tiwari</span>, a Computer Science & Data Science undergraduate
                        passionate about problem-solving and building practical web applications. I enjoy turning ideas into
                        clean, efficient solutions through real-world projects while continuously sharpening my logical thinking.
                    </p>

                    <p className="aboutMeDescription">
                        Alongside web development, I’m gradually learning artificial intelligence, exploring how intelligent
                        systems work and how they can be seamlessly integrated into modern, impactful products.
                    </p>
                    <div className="aboutMeStats">
                        <div className="statItem" data-aos="zoom-in" data-aos-delay="600">
                            <div className="statNumber">10+</div>
                            <div className="statLabel">Technologies</div>
                        </div>
                        <div className="statItem" data-aos="zoom-in" data-aos-delay="700">
                            <div className="statNumber">4+</div>
                            <div className="statLabel">Projects</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
