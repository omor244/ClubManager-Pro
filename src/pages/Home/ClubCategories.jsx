import React from 'react';
import {
    Cpu,
    Palette,
    Trophy,
    Briefcase,
    Music,
    Users
} from 'lucide-react'; // Install lucide-react for icons
import Title from '../../components/Shared/Title';

const categories = [
    { id: 1, name: 'Technology', count: '2 Clubs', icon: <Cpu />, color: 'bg-blue-500' },
    { id: 2, name: 'Arts & Culture', count: '3 Clubs', icon: <Palette />, color: 'bg-purple-500' },
    { id: 3, name: 'Sports', count: '2 Clubs', icon: <Trophy />, color: 'bg-orange-500' },
    { id: 4, name: 'Business', count: '4 Clubs', icon: <Briefcase />, color: 'bg-emerald-500' },
    { id: 5, name: 'Music', count: '5 Clubs', icon: <Music />, color: 'bg-rose-500' },
    { id: 6, name: 'Social Service', count: '9 Clubs', icon: <Users />, color: 'bg-amber-500' },
];

const ClubCategories = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
                
                <Title title={' Explore by Category'}></Title>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Find the perfect community for your interests. From tech enthusiasts to sports fans,
                    ClubSphere has a place for everyone.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group relative overflow-hidden p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        {/* Background Glow Effect */}
                        <div className={`absolute -right-8 -top-8 w-24 h-24 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity ${category.color}`}></div>

                        <div className="flex items-center space-x-4">
                            {/* Icon Box */}
                            <div className={`p-4 rounded-xl text-white ${category.color} shadow-lg shadow-${category.color}/20`}>
                                {React.cloneElement(category.icon, { size: 28 })}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">
                                    {category.count}
                                </p>
                            </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                            <span className="text-primary font-bold">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClubCategories;