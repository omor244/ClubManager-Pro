
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import Swal from 'sweetalert2'

const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosSicure = useAxiosSecure()
    const { data: events = [], isLoading, refetch } = useQuery({
        queryKey: ['My-clubs', user?.email],
        queryFn: async () => {
            const res = await axiosSicure.get(`/Myclubs/payment/${user?.email}`)
            return res.data;
        }
    });

    console.log(events)

    const handelDelete = (id) => {


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

                const res = await axiosSicure.delete(`/Myclubs/delete/${id}`)

                if (res.data.deletedCount) {

                    refetch()

                    Swal.fire({
                        title: "Delete Now!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }


            }

        })
    }

    if (isLoading) return <LoadingSpinner />;
    return (
        <>
            <div className="overflow-x-auto p-4 bg-white shadow-xl rounded-2xl">
                <table className="table w-full table-zebra table-pin-rows">

                    <thead className="text-sm hidden md:table-header-group ">
                        <tr>
                            <th className="font-semibold text-gray-600">Event Title & Club</th>
                            <th className="font-semibold text-gray-600">Status</th>
                            <th className="font-semibold text-gray-600">Event Date</th>
                            <th className="font-semibold text-gray-600">User Email</th>
                            <th className="font-semibold text-gray-600">Registration ID</th>
                            <th className="font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {
                            events.map(event => (

                                <tr key={event._id} className="block md:table-row border-b md:border-none mt-4 mb-3 md:mb-0 p-2 md:p-0">


                                    <td className="block md:table-cell pt-3 md:pt-0">
                                        <div className="font-bold text-base">{event.name}</div>
                                        <div className="text-xs opacity-50">ID: {event.clubId}</div>
                                    </td>


                                    <td className="block md:table-cell">

                                        <span className="font-semibold md:hidden mr-2">Status:</span>
                                        <span className="badge badge-success text-white">
                                            {event.status}
                                        </span>
                                    </td>

                                    <td className="block md:table-cell">
                                        <span className="font-semibold md:hidden mr-2">Date:</span>
                                        {event.created_At}
                                    </td>


                                    <td className="block md:table-cell text-sm">
                                        <span className="font-semibold md:hidden mr-2">Email:</span>

                                        {event.member}
                                    </td>

                                    <td className="hidden md:table-cell text-sm font-mono">

                                        {event._id}
                                    </td>

                                    <td className="block md:table-cell pb-3 md:pb-0 text-right">

                                        <button onClick={() => handelDelete(event._id)} className="btn btn-ghost btn-md btn-outline text-info hover:bg-info hover:text-white">
                                            Leave
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>


                </table>
            </div>
        </>
    )
}

export default PaymentHistory
