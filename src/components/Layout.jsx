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

            <footer className="px-16 py-12 bg-[#000000]   mx-auto z-40 relative ">
                <div className="w-7/12 mx-auto grid md:grid-cols-3 gap-4">
                    <div className="w-32 h-32 ">
                        <img src="/images/collegelogo.png" className=" w-[112px]"/>
                    </div>
                    <div className="w-32 h-32 flex">
                        <img src="/images/logo.png"  className="my-auto"/>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <Link
                            to="/instagram"
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-lg"
                            >
                            <FaInstagram size={20} className="text-white" />
                            </Link>

                            <Link
                            to="/linkedin"
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 shadow-lg"
                            >
                            <FaLinkedinIn size={20} className="text-white" />
                            </Link>
                        </div>

                        {/* Contact Button */}
                        <button
                            className="px-6 py-2 w-fit rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold text-base shadow-md hover:scale-105 transition-transform duration-300"
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
                
            </footer>
        </div>
    )
}

export default Layout