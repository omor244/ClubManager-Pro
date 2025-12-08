import axios from 'axios';
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { motion } from 'framer-motion';
import ClubCard from '../FeaturedClubs/ClubCard';
import { useState } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Clubs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ['clubs'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/clubs')
      return res.data;
    }
  });

  if (isLoading) return <LoadingSpinner />;

  // Create list of categories
  // const categories = ["All", ...new Set(clubs.map(c => c.category))];

  // Apply search and category filter
  // const filteredClubs = clubs.filter(club => {
  //   const matchSearch = club.clubName
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   const matchCategory =
  //     category === "All" ? true : club.category === category;

  //   return matchSearch && matchCategory;
  // });

  return (
    <Container>
      <div className='py-14'>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Your Journey Starts Here — Explore All Clubs
          </h2>
        </div>

        {/* ✅ Search + Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search clubs..."
            className="input input-bordered w-full md:w-1/2"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category Dropdown */}
          <select
            className="select select-bordered w-full md:w-1/4"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
          >
           
              <option  >
                all 
              </option>
           
          </select>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clubs.map(club => (
            <ClubCard key={club._id} club={club} />
          ))}
        </motion.div>

      </div>
    </Container>
  );
};

export default Clubs;
