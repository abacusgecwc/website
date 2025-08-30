import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Layout = ({children}) => {
    const [width, setWidth] = useState(false)
    const nav = [
        {
            to : '/',
            label : "Home"
        },
        {
            to : '/gallery',
            label : "Gallery"
        },
        {
            to : '/',
            label : "events"
        },
        {
            to : '/',
            label : "About-us"
        },
    ]
    
    // Particle background effect
    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('particles-container');
        container.appendChild(canvas);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);

        class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = '#01ffff';
            this.opacity = Math.random() * 0.5 + 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        }

        const particles = Array.from({ length: 100 }, () => new Particle());

        const drawLines = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = '#01ffff';
                ctx.globalAlpha = 0.5 * (1 - distance / 100);
                ctx.lineWidth = 0.9;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
            }
        }
        };

        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawLines();
        requestAnimationFrame(animate);
        };

        animate();

        return () => {
        window.removeEventListener('resize', resizeCanvas);
        container.removeChild(canvas);
        };
    }, []);
    return (
        <div className="relative min-h-screen text-white bg-[#0d0d0d]">
            <div id="particles-container" className="fixed top-0 left-0 w-full h-full" />

            <nav className="navbar flex justify-between items-center px-8 py-4 bg-transparent shadow-md z-50 relative">
                <div className="logo flex items-center">
                    <img src="images/logo.png" alt="ABACUS Logo" className="w-24" />
                </div>

                <button
                    className="text-2xl md:hidden block"
                    onClick={() => setWidth(!width)}
                >
                    {width ? (
                    <i className="ri-close-line text-white"></i>
                    ) : (
                    <i className="ri-menu-3-line text-white"></i>
                    )}
                </button>

                <div className="nav-links hidden md:block w-auto text-gray-300">
                    <ul className="flex gap-6 font-semibold text-md">
                    {nav.map((item, index) => (
                        <li
                        key={index}
                        className="hover:bg-cyan-400 hover:text-black cursor-pointer px-4 py-2 rounded transition"
                        >
                        {item.label}
                        </li>
                    ))}
                    </ul>
                </div>
                </nav>


            <aside 
                className=" fixed top-0 left-0  h-full bg-[#1a2a2d]/80 z-50 overflow-hidden box-border"
                style={{
                    width : width ? '250px' : '0px',
                    transition : '0.3s'
                }}
            >
                 <ul className=" flex flex-col gap-8 space-between w-full justify-between py-3 font-semibold text-md z-13 p-6">
                        {
                            nav.map((item, index) => (
                                <li 
                                key={index}
                                className="hover:bg-cyan-400 cursor-pointer px-8 py-3 rounded ">
                                    {item.label}
                                 </li>
                            ))
                        }
                    </ul>
            </aside>
            { children }

            <footer className="px-6 md:px-16 py-12 bg-[#000000] text-gray-300 mx-auto z-40 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* College + Club Logos */}
                    <div className="flex items-center justify-center md:items-start gap-4">
                    <img src="/images/collegelogo.png" alt="College Logo" className="w-28 md:w-32" />
                    <img src="/images/logo.png" alt="Club Logo" className="w-28 md:w-32" />
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-sm font-medium">
                        {nav.map((item, index) => (
                        <li key={index}>
                            <Link
                            to={item.to}
                            className="hover:text-cyan-400 transition-colors duration-200"
                            >
                            {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-lg font-semibold text-white">Connect With Us</h3>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-lg hover:scale-110 transition-transform"
                        >
                        <FaInstagram size={18} className="text-white" />
                        </a>
                        <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 shadow-lg hover:scale-110 transition-transform"
                        >
                        <FaLinkedinIn size={18} className="text-white" />
                        </a>
                    </div>

                    {/* Contact Button */}
                    <button
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold text-sm shadow-md hover:scale-105 transition-transform duration-300"
                        type="button"
                        onClick={() => {
                        const modal = document.getElementById("ContactModal");
                        if (modal) modal.style.display = "block";
                        }}
                    >
                        Contact Us
                    </button>
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} ABACUS Club · All Rights Reserved
                </div>
                </footer>

        </div>
    )
}

export default Layout