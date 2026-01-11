import axios from 'axios';
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { motion } from 'framer-motion';
import ClubCard from '../FeaturedClubs/ClubCard';
import { useState } from 'react';
import Title from '../Shared/Title';

// import { useState } from 'react';


const Clubs = () => {
  const [Search, setSearch] = useState("");
   const [sort, setSort] = useState('')
  const [category, setCategory] = useState("");

 

  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ['clubs', Search, category,sort],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/clubs?search=${Search}&filter=${category}&sort=${sort}`)
      return res.data;
    }
  });




  // if (isLoading) return <LoadingSpinner />;

  const uniqueCategories = [
    // Create an array of all category strings
    ...new Set(clubs.map(club => club.category))
  ];
 





  return (
    <Container>
      <div className='py-14'>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary">
            Your Journey Starts Here — Explore All Clubs
          </h2>
         
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-6 py-12 px-4'
        >
          {/* Search Input Group */}
          <div className="w-full lg:w-1/3 group">
            <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-[#ea580c] transition-colors">
              Quick Search
            </legend>
            <div className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="input w-full bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl h-14 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all pl-6 shadow-sm"
                placeholder="Find your guild..."
              />
            </div>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-end">

            {/* Category Filter */}
            <div className="w-full sm:w-auto">
              <legend className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Category</legend>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered  border-gray-200  w-full sm:w-48 h-14 rounded-2xl focus:outline-none focus:border-blue-600 font-bold text-sm"
              >
                <option  value={''}>All Guilds</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Option - NEW */}
            <div className="w-full sm:w-auto">
              <legend className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Sort By</legend>
              <select
                onChange={(e) => setSort(e.target.value)} 
                className="select select-bordered   border-gray-200 w-full sm:w-48 h-14 rounded-2xl focus:outline-none focus:border-[#ea580c] font-bold text-sm"
              >
                <option value="newest">Latest First</option>
                <option value="priceLow">Fee: Low to High</option>
                <option value="priceHigh">Fee: High to Low</option>
              </select>
            </div>

            {/* Reset Button (Optional but Pro) */}
            <button
              type="reset"
              onClick={() => { setSearch(''); setCategory(''); setSort('newest'); }}
              className="h-14 px-6 rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 font-bold text-xs uppercase tracking-widest transition-all active:scale-95"
            >
              Clear
            </button>

          </div>
        </form>

        <div
        
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >

          {
            isLoading ? <LoadingSpinner></LoadingSpinner> : <>
              {
                clubs.length <= 0 ? <p className=' font-bold text-7xl col-span-3 mx-auto'>No Data Found</p> : <>
                  {clubs.map(club => (
                    <ClubCard key={club._id} club={club} />
                  ))
                  } </>
              }
            </>
       }
        </div>

      </div>
    </Container>
  );
 


  
};

export default Clubs;
