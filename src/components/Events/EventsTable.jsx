
import { Link } from 'react-router';
import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';

const EventsTable = ({ event }) => {

    
    return (
        <div className="group h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
            
            {/* Header Badge Section */}
            <div className="bg-linear-to-r from-orange-50 to-orange-100 px-6 py-4 flex justify-between items-center border-b border-orange-200">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-semibold text-gray-800">
                        {new Date(event.eventDate).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    event.isPaid 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-green-100 text-green-700'
                }`}>
                    {event.isPaid ? 'Paid Event' : 'Free Event'}
                </div>
            </div>

            {/* Card Body - Event Details */}
            <div className="p-6 h-[290px]">
                {/* Club Name */}
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    {event.clubName || event.clubId}
                </span>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {event.title}
                </h3>

                {/* Details Section */}
                <div className="space-y-3 mb-6">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Location</p>
                            <p className="text-sm text-gray-800 font-medium">{event.location}</p>
                        </div>
                    </div>

                    {/* Fee */}
                    <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Event Fee</p>
                            {event.isPaid ? (
                                <p className="text-sm font-bold text-green-600">${event.eventFee}</p>
                            ) : (
                                <p className="text-sm font-bold text-green-600">FREE</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link 
                    to={`/events/${event._id}`} 
                    className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    View Details
                    
                </Link>
            </div>

           
        </div>
    );
};

export default EventsTable;