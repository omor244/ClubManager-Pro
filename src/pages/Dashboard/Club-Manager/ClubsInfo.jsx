import React from "react";

const ClubsInfo = () => {
    const data = {
        _id: "67c5a001c101a1a1a0010011",
        clubName: "Robotics & AI Guild",
        category: "Technology",
        membershipFee: 0,
        status: "approved",
        managerEmail: "admin1@example.com",
        emoji: "🤖",
        createdAt: "2025-01-10T10:20:00.000Z",
        updatedAt: "2025-01-10T10:20:00.000Z",
    };

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
                        <tr className="border">
                        
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
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClubsInfo;
