import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";


const ClubsInfo = () => {
 const axiosSecure = useAxiosSecure()
 const {user} = useAuth()
    const { data: clubinfo = [], isLoading } = useQuery({
        queryKey: ['Clubinfo',user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/clubinfo/${user?.email}`)
            return res.data;
        }
    });
 
   

    if (isLoading) return <LoadingSpinner />;
   
    return (
        <div className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Club Information</h2>

            <div className="overflow-x-auto">
                <table className="table w-full  border rounded-xl">
                    <thead className="bg-gray-100  text-gray-700">
                        <tr className="">
                       
                            <th>Club Name</th>
                            <th>Category</th>
                            <th>Membership Fee</th>
                            <th>ClubId</th>
                            <th>Manager Email</th>
                            <th>Created At</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clubinfo.map(data => <tr key={data._id} className="border">

                                <td>{data.clubName}</td>
                                <td>{data.category}</td>
                                <td>{data.membershipFee === 0 ? "Free" : data.membershipFee + " ৳"}</td>

                                <td>
                                    <span>
                                        {data._id}
                                    </span>
                                </td>

                                <td>{data.managerEmail}</td>
                                <td>{new Date(data.createdAt).toLocaleDateString()}</td>

                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClubsInfo;
