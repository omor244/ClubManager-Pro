import React from 'react';
import {
    Users, Rocket, ShieldCheck,
    Globe, Zap, Heart, ArrowRight
} from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen  text-slate-900 dark:text-blue-50 transition-colors duration-500">

            {/* --- HERO SECTION --- */}
            <section className="relative py-24 lg:py-36 overflow-hidden">
                {/* Dynamic Blue Glow */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full z-0"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-blue-900/30 border border-blue-200 dark:border-blue-400/20 shadow-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                        <span className="text-primary dark:text-blue-500 text-[10px] font-black uppercase tracking-widest">
                            The ClubManager Pro Story
                        </span>
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                        Leading the <br />
                        <span className="text-blue-600 dark:text-blue-400">Digital Guild</span> <br />
                        <span className="italic text-[#ea580c]">Revolution.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-secondary font-medium leading-relaxed">
                        We built a platform where technology meets community. Our primary goal is to turn manual club management into a seamless, high-speed digital experience.
                    </p>
                </div>
            </section>

            {/* --- FEATURES SECTION (Using Blue & Orange) --- */}
            <section className="py-24 bg-white dark:bg-orange-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Value 1 */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight dark:text-white">Performance First</h3>
                            <p className="text-blue-900/60 dark:text-blue-200/70  leading-relaxed">
                                Optimized with the latest React and Next.js technology for a lag-free experience across all devices.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/30">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight dark:text-white">Trusted Security</h3>
                            <p className="text-blue-900/60 dark:text-blue-200/70 leading-relaxed">
                                Your community data is encrypted and stored using enterprise-grade security protocols.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight dark:text-white">Scalable Growth</h3>
                            <p className="text-blue-900/60 dark:text-blue-200/70 leading-relaxed">
                                Whether you have 10 members or 10,000, our infrastructure grows with your ambition.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- PRIMARY CTA (Blue Background) --- */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    {/* Decorative Orange Circle */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ea580c] rounded-full opacity-20 blur-3xl"></div>

                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-none relative z-10">
                        Design your club's <br /> future with us today.
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        <button className="px-12 py-5 bg-[#ea580c] hover:bg-orange-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-xl shadow-orange-950/20 active:scale-95">
                            Launch Application
                        </button>
                        <button className="px-12 py-5 bg-white text-blue-600 hover:bg-blue-50 font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-xl active:scale-95">
                            View Roadmap
                        </button>
                    </div>
                </div>
            </section>

            {/* --- SUBTLE BRANDING FOOTER --- */}
            <section className="py-16 text-center">
                <p className="text-blue-600/40 dark:text-secondary/40 font-black uppercase tracking-[0.5em] text-xs">
                    ClubManager Pro • Established 2026
                </p>
            </section>
        </div>
    );
};

export default About;