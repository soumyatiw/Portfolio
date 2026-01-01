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
                    <div className="imageGlow"></div>
                    <img 
                        src="/profile_photo.png" 
                        alt="Soumya Tiwari" 
                        className="aboutMeImage"
                    />
                </div>
                <div className="aboutMeText" data-aos="fade-left" data-aos-delay="400">
                    <h2 className="aboutMeTitle">About Me</h2>
                    <p className="aboutMeDescription">
                        Hi! I'm <span className="highlight">Soumya Tiwari</span>, a passionate web developer 
                        who loves creating beautiful and functional digital experiences. With expertise in 
                        modern web technologies like <span className="highlight">React</span>, 
                        <span className="highlight"> JavaScript</span>, and <span className="highlight">CSS</span>, 
                        I transform ideas into elegant solutions.
                    </p>
                    <p className="aboutMeDescription">
                        I believe in writing clean, maintainable code and creating user interfaces that not 
                        only look stunning but also provide exceptional user experiences. When I'm not coding, 
                        you'll find me exploring new technologies and contributing to open-source projects.
                    </p>
                    <div className="aboutMeStats">
                        <div className="statItem" data-aos="zoom-in" data-aos-delay="600">
                            <div className="statNumber">5+</div>
                            <div className="statLabel">Technologies</div>
                        </div>
                        <div className="statItem" data-aos="zoom-in" data-aos-delay="700">
                            <div className="statNumber">10+</div>
                            <div className="statLabel">Projects</div>
                        </div>
                        <div className="statItem" data-aos="zoom-in" data-aos-delay="800">
                            <div className="statNumber">100%</div>
                            <div className="statLabel">Dedication</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
