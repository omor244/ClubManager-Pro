import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";


const ManageClubs = () => {
    const axiosSecure = useAxiosSecure()
  
     const {user} = useAuth()
      const { data: clubs = [], isLoading, refetch } = useQuery({
        queryKey: ['clubs', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/clubs/pending')
          return res.data;
        }
      });
    
  
    
  
    
    const handelapproved = (data) => {
  
    
        axiosSecure.patch(`/update/club/${data._id}`)
            .then(res => {
                refetch()
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success('Approved')
                }
            })
            .catch(err => {
        
        })
        
    }
    const handeldelete = (data) => {
 
        axiosSecure.delete(`/delete/club/${data._id}`)
        .then(res => {
            console.log(res.data)
            if (res.data.deletedCount) {
                refetch()
                toast.success('rejected')
            }
            })
            .catch(err => {
            console.log(err)
            })
        
        
        
    }

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="overflow-x-auto">
            <table className="table w-full border rounded-xl">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                    <tr>
                        
                        <th>Club Name</th>
                        <th>Category</th>
                       
                       
                        <th>Manager Email</th>
                    
                        <th>Fee</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Actions</th>
              
                    </tr>
                </thead>

                <tbody>

                    {
                        clubs.map(club => <tr key={club._id}>

                            <td>{club.clubName}</td>
                            <td>{club.category}</td>


                            <td>{club.managerEmail}</td>

                            <td>${club.membershipFee}</td>
                            <td>
                                <span className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700">
                                    {club.status }
                                </span>
                            </td>
                            <td>{club.createdAt }</td>
                            <td className="flex lg:flex-row flex-col items-center ">
                                <Link onClick={() => handelapproved(club)} className="btn btn-primary">Accept</Link>
                                <Link onClick={() => handeldelete(club)} className="btn ml-2 btn-primary mt-2 lg:mt-0">Reject</Link>
                               
                            </td>

                        </tr> )
                    }

                    
                </tbody>
            </table>
        </div>

    );
};

export default ManageClubs