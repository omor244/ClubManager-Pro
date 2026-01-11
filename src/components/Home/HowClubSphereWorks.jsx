// HowClubSphereWorks.jsx
import React from "react";
import { Link } from "react-router";
import { AiOutlineUsergroupAdd, AiOutlineCalendar, AiOutlineCheckCircle } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Title from "../Shared/Title";

const steps = [
    {
        id: 1,
        title: "Discover Clubs",
        description: "Explore a wide variety of local clubs based on your interests and hobbies.",
        icon: <AiOutlineUsergroupAdd className="text-4xl text-primary" />,
    },
    {
        id: 2,
        title: "Join & Participate",
        description: "Easily join your favorite clubs and participate in events and discussions.",
        icon: <AiOutlineCalendar className="text-4xl text-primary" />,
    },
    {
        id: 3,
        title: "Track Your Progress",
        description: "Keep track of your club activities, achievements, and personal growth.",
        icon: <AiOutlineCheckCircle className="text-4xl text-primary" />,
    },
];



const HowClubSphereWorks = () => {
    const {user} = useAuth()
    return (
        <section className="bg-base-200  py-16 px-4 md:px-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700"></h2>
                <Title title={'How ClubSphere Works'}></Title>
                <p className="text-secondary mt-2">Follow these simple steps to get started with ClubSphere</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="card bg-white shadow-lg p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition">
                        <div className="mb-4 flex justify-center">{step.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-center">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                {user ? '' : <Link
                    to="/signup"
                    className="btn btn-primary btn-lg"
                >
                    Get Started
                </Link>}
            </div>
        </section>
    );
};

export default HowClubSphereWorks;
