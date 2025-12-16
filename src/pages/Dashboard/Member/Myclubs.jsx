
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import Swal from 'sweetalert2'
import ClubCard from '../../../components/FeaturedClubs/ClubCard'

const Myclubs = () => {
  
  const { user } = useAuth()
  const axiosSicure = useAxiosSecure()
  const { data: events = [], isLoading,  } = useQuery({
    queryKey: ['My-clubs', user?.email],
    queryFn: async () => {
      const res = await axiosSicure.get(`/Myclubs/payment/${user?.email}`)
      return res.data;
    }
  });

 

  // const handelDelete = (id) => {


  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to access this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: `Delete`
  //   }).then(async (result) => {



  //     if (result.isConfirmed) {

  //       const res = await axiosSicure.delete(`/Myclubs/delete/${id}`)

  //       if (res.data.deletedCount) {

  //         refetch()

  //         Swal.fire({
  //           title: "Delete Now!",
  //           text: "Your file has been deleted.",
  //           icon: "success"
  //         });

  //       }


  //     }

  //   })
  // }

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="overflow-x-auto p-4 bg-white shadow-xl rounded-2xl">
        <div
         
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map(club => (
            <ClubCard key={club._id} club={club.club} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Myclubs
