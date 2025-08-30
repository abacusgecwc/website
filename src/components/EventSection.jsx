// Reusable Card Component
const Card = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-xl p-4 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Announcement Component
const Announcements = ({ announcements }) => {
  return (
    <Card className="relative w-full md:w-1/2">
      <h3 className="text-xl mb-4 font-semibold">Announcements</h3>
      <div className="border border-cyan-400 rounded-xl overflow-hidden p-4 md:h-[400px] flex flex-col gap-2">
        {announcements.map((item, index) => (
          <div key={index}>
            <p className="text-white cursor-pointer flex items-center gap-2">
              <i className="ri-arrow-right-double-fill text-xl"></i>
              {item}
            </p>
            <hr className="w-11/12 mt-1 border-gray-600" />
          </div>
        ))}
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-2 font-semibold rounded shadow hover:bg-gray-200">
        View All
      </button>
    </Card>
  );
};

// Upcoming Events Component
const UpcomingEvents = ({ events }) => {
  return (
    <Card className="relative w-full md:w-1/2 space-y-3">
      <h3 className="text-xl mb-4 font-semibold">Upcoming Events</h3>
      <div className="flex flex-col gap-3">
        {events.map((item, index) => (
          <div
            key={index}
            className="border border-cyan-400 rounded-md flex overflow-hidden"
          >
            <div className="bg-white w-[140px] flex flex-col items-center justify-center p-2">
              <p className="text-black text-lg font-semibold">{item.date}</p>
              <hr className="w-10/12 border-none h-[2px] bg-gray-800 my-1" />
              <p className="text-black text-lg font-semibold">{item.year}</p>
            </div>
            <div className="flex items-center text-white px-4 w-full">
              <p className="text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-2 font-semibold rounded shadow hover:bg-gray-200">
        View All
      </button>
    </Card>
  );
};

// Main Section Component
const EventsSection = ({ announcements, upcomingEvents }) => {
  return (
    <section className="w-[90%] mx-auto mt-6 flex flex-col md:flex-row gap-8">
      <Announcements announcements={announcements} />
      <UpcomingEvents events={upcomingEvents} />
    </section>
  );
};

export default EventsSection;
