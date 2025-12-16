
import { FiCreditCard, FiCalendar, FiDollarSign } from "react-icons/fi";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Transactions = () => {
    const { user } = useAuth()
    const axiosSicure = useAxiosSecure()

    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['transactions', user?.email],
        queryFn: async () => {
            const res = await axiosSicure.get(`/payment`)
            return res.data;
        }
    });

  

    // const handelDelete = (id) => {


    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to access this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: `Delete`
    //     }).then(async (result) => {



    //         if (result.isConfirmed) {

    //             const res = await axiosSicure.delete(`/Myclubs/delete/${id}`)

    //             if (res.data.deletedCount) {

    //                 refetch()

    //                 Swal.fire({
    //                     title: "Delete Now!",
    //                     text: "Your file has been deleted.",
    //                     icon: "success"
    //                 });

    //             }


    //         }

    //     })
    // }

    if (isLoading) return <LoadingSpinner />;
    return (
       
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <FiCreditCard className="text-primary text-3xl" />
                <h1 className="text-3xl font-bold text-gray-800">Payment Transactions</h1>
            </div>

            {/* Card Wrapper */}
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User Email
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Club
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {payments.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-10 text-center text-gray-500 text-sm"
                                    >
                                        No transaction records found.
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {payment.member}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-800 font-semibold flex items-center gap-1">
                                            <FiDollarSign />
                                            {payment.price}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${payment.type === "membership"
                                                        ? "bg-blue-100 text-blue-600"
                                                        : "bg-green-100 text-green-600"
                                                    }`}
                                            >
                                                Membership
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {payment.name}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                                            <FiCalendar />
                                            {new Date(payment.created_At).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Transactions;
