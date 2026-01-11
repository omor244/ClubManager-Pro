import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
    ShieldCheck, MapPin, Mail, CreditCard,
    Info, Users, Calendar, ArrowRight, CheckCircle2
} from 'lucide-react';
import LoadingSpinner from '../Shared/LoadingSpinner';
import useAuth from '../../hooks/useAuth';

const ClubDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('about');

    const { data: club, isLoading } = useQuery({
        queryKey: ['ClubDetails', id],
        queryFn: async () => {
            const res = await axios(`https://clubmanagement-jade.vercel.app/clubs/${id}`);
            return res.data;
        }
    });

    const handlePayment = async () => {
        const paymentInfo = {
            clubId: club._id,
            name: club.clubName,
            category: club.category,
            price: club.membershipFee,
            type: 'membership',
            email: user?.email,
            // Pass metadata so your backend knows what to do after success
            metadata: {
                userName: user?.displayName,
                managerEmail: club.managerEmail
            }
        };

        try {
            const res = await axios.post('https://clubmanagement-jade.vercel.app/create-checkout-session', paymentInfo);
            // In professional apps, we redirect to Stripe. 
            // The membership should be created by a Webhook on your backend once the payment succeeds.
            window.location.href = res.data.url;
        } catch (err) {
            console.error("Payment Error:", err);
        }
    };

    if (isLoading) return <LoadingSpinner />;
    if (!club) return <div className="text-center py-20 dark:text-white">Club not found</div>;

    return (
        <div className="min-h-screen  pb-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">

                {/* --- Hero Section --- */}
                <div className="relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img
                        src={club.bannerImage}
                        alt={club.clubName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl md:text-6xl bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                                {club.emoji}
                            </span>
                            <div>
                                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {club.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-2">
                                    {club.clubName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Info Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Membership Fee', value: club.membershipFee === 0 ? 'Free' : `$${club.membershipFee}`, icon: <CreditCard className="text-blue-500" /> },
                        { label: 'Current Status', value: club.status, icon: <ShieldCheck className={club.status === 'approved' ? 'text-emerald-500' : 'text-amber-500'} />, badge: true },
                        { label: 'Primary Location', value: club.location, icon: <MapPin className="text-rose-500" /> },
                        { label: 'Administration', value: club.managerEmail, icon: <Mail className="text-purple-500" /> },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg">{stat.icon}</div>
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</h3>
                            </div>
                            {stat.badge ? (
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${club.status === 'approved' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                                    }`}>
                                    {stat.value}
                                </span>
                            ) : (
                                <p className="text-lg font-bold dark:text-white truncate">{stat.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- Content Tabs --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                            <div className="flex border-b dark:border-white/5 px-8 pt-6">
                                {['about', 'rules', 'members'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 px-6 font-bold text-sm uppercase tracking-widest transition-all ${activeTab === tab
                                                ? 'border-b-4 border-blue-600 text-blue-600'
                                                : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
                                    >
                                        {activeTab === 'about' && (
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Overview</h3>
                                                <p>{club.description}</p>
                                            </div>
                                        )}
                                        {activeTab === 'rules' && <p>Community guidelines and membership rules will appear here.</p>}
                                        {activeTab === 'members' && <p>A list of active guild members is only visible to joined participants.</p>}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* --- Sidebar Action Card --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-gray-900 dark:bg-white p-8 rounded-[2rem] shadow-2xl space-y-6">
                            <div className="flex items-center gap-3 text-blue-500">
                                <Users size={24} />
                                <h2 className="text-xl font-black text-white dark:text-black uppercase">Join Guild</h2>
                            </div>
                            <ul className="space-y-4 text-gray-400 dark:text-gray-500 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Official {club.category} Events</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Member-only Discussions</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Professional Certificates</li>
                            </ul>

                            <div className="pt-4 border-t border-white/10 dark:border-gray-200">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-gray-400 text-xs font-bold uppercase">Total Due</span>
                                    <span className="text-3xl font-black text-white dark:text-black">${club.membershipFee}</span>
                                </div>

                                {club.status === 'approved' ? (
                                    <button
                                        onClick={handlePayment}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Proceed to Secure Payment
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 p-4 bg-amber-500/10 text-amber-500 rounded-2xl border border-amber-500/20 text-xs font-bold uppercase">
                                        <Info size={16} /> Guild Registration Pending
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;