import Layout from "./Layout"
// import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { FaBullhorn } from "react-icons/fa";
import EventsGallery from "./EventsGallery";
import TeamSection from "./meetTheTeam";
import Feedback from "./Feedback";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AboutUs from "./AboutUs";
import EventsSection from "./EventSection";


const Home = () => {

    const announcements = [
        "Hacking forBeginners",
        "Web dev hackathon",
        "Group project practice",
        "Gaming Event",
        "Voretx 3.0",
        "Hacking forBeginners",
        "Web dev hackathon",
        "Group project practice",
        "Gaming Event",
        "Voretx 3.0",
        
    ];

    const upcomingEvents = [
  {
    title: "Cybersecurity Workshop",
    date: "jun 6",
    year : '2025',
    time: "10:00 AM",
    location: "Auditorium Hall A",
    description: "An introductory workshop on ethical hacking and security fundamentals.",
  },
  {
    title: "AI in Healthcare Seminar",
    date: "jun 25",
    year : '2025',
    time: "2:00 PM",
    location: "Online (Zoom)",
    description: "Discussion on the applications of AI in modern healthcare systems.",
  },
  {
    title: "Hackathon 2025",
    date: "Jul 1",
    year : '2025',
    time: "9:00 AM",
    location: "Tech Park, Bengaluru",
    description: "24-hour coding challenge focused on real-world problem-solving.",
  },
  {
    title: "Internship Fair",
    date: "Jul 10",
    year : '2025',
    time: "11:00 AM",
    location: "Campus Ground",
    description: "Meet companies offering internships in software, AI, and cybersecurity.",
  }
    ];

    // const facultyincharges = [
    //     {
    //         'name' : 'Rajeev Ranjan',
    //         "image" : "/images/2.png",
    //         "message" : "you are the best Guy i have ever meet."
    //     },
    //     {
    //         'name' : 'Rafeeq Ahmed',
    //         "image" : "/images/2.png",
    //         "message" : "you are the best Guy i have ever meet."
    //     },
    //     {
    //         'name' : 'Rafeeq Ahmed',
    //         "image" : "/images/2.png",
    //         "message" : "you are the best Guy i have ever meet."
    //     },
    //     {
    //         'name' : 'Rafeeq Ahmed',
    //         "image" : "/images/2.png",
    //         "message" : "you are the best Guy i have ever meet."
    //     }
    // ]

    return (
        <Layout>
            <div>
                
                <section className="first_look flex md:flex-row flex-col justify-between items-center py-8">
                    <div className="left md:w-1/2 text-center md:block hidden">
                        <img
                        src="images/logo.png"
                        alt="ABACUS Logo"
                        className="logo-tilt mx-auto w-full max-w-[400px] h-auto"
                        />
                    </div>
                    <div className="w-full max-w-[900px] block md:max-w-[800px] mx-auto">
                        <DotLottieReact
                            src="https://lottie.host/223592ce-02ba-449d-8986-41c61da6f4d5/zrizNYtlTe.lottie"
                            loop
                            autoplay
                        />
                        </div>

                </section>

                <h2 className="ml-20 text-2xl font-bold mt-10">📰 Latest News</h2>

                <EventsSection announcements={announcements} upcomingEvents={upcomingEvents}></EventsSection>
                
                <AboutUs/>
                
                <TeamSection />

                <Feedback /> 
            </div>

        </Layout>
    )
}

export default Home