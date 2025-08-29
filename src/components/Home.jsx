import Layout from "./Layout"
// import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { FaBullhorn } from "react-icons/fa";
import EventsGallery from "./EventsGallery";
import TeamSection from "./meetTheTeam";
import Feedback from "./feedback";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


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
                    <div className="left md:w-1/2 text-center">
                        <img
                        src="images/logo.png"
                        alt="ABACUS Logo"
                        className="logo-tilt mx-auto w-full max-w-[400px] h-auto"
                        />
                    </div>
                    <div className="w-full max-w-[900px] md:block md:max-w-[800px] hidden mx-auto">
                        <DotLottieReact
                            src="https://lottie.host/223592ce-02ba-449d-8986-41c61da6f4d5/zrizNYtlTe.lottie"
                            loop
                            autoplay
                        />
                        </div>

                </section>

                <h2 className="ml-20 text-2xl font-bold mt-10">📰 Latest News</h2>
                <section className="Announcements w-[90%] md:h-[550px] mx-auto mt-4 flex flex-col md:flex-row gap-8 ">

                    <div className="event-page relative w-full md:w-1/2 p-6  shadow-md  overflow-hidden pb-16">
                        <h3 className="text-xl mb-4 font-semibold"> Announcement</h3>
                        <div className=" border border-cyan-400 overflow-hidden rounded-xl shadow-md box-sizing md:h-[400px] md:p-8 overflow-hidden">
                            {
                            announcements.map((item, index) => (
                            <div key={index}>
                                <p className="text-white m-3 cursor-pointer relative ">
                                <i className="ri-arrow-right-double-fill mr-2 text-xl text-center"></i> 
                                {item}
                                </p>
                                <hr className="w-10/12 mt-2" />
                            </div>
                            ))
                        }
                        <button className="absolute bottom-4 left-8 border rounded bg-white px-6 py-2 cursor-pointer z-10 text-black font-semibold text-lg ">
                            View All
                        </button>
                        </div>
                        {/* Sticky/Bottom button */}
                        
                    </div>


                    <div className="event-container relative w-full md:w-1/2 p-6 rounded-xl shadow-md space-y-3 overflow-hidden ">
                        <h3 className="text-xl mb-4 font-semibold "> Upcoming Events</h3>
                        {
                            upcomingEvents.map((item,index) => (
                                <div key={index} className=" border border-cyan-400 rounded-md  ">
                                    <div className=" flex p-2">
                                        <div className="p-1 bg-white  w-[140px] h-[70px] rounded mr-2 ">
                                            <p className="text-black text-center h-[50%] text-semibold text-lg p-0 m-0"> {item.date} </p>
                                            <hr className="w-10/12 h-[2px] bg-gray-800 border-none mx-autop-0 m-0 " />
                                            <p className="text-black text-center h-[50%] text-semibold text-lg p-0 m-0">  {item.year } </p>
                                        </div>
                                        <div className="flex items-center  text-white text-center w-full px-2">
                                            <p className="text-lg text-left ">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <button className="absolute bottom-0 left-8 border rounded bg-white px-6 py-2 cursor-pointer z-10 text-black font-semibold text-lg m-0 ">
                            View All
                        </button>
                    </div>
                </section>


                

                <div className=" mt-8 ">
                    <h1 className="text-[48px] font-semibold text-center m-2"> About Us </h1>
                    <div className=" grid md:grid-cols-2 gap-4 md:gap-2 w-11/12 mx-auto p-3">
                        <div className=" flex justify-center items-center ">
                            <img
                                src="/images/banner.png"
                                className="w-full max-w-[585px] h-auto"
                                /> 
                        </div>
                        <div className=" flex justify-center items-center ">
                            <p className="text-white text-lg text-justify "> ABACUS is the esteemed Computer Science Club at GECWC, dedicated to fostering a community of passionate computer science enthusiasts. With its wide range of departments and initiatives, ABACUS aims to provide a platform for students to enhance their skills, engage in productive sessions, and participate in fun events. As a collective entity, ABACUS serves as a nurturing platform for students passionate about computer science at GECWC west champaran. It provides a vibrant community where like-minded individuals can come together to share knowledger collaborate on projects, and stay updated with the latest advancements in the field. ABACUS organizes guest lectures, coding competitions, hackathons, and other events to foster learning and networking opportunities for its members. Through its inclusive and supportive environment, ABACUS strives to empower students, enabling them to excel in their computer science journey and make meaningful contributions to the world of technology. </p>
                        </div>
                    </div>
                </div>

               

                <EventsGallery />

                

                <TeamSection />

                

                <Feedback /> 
            </div>
        </Layout>
    )
}

export default Home