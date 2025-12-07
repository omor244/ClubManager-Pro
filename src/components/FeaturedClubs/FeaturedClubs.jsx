import {
    useQuery,
    
} from '@tanstack/react-query'
import axios from 'axios';
import { motion } from 'framer-motion';
import LoadingSpinner from '../Shared/LoadingSpinner'
import ClubCard from './ClubCard'
import { Link } from 'react-router';








// --- Framer Motion Variants ---
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Stagger animation for each card
        },
    },
};




const FeaturedClubs = () => {
    const { data: clubs = [], isLoading } = useQuery({
        queryKey: ['clubs'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/clubs/limit')

            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

  

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl text-gray-700 font-bold text-center mb-12">
                    🔥 Featured Clubs
                </h2>

                {/* this is motion dev   */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when section is visible
                    viewport={{ once: true, amount: 0.3 }} // Ensures it only runs once
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                   
                        {
                            clubs.map(club => <ClubCard key={club._id } club={club}></ClubCard>)
                    }
                
                </motion.div>

                <div className="text-center mt-12">
                    <Link to={'/clubs'} className="btn btn-lg btn-secondary btn-outline">
                        Explore All Clubs
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedClubs;