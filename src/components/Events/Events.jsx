import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import EventsTable from "./EventsTable";
import { Calendar } from "lucide-react";

const Events = () => {

    const { data: events = [], isLoading } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('https://clubmanagement-jade.vercel.app/events')
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;
    
    return (
        <div className="min-h-screen py-10">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-linear-to-r from-orange-500 to-orange-600 rounded"></div>
                    <span className="text-orange-600 font-bold uppercase text-sm tracking-wider">Events</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-secondary mb-4">
                    Discover Amazing Events
                </h1>
                <p className="text-xl text-secondary lg:mx-auto max-w-2xl">
                    Join exciting events happening in your favorite clubs. Connect with like-minded people and create unforgettable memories.
                </p>
            </div>

            {/* Events Grid */}
            {events.length > 0 ? (
                <div className="grid grid-cols-1 max-w-[1200px] mx-auto lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {events.map(event => (
                        <EventsTable key={event._id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-600 mb-2">No Events Found</h3>
                    <p className="text-gray-500">Check back soon for exciting events!</p>
                </div>
            )}
        </div>
    );
};

export default Events;