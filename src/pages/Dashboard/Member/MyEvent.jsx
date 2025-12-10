import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MyEvent = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: events = [], isLoading, refetch } = useQuery({
        queryKey: ['my-events', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/register/events/${user?.email}`);
            return res.data;
        }
    });

    const handleLeaveEvent = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to access this event after leaving!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Leave`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/events/delete/${id}`);
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Left Event!",
                        text: "You have successfully left this event.",
                        icon: "success"
                    });
                }
            }
        });
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="overflow-x-auto p-4 bg-white shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">My Events</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Event Title & Club</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Event Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">User Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Registration ID</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={event._id} className="border-b hover:bg-gray-50 transition">
                            <td className="px-4 py-3">
                                <div className="font-medium text-gray-800">{event.title}</div>
                                <div className="text-xs text-gray-500 mt-1">ID: {event.clubId}</div>
                            </td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 rounded-full text-white font-semibold ${event.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}>
                                    {event.status}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{new Date(event.created_At).toLocaleDateString()}</td>
                            <td className="px-4 py-3 text-gray-700">{event.email}</td>
                            <td className="px-4 py-3 text-gray-500 font-mono">{event._id}</td>
                            <td className="px-4 py-3 text-right">
                                <button
                                    onClick={() => handleLeaveEvent(event._id)}
                                    className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    <FaTrashAlt /> Leave
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyEvent;
