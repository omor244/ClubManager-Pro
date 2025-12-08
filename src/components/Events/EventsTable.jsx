import React from 'react';
import { Link } from 'react-router';

// Using a professional component name to reflect the design choice
const EventsTable = ({ event }) => {
    return (
        <div className="w-full p-4  bg-white  rounded-xl shadow-2xl dark:border-gray-700">
         

          
     
              
                    <div>
                        {/* Event Date & Category Header (Visual Focus) */}
                <div className="p-4 bg-info   text-primary-content flex justify-between items-center">
                            <div className="flex items-center text-sm font-semibold">
                                {/* Calendar Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                                {new Date(event.eventDate).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="badge badge-outline badge-lg text-primary-content border-primary-content">
                                {event.isPaid ? 'Paid' : 'Free'}
                            </div>
                        </div>

                        {/* Card Body - Event Details */}
                        <div className="card-body p-6">
                            <span className="text-xs font-medium text-black ">
                                {event.clubName || event.clubId}
                            </span>

                            <h3 className="card-title text-xl font-medium mt-1 mb-3 text-black ">
                                {event.title}
                            </h3>

                            {/* Details List */}
                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            <span className="font-bold text-black">Location:</span>  <p className='text-black'>{event.location}</p>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zM6 16a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" clipRule="evenodd" /></svg>
                                    <span className="font-bold text-black">Fee:</span>{" "}
                                    {event.isPaid ? (
                                        <span className="ml-1 font-bold text-success">${event.eventFee}</span>
                                    ) : (
                                        <span className="ml-1 text-black font-medium">FREE</span>
                                    )}
                                </div>
                            </div>

                            {/* Card Actions - Separated for Clarity */}
                            <div className="card-actions justify-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                                <Link to={`/events/${event._id}`} className="btn btn-sm w-full mt-4 btn-info btn-outline ">View</Link>
                               
                            </div>
                        </div>
                    </div>
         
        

         
        </div>
    );
};

export default EventsTable;