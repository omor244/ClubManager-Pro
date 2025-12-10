import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaCalendarAlt, FaEnvelope, FaIdBadge } from 'react-icons/fa';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: events = [], isLoading, refetch } = useQuery({
        queryKey: ['My-clubs', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/Myclubs/payment/${user?.email}`);
            return res.data;
        }
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to access this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Delete`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/Myclubs/delete/${id}`);
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your record has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.length === 0 && (
                <div className="col-span-full text-center text-gray-500 font-medium">
                    No payment history found.
                </div>
            )}

            {events.map(event => (
                <div
                    key={event._id}
                    className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Event Header */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <FaIdBadge /> ID: {event.clubId}
                        </p>
                    </div>

                    {/* Details */}
                    <div className="mb-4 space-y-2">
                        <p className="text-gray-700 flex items-center gap-2">
                            <FaCalendarAlt className="text-purple-600" /> {event.created_At}
                        </p>
                        <p className="text-gray-700 flex items-center gap-2">
                            <FaEnvelope className="text-purple-600" /> {event.member}
                        </p>
                        <p className="badge badge-success text-white w-max">{event.status}</p>
                    </div>

                    {/* Action */}
                    <div className="mt-auto flex justify-end">
                        <button
                            onClick={() => handleDelete(event._id)}
                            className="btn btn-outline btn-error flex items-center gap-2 hover:bg-error hover:text-purple-600 transition"
                        >
                            <FaTrashAlt /> Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaymentHistory;
