import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Users, MapPin, ChevronRight } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const ClubCard = ({ club }) => {
    const { bannerImage, clubName, emoji, category, membershipFee, location, _id } = club || {}
   
    return (
        <motion.div
            variants={cardVariants}
            className="group h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
        >
            {/* Banner Image with Overlay */}
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={bannerImage}
                    alt={clubName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                
                {/* Emoji Badge */}
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                    <span className="text-2xl">{emoji || '🔥'}</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full mb-3">
                    {category}
                </span>

                {/* Club Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {clubName}
                </h3>

                {/* Details Section */}
                <div className="space-y-3 mb-6">
                    {/* Members */}
                    <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-orange-500 shrink-0" />
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Members</p>
                            <p className="text-sm font-bold text-gray-800">{membershipFee} Members</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Location</p>
                            <p className="text-sm text-gray-800 font-medium">{location}</p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link 
                    to={`/Clubs/${_id}`} 
                    className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    View Club
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ClubCard;