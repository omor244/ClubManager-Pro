
import { FaUsers, FaLightbulb, FaTrophy, FaHandshake } from "react-icons/fa";
import Title from "../Shared/Title";

const data = [
    {
        id: 1,
        title: "Meet Like-Minded People",
        description: "Connect with individuals who share your interests and passions.",
        icon: <FaUsers className="text-4xl text-primary" />,
    },
    {
        id: 2,
        title: "Learn & Grow",
        description: "Gain new skills, knowledge, and experiences through club activities.",
        icon: <FaLightbulb className="text-4xl text-primary" />,
    },
    {
        id: 3,
        title: "Achieve Your Goals",
        description: "Participate in challenges, competitions, and projects to excel.",
        icon: <FaTrophy className="text-4xl text-primary" />,
    },
    {
        id: 4,
        title: "Collaborate & Network",
        description: "Build valuable connections for personal and professional growth.",
        icon: <FaHandshake className="text-4xl text-primary" />,
    },
];

const WhyJoinAClub = () => {
    return (
        <section className="bg-base-100 py-16 px-4 md:px-12">
            <div className="text-center mb-12">
               
                <Title title={'Why Join a Club?'}></Title>
                <p className="text-secondary mt-2">
                    Discover the benefits of being part of a vibrant community
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="card bg-white shadow-lg p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        <div className="mb-4 flex justify-center">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-500 text-center">{item.description}</p>
                    </div>
                ))}
            </div>

          
        </section>
    );
};

export default WhyJoinAClub;
