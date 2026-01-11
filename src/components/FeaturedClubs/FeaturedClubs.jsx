import {
    useQuery,
    
} from '@tanstack/react-query'
import axios from 'axios';
import { motion } from 'framer-motion';
import LoadingSpinner from '../Shared/LoadingSpinner'
import ClubCard from './ClubCard'
import { Link } from 'react-router';
import Title from '../Shared/Title';








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
            const res = await axios.get('https://clubmanagement-jade.vercel.app/clubs/limit')

            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

  

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">

               
                <Title title={'Featured Clubs'}></Title>

                {/* this is motion dev   */}
                <motion.div
                    variants={containerVariants}
                   
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