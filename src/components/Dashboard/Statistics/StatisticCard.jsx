const StatisticCard = ({ title, value, icon: Icon, colorClass, shadowClass }) => {
    return (
        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]'>
            <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden shadow-2xl absolute -mt-6 grid h-16 w-16 place-items-center text-white ${colorClass} ${shadowClass}`}
            >
                <Icon className='w-6 h-6' />
            </div>
            <div className='p-4 pt-8 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-medium text-gray-500'>
                    {title}
                </p>
                <h4 className='block antialiased tracking-tight font-sans text-3xl font-bold leading-snug text-gray-900 mt-1'>
                    {value}
                </h4>
            </div>
            {/* Optional Footer for context/update time */}
            {/* <div className="p-4 border-t border-blue-gray-50">
                <p className="antialiased font-sans text-sm leading-normal text-gray-600">
                    <span className="font-semibold text-green-500">+5% </span>
                    since yesterday
                </p>
            </div> */}
        </div>
    );
};

export default StatisticCard