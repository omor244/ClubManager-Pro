import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../Shared/LoadingSpinner';

const ClubDetails = () => {

    const {id} = useParams()
    const [activeTab, setActiveTab] = useState('about');

    const { data: club = {} } = useQuery({
        queryKey: ['ClubDetails', id],
        queryFn: async () => {
            const res = await axios(`http://localhost:3000/clubs/${id}`)

            return res.data
        }
    })

    if (!club) return <LoadingSpinner/>;

    return (
      
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {/* Hero Banner */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                    src={club.bannerImage}
                    alt={club.clubName}
                    className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex flex-col justify-end p-6 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center space-x-3">
                        <span>{club.emoji}</span>
                        <span>{club.clubName}</span>
                    </h1>
                    <p className="mt-2 text-gray-200 text-sm md:text-lg">{club.category}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Membership Fee</h3>
                    <p className="text-xl font-bold">{club.membershipFee === 0 ? 'Free' : `$${club.membershipFee}`}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Status</h3>
                    <span className={`px-2 py-1 rounded text-white ${club.status === 'approved' ? 'bg-green-500' :
                            club.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                        {club.status}
                    </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Location</h3>
                    <p className="text-lg font-medium">{club.location}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Manager Email</h3>
                    <p className="text-lg font-medium">{club.managerEmail}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex space-x-4 border-b mb-4">
                    {['about'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-500'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'about' && (
                        <p className="text-gray-700">{club.description}</p>
                    )}
                   
                </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-end gap-4">
                <button className="btn btn-primary btn-lg w-full md:w-auto">Join Club</button>
                
            </div>
        </div>
    );
};

export default ClubDetails;
