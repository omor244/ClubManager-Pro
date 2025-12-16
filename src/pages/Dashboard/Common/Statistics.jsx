import { use } from 'react'
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import axios from 'axios'
const Statistics = () => {

  const {user} = useAuth()
  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ['clubs', user.email],
    queryFn: async () => {
      const res = await axios.get(`https://clubmanagement-jade.vercel.app/clubs`)
      return res.data;
    }
  });

  
  return (
    <div>
      <AdminStatistics clubs={clubs} />
    </div>
  )
}

export default Statistics
