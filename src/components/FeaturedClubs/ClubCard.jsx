import { motion } from 'framer-motion';
import { Link } from 'react-router';
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};



const ClubCard = ({ club }) => {
            
    const { bannerImage, clubName, emoji, category, membershipFee, location, _id } = club || {}
   
    return (

        // Use motion.div to apply the animation variants
        <motion.div
            variants={cardVariants}
            className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-primary/50"
        >
          

                {/* Banner Image */}
                <figure className="h-40 w-full">
                    <img
                        src={bannerImage}
                        alt={clubName}
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* Card Content */}
                <div className="card-body p-5">

                    {/* Club Title + Category */}
                    <div className="flex items-center space-x-3">
                        <div className="avatar placeholder">
                            <div className="bg-primary/20 text-primary-content rounded-full w-12 h-12 flex items-center justify-center">
                            <span className="text-xl">{emoji ? emoji : '🔥'}</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="card-title text-lg font-bold">{clubName}</h2>
                            <p className="text-sm text-gray-500">{category}</p>
                        </div>
                    </div>

                    {/* Members / Fee */}
                    <p className="text-sm mt-3 font-medium">
                        <span className="text-primary font-bold">{membershipFee}</span> Members
                    </p>

                    {/* Location */}
                    <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                        <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11c1.656 0 3-1.567 3-3.5S13.656 4 12 4s-3 1.567-3 3.5S10.344 11 12 11z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        {location}
                    </p>

                    {/* Button */}
                    <div className="card-actions mt-4">
                    <Link to={`/Clubs/${_id}`} className="btn btn-primary w-full">View Club</Link>
                    </div>

                </div>
        

        </motion.div>
    );

};

export default ClubCard;