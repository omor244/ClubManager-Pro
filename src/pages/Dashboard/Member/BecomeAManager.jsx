import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaImage } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const BecomeAManager = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Manager Request Submitted:", data);

        const managerinfo = {
            name: data?.name,
            email: data?.email,
            photoURL: data?.photoURL,
            role: 'member',
            apply_At: new Date().toLocaleDateString()
        } 

        axiosSecure.post('/manager-request', managerinfo)
            .then(res => {
               
                
                if (res.data.insertedId) {
                    toast.success('Wait For Admin')
                }
                else {
                    toast.error("Already Requested")
                }
        })
 
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
            <div className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-lg">

                {/* Title */}
                <h2 className="text-3xl font-bold text-primary text-center mb-6">
                    Become a Manager
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Fill out the form below to request manager access.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="font-semibold flex items-center gap-2 mb-1">
                            <FaUser className="text-primary" /> Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold flex items-center gap-2 mb-1">
                            <FaEnvelope className="text-primary" /> Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="font-semibold flex items-center gap-2 mb-1">
                            <FaImage className="text-primary" /> Profile Photo URL
                        </label>
                        <input
                            type="url"
                            defaultValue={user?.photoURL}
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full"
                            {...register("photoURL", { required: "Photo URL is required" })}
                        />
                        {errors.photoURL && (
                            <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-primary w-full mt-4 text-lg">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BecomeAManager;
