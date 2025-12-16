import { FaDollarSign, FaUserShield } from 'react-icons/fa';
import { RiCommunityFill } from 'react-icons/ri';
import axios from 'axios';
import { useEffect, useState } from 'react';
import StatisticCard from './StatisticCard';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";




const AdminStatistics = ({ clubs }) => {
 

  
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
 
  const data = [
    { name: "Approved Clubs", value: clubs.length },
    { name: "Total Registered Users", value: users.length },
    { name: "Payment Users", value: payments.length },
  ];
  useEffect(() => {
    axios.get('https://clubmanagement-jade.vercel.app/users')
      .then(res => {
        setUsers(res.data);
      })
     
  }, []);

  useEffect(() => {
    axios.get('https://clubmanagement-jade.vercel.app/users/payment')
      .then(res => {
        setPayments(res.data);
      })
     
  }, []);

  return (
    <div className='p-6'> {/* Added primary padding */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8"> Overview</h2>

      {/* Statistics Cards Grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {/* 1. Payment Users */}
        <StatisticCard
          title="Payment Users"
          value={payments.length}
          icon={FaDollarSign}
          colorClass="bg-gradient-to-tr from-green-500 to-green-400"
          shadowClass="shadow-green-500/30"
        />

        {/* 2. Total Clubs */}
        <StatisticCard
          title="Total Clubs"
          value={clubs.length}
          icon={RiCommunityFill}
          colorClass="bg-gradient-to-tr from-blue-500 to-blue-400"
          shadowClass="shadow-blue-500/30"
        />

        {/* 3. Total Users */}
        <StatisticCard
          title="Total Registered Users"
          value={users.length}
          icon={FaUserShield}
          colorClass="bg-gradient-to-tr from-purple-500 to-purple-400"
          shadowClass="shadow-purple-500/30"
        />

    

      </div>

      <div className="w-full h-96 bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Clubs Status Overview
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminStatistics;