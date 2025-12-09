import { useQuery } from "@tanstack/react-query";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageUsers = () => { 

  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['events', user?.email],
    queryFn: async () => {
      const res = await axiosSecure('/users/req')
      return res.data;
    }
  });
 
  console.log(users)
  refetch()
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-10">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 border-b bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Users</h2>
          <p className="text-sm text-gray-500 mt-1">
            View, update roles, and manage user access.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">

                  Apply_At
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {
                users.map(user => <UserDataRow key={user._id} user={user} refetch={refetch} />)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
