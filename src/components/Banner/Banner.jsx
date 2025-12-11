import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

import bannerimg1 from '../../assets/images/banner1.webp';
import bannerimg2 from '../../assets/images/banner2.jpg';
import bannerimg3 from '../../assets/images/banner3.jpg';

const Banner = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={2000}
        >
           
            <div
                className="h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center"
                style={{ backgroundImage: `url(${bannerimg1})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white max-w-2xl px-10 md:px-20"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                        Discover Clubs. Connect. Grow.
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Join local clubs, attend events, and explore your passions with ClubSphere.
                    </p>

                <div className="mt-8 lg:flex  space-y-4 gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary text-white text-lg px-8"
                        >
                            Join a Club
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline text-white border-white hover:border-primary hover:text-primary text-lg px-6"
                        >
                            Create a Club
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <div
                className="h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bannerimg2})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg"
                >
                    Explore Exciting Club Events
                </motion.h2>
            </div>

            <div
                className="h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{ backgroundImage: `url(${bannerimg3})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg"
                >
                    Build Skills. Meet People. Be Inspired.
                </motion.h2>
            </div>

        </Carousel>
    );
};

export default Banner;
