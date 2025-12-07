import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import EventsTable from "./EventsTable";



const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Events = () => {

    const { data: events = [], isLoading } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/events')
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;
    return (
        <div> 

            <h2 className="text-3xl font-extrabold mb-8 text-gray-800 dark:text-white border-b pb-3">
                All Events
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    events.map(event => <EventsTable key={event._id} event={event} /> )
               }
                    
              
            </div>
        </div>
    );
};

export default Events;