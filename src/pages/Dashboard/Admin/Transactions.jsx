
import { FiCreditCard, FiCalendar, FiDollarSign } from "react-icons/fi";

const Transactions = ({ payments = [] }) => {
    return (
        <div>
            this tardn
        </div>
        // <div className="p-6 max-w-7xl mx-auto">
        //     {/* Header */}
        //     <div className="mb-6 flex items-center gap-3">
        //         <FiCreditCard className="text-primary text-3xl" />
        //         <h1 className="text-3xl font-bold text-gray-800">Payment History</h1>
        //     </div>

        //     {/* Card Wrapper */}
        //     <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">

        //         {/* Table */}
        //         <div className="overflow-x-auto">
        //             <table className="min-w-full text-left">
        //                 <thead className="bg-gray-50 border-b">
        //                     <tr>
        //                         <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        //                             User Email
        //                         </th>
        //                         <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        //                             Amount
        //                         </th>
        //                         <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        //                             Type
        //                         </th>
        //                         <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        //                             Club
        //                         </th>
        //                         <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        //                             Date
        //                         </th>
        //                     </tr>
        //                 </thead>

        //                 <tbody>
        //                     {payments.length === 0 ? (
        //                         <tr>
        //                             <td
        //                                 colSpan="5"
        //                                 className="px-6 py-10 text-center text-gray-500 text-sm"
        //                             >
        //                                 No transaction records found.
        //                             </td>
        //                         </tr>
        //                     ) : (
        //                         payments.map((payment, index) => (
        //                             <tr
        //                                 key={index}
        //                                 className="border-b hover:bg-gray-50 transition"
        //                             >
        //                                 <td className="px-6 py-4 text-sm text-gray-700">
        //                                     {payment.userEmail}
        //                                 </td>

        //                                 <td className="px-6 py-4 text-sm text-gray-800 font-semibold flex items-center gap-1">
        //                                     <FiDollarSign />
        //                                     {payment.amount}
        //                                 </td>

        //                                 <td className="px-6 py-4">
        //                                     <span
        //                                         className={`px-3 py-1 text-xs font-semibold rounded-full ${payment.type === "membership"
        //                                                 ? "bg-blue-100 text-blue-600"
        //                                                 : "bg-green-100 text-green-600"
        //                                             }`}
        //                                     >
        //                                         {payment.type}
        //                                     </span>
        //                                 </td>

        //                                 <td className="px-6 py-4 text-sm text-gray-700">
        //                                     {payment.clubName}
        //                                 </td>

        //                                 <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
        //                                     <FiCalendar />
        //                                     {new Date(payment.date).toLocaleDateString()}
        //                                 </td>
        //                             </tr>
        //                         ))
        //                     )}
        //                 </tbody>
        //             </table>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Transactions;
