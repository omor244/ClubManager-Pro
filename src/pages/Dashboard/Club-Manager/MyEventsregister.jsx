import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyEventsregister = () => {
 const axiosSecure = useAxiosSecure()
 const {user} = useAuth()
    const { data: register = [], isLoading } = useQuery({
        queryKey: ['register', user?.email ],
        queryFn: async () => {
            const res = await axiosSecure(`/register/manager/${user?.email}`)
            return res.data;
        }
    });
 
    console.log(register)
    if (isLoading) return <LoadingSpinner />;


    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                My Event Registrations
            </h2>

            <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
                <table className="table-auto w-full text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Club ID</th>
                          
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>

                        </tr>
                    </thead>

                    <tbody className="text-gray-800">
                        {
                            register.map(data => <tr className="border-t hover:bg-gray-50 transition">
                                <td className="px-6 py-4 font-semibold">{data.title}</td>
                                <td className="px-6 py-4">{data.email}</td>
                                <td className="px-6 py-4">{data.clubId}</td>


                                <td className="px-6 py-4">
                                    <span
                                        className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                                    >
                                        {data.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    Delete
                                </td>



                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEventsregister;
