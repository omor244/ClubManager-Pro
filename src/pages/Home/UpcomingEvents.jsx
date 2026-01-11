import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const events = [
    {
        id: 1,
        title: "Global Tech Summit 2026",
        date: "24",
        month: "JAN",
        location: "Main Auditorium / Zoom",
        category: "Technology",
        tag: "Free"
    },
    {
        id: 2,
        title: "Annual Photography Exhibition",
        date: "02",
        month: "FEB",
        location: "Art Gallery, Block B",
        category: "Arts",
        tag: "Free"
    },
    {
        id: 3,
        title: "Inter-Club Football Tournament",
        date: "15",
        month: "FEB",
        location: "Sports Complex",
        category: "Sports",
        tag: "Registration Open"
    }
];

const UpcomingEvents = () => {
    return (
        <section className="py-16 px-4  ">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary  mb-2">
                            Upcoming <span className="text-primary">Events</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Don't miss out on the latest activities happening in your community.
                        </p>
                    </div>
                    <Link to={'/events'} className="flex items-center gap-2 text-primary font-semibold hover:underline">
                        View All Events <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group flex flex-col md:flex-row items-center bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-2xl hover:border-primary transition-all duration-300"
                        >
                            {/* Date Side */}
                            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 min-w-[80px] h-20 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mb-4 md:mb-0">
                                <span className="text-2xl font-bold text-primary leading-none">{event.date}</span>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">{event.month}</span>
                            </div>

                            {/* Info Side */}
                            <div className="md:ml-8 flex-grow text-center md:text-left">
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                                    <span className="px-3 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold uppercase tracking-tight">
                                        {event.category}
                                    </span>
                                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                        • {event.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-500 dark:text-gray-400 text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} /> {event.location}
                                    </div>
                                </div>
                            </div>

                         
                            {/* <div className="mt-6 md:mt-0">
                                <button className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:bg-pritext-primary dark:hover:bg-blue-500 hover:text-white transition-colors">
                                    Join Event
                                </button>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;