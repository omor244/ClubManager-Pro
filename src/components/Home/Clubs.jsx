import axios from 'axios';
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { motion } from 'framer-motion';
import ClubCard from '../FeaturedClubs/ClubCard';
import { useState } from 'react';

// import { useState } from 'react';

const containerVariants = {

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Clubs = () => {
  const [Search, setSearch] = useState("");
  console.log(Search)
  const [category, setCategory] = useState("");

  console.log(category)

  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ['clubs', Search, category],
    queryFn: async () => {
      const res = await axios.get(`https://clubmanagement-jade.vercel.app/clubs?search=${Search}&filter=${category}`)
      return res.data;
    }
  });


 
  console.log(clubs)

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Your Journey Starts Here — Explore All Clubs
          </h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='max-w-7xl mx-auto flex justify-between py-12 items-center'>

          <div>
            <legend className="fieldset-legend">Search</legend>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className="input w-lg" placeholder="Search here" />

          </div>
          <div>
            <select onChange={(e) => setCategory(e.target.value)} className="select select-neutral max-w-xl">
              <option value="">All Categories</option>
              {uniqueCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </form>

        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {
            clubs.length <= 0 ? <p className=' font-bold text-7xl col-span-3 mx-auto'>No Data Found</p> : <>
              {clubs.map(club => (
                <ClubCard key={club._id} club={club} />
              ))
              } </>
          }
        </div>

      </div>
    </Container>
  );
 


  
};

export default Clubs;
