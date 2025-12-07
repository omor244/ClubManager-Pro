
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Calendar, MapPin, Tag, Users, Ticket } from "lucide-react";
import { useParams } from "react-router";
import LoadingSpinner from "../Shared/LoadingSpinner";

const EventDetails = () => {
    

    const { id } = useParams()
   
    console.log(id)

    const { data: event = {} } = useQuery({
        queryKey: ['ClubDetails', id],
        queryFn: async () => {
            const res = await axios(`http://localhost:3000/events/${id}`)

            return res.data
        }
    })

    if (!event) return <LoadingSpinner />;
    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
             
                {/* Content */}
                <div className="p-6 space-y-5">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800">
                        {event.title}
                    </h1>

                    {/* Club Name */}
                    <p className="text-lg text-gray-600">
                        <span className="font-semibold">Club:</span> {event.clubId}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        {event.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                        {/* Date */}
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
                            <Calendar className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Event Date</p>
                                <p className="font-semibold text-gray-700">
                                    {new Date(event.eventDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
                            <MapPin className="w-6 h-6 text-red-600" />
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-semibold text-gray-700">{event.location}</p>
                            </div>
                        </div>

                        {/* Paid Event */}
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
                            <Tag className="w-6 h-6 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Paid Event</p>
                                <p className="font-semibold text-gray-700">
                                    {event.isPaid ? "Yes" : "No"}
                                </p>
                            </div>
                        </div>

                        {/* Event Fee */}
                        {event.isPaid && (
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
                                <Ticket className="w-6 h-6 text-purple-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Event Fee</p>
                                    <p className="font-semibold text-gray-700">${event.eventFee}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Max Attendees */}
                    {event.maxAttendees && (
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm w-full sm:w-1/2">
                            <Users className="w-6 h-6 text-orange-600" />
                            <div>
                                <p className="text-sm text-gray-500">Max Attendees</p>
                                <p className="font-semibold text-gray-700">{event.maxAttendees}</p>
                            </div>
                        </div>
                    )}

                    {/* Created At */}
                    <p className="text-sm text-gray-400 mt-4">
                        Created on: {new Date(event.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
