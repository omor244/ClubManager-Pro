import React from 'react';
import { Users, Layout, Calendar, Award } from 'lucide-react';
import Title from '../../components/Shared/Title';

const stats = [
    { id: 1, label: 'Active Members', value: '10+', icon: <Users />, color: 'text-blue-600' },
    { id: 2, label: 'Total Clubs', value: '15+', icon: <Layout />, color: 'text-emerald-600' },
    { id: 3, label: 'Events Hosted', value: '12+', icon: <Calendar />, color: 'text-purple-600' },
    { id: 4, label: 'Awards Won', value: '5+', icon: <Award />, color: 'text-amber-600' },
];

const StatsCounter = () => {
    return (
        <section className="py-12  ">
            <div className="max-w-7xl mx-auto px-4">
                <div className='py-10'>

                <Title title={'Our Impact in Numbers'}></Title>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1"
                        >
                            {/* Icon Circle */}
                            <div className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800 ${stat.color} mb-4`}>
                                {React.cloneElement(stat.icon, { size: 32 })}
                            </div>

                            {/* Value */}
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                            </h3>

                            {/* Label */}
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;