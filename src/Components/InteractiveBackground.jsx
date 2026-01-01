import { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size to cover entire document
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            // Use document body height to cover all scrollable content
            canvas.height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                window.innerHeight
            );
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Update canvas height on scroll (in case content changes)
        const handleScroll = () => {
            const newHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                window.innerHeight
            );
            if (canvas.height !== newHeight) {
                canvas.height = newHeight;
            }
        };
        window.addEventListener('scroll', handleScroll);
        
        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.baseX = x;
                this.baseY = y;
                this.density = Math.random() * 30 + 10;
                this.distance = 0;
                this.opacity = Math.random() * 0.5 + 0.2;
                // Add slow drift movement
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.driftRange = 100; // How far particles can drift from base position
            }

            update(mouse) {
                // Slow ambient drift
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Bounce off edges
                if (this.baseX < 0 || this.baseX > canvas.width) {
                    this.vx *= -1;
                    this.baseX = Math.max(0, Math.min(canvas.width, this.baseX));
                }
                if (this.baseY < 0 || this.baseY > canvas.height) {
                    this.vy *= -1;
                    this.baseY = Math.max(0, Math.min(canvas.height, this.baseY));
                }

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Smoothly return to base position
                    const returnDx = this.x - this.baseX;
                    const returnDy = this.y - this.baseY;
                    this.x -= returnDx * 0.05;
                    this.y -= returnDy * 0.05;
                }
            }

            draw(ctx) {
                ctx.fillStyle = `rgba(21, 77, 52, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesRef.current.push(new Particle(x, y));
            }
        };
        initParticles();

        // Mouse move handler (account for scroll position)
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY + window.scrollY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Connect particles
        const connectParticles = () => {
            for (let a = 0; a < particlesRef.current.length; a++) {
                for (let b = a; b < particlesRef.current.length; b++) {
                    const dx = particlesRef.current[a].x - particlesRef.current[b].x;
                    const dy = particlesRef.current[a].y - particlesRef.current[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = (1 - distance / 100) * 0.3;
                        ctx.strokeStyle = `rgba(21, 77, 52, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
                        ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                particle.update(mouseRef.current);
                particle.draw(ctx);
            });

            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="interactive-background" />;
};

export default InteractiveBackground;
