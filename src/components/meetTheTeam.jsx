import React from "react";

const TeamSection = () => {
  const faculty = [
    {
      name: "Rajeev Ranjan",
      role: "Faculty Incharge",
      image: "images/panda.jpg",
      bio: "RAJEEV RANJAN is an experienced faculty member dedicated to student success and research in engineering."
    },
    {
      name: "DR. Rafeeq Ahmed",
      role: "Faculty Incharge",
      image: "images/panda.jpg",
      bio: "DR. RAFEEQUE AHMED is an experienced faculty member dedicated to student success and research in engineering."
    }
  ];

  const coordinators = [
    {
  name: "ADITYA KUMARI",
  role: "CO-ordinator",
  image: "./images/aditya.jpeg",
  bio: "Aditya is dedicated to student success and research in engineering.",
  linkedIn: "https://www.youtube.com",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "VIKRAM KUMAR",
  role: "CO-ordinator",
  image: "./images/vikram.jpeg",
  bio: "Vikram specializes in coding and is skilled in multiple technical domains, contributing expertise to various projects.",
  linkedIn: "https://www.youtube.com",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "SAURABH KUMAR",
  role: "CO-ordinator",
  image: "./images/aditya.jpeg",
  bio: "Saurabh excels in management, ensuring smooth coordination of events and efficient team operations.",
  linkedIn: "/linkedIn",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "MUKUL KUMAR",
  role: "CO-ordinator",
  image: "./images/mukul.jpeg",
  bio: "Mukul is the Technical Head, leading innovation and development in the club’s technical projects.",
  linkedIn: "/linkedIn",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "VIKRANT KUMAR",
  role: "CO-ordinator",
  image: "./images/vikrant.jpeg",
  bio: "Vikrant specializes in coding and is proficient across multiple technical domains, driving impactful solutions.",
  linkedIn: "/linkedIn",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "SATYAM KUMAR",
  role: "CO-ordinator",
  image: "./images/satyam.jpeg",
  bio: "Satyam is the Content Head, crafting engaging and impactful content for events and communication.",
  linkedIn: "/linkedIn",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "mail",
},
{
  name: "HARSH RAJ",
  role: "CO-ordinator",
  image: "./images/harsh.jpeg",
  bio: "Harsh is the Design Head, bringing creativity and visual appeal to the club’s branding and projects.",
  linkedIn: "/linkedIn",
  inatagram: "/instagram",
  facebook: "/facebook",
  mail: "/abacusgecwc.in",
}


  ];

  const volunteers = [
  {
    name: "PRINCY KUMARI",
    role: "volunteer",
    image: "./images/princy.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "RIYA KUMARI",
    role: "volunteer",
    image: "./images/riya.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "SHREYA KUMARI",
    role: "volunteer",
    image: "./images/shreya.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "MANAS KUMAR",
    role: "volunteer",
    image: "./images/manas.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "VIVEK KUMAR",
    role: "volunteer",
    image: "./images/vivek.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "AMANDEEP KUMAR",
    role: "volunteer",
    image: "./images/amandeep.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  {
    name: "UTKARSH KUMAR",
    role: "volunteer",
    image: "./images/utkarsh.jpeg",
    bio: "ADITYA is dedicated to student success and research in engineering.",
    linkedIn : "https://www.youtube.com",
    inatagram : "/instagram",
    facebook : "/facebook",
    mail : "mail",
  },
  ];

  return (
    <>
      {/* ================= Desktop View ================= */}
      <div className="hidden md:block">
        <section className="relative z-10 py-10 text-center">
          <h1 className="w-full mt-10 mb-2 text-4xl font-bold tracking-wider text-white uppercase font-segoe">
            Meet the Team
          </h1>
          <p className="mb-10 text-lg text-cyan-100">
            Get to know the people behind the club
          </p>

          {/* Faculty Members */}
          <h1 className="text-2xl font-semibold"> Faculty Co-ordinators </h1>
          <div className="flex flex-wrap justify-center gap-5 mb-10 mt-10 w-10/12 mx-auto">
            {faculty.map((member, index) => (
              <TeamMemberCard key={`faculty-${index}`} member={member} />
            ))}
          </div>

          {/* Coordinators */}
          <h1 className="text-2xl font-semibold"> Co-ordinators </h1>
          <div className="flex flex-wrap justify-center gap-8 px-5 py-10 w-10/12 mx-auto">
            {coordinators.map((member, index) => (
              <TeamMemberCard key={`coordinator-${index}`} member={member} />
            ))}
          </div>

          {/* Volunteers */}
          <h1 className="text-2xl font-semibold"> Volunteers </h1>
          <div className="flex flex-wrap justify-center gap-8 px-5 py-10 w-10/12 mx-auto">
            {volunteers.map((member, index) => (
              <TeamMemberCard key={`volunteer-${index}`} member={member} />
            ))}
          </div>
        </section>
      </div>

      {/* ================= Mobile View ================= */}
      <div className="block md:hidden">
        <section className="relative z-10 py-6 text-center">
          <h1 className="w-full mt-5 mb-2 text-3xl font-bold tracking-wide text-white uppercase">
            Meet the Team
          </h1>
          <p className="mb-6 text-base text-cyan-100">
            Get to know the people behind the club
          </p>

          {/* Faculty */}
          <h1 className="text-xl font-semibold mb-4"> Faculty Co-ordinators </h1>
          <div className="flex flex-col gap-6 px-4">
            {faculty.map((member, index) => (
              <SimpleMemberCard key={`faculty-m-${index}`} member={member} />
            ))}
          </div>

          {/* Coordinators */}
          <h1 className="text-xl font-semibold mt-10 mb-4"> Co-ordinators </h1>
          <div className="flex flex-col gap-6 px-4">
            {coordinators.map((member, index) => (
              <SimpleMemberCard key={`coord-m-${index}`} member={member} />
            ))}
          </div>

          {/* Volunteers */}
          <h1 className="text-xl font-semibold mt-10 mb-4"> Volunteers </h1>
          <div className="flex flex-col gap-6 px-4">
            {volunteers.map((member, index) => (
              <SimpleMemberCard key={`vol-m-${index}`} member={member} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

/* Desktop Flip Card */
const TeamMemberCard = ({ member }) => {
  return (
    <div className="w-56 h-64 perspective-1000 group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 backface-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-400 rounded-xl shadow-lg shadow-cyan-500/20">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 mb-3 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-gray-400">{member.role}</p>
        </div>

        {/* Back */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 text-center backface-hidden bg-cyan-900/10 border border-cyan-400 rounded-xl rotate-y-180">
          <h3 className="mb-2 text-lg font-semibold text-white">
            {member.name.split(" ")[0]}
          </h3>
          <p className="text-sm text-gray-300">{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

/* Mobile Simple Card */
const SimpleMemberCard = ({ member }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
      <img
        src={member.image}
        alt={member.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
      />
      <div className="text-left">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-cyan-300">{member.role}</p>
        <p className="text-xs text-gray-400 mt-1">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamSection;
