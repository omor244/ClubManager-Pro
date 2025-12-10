import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaImage } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const BecomeAManager = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const managerinfo = {
            name: data?.name,
            email: data?.email,
            photoURL: data?.photoURL,
            role: 'member',
            apply_At: new Date().toLocaleDateString()
        };

        axiosSecure.post('/manager-request', managerinfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Wait For Admin');
                } else {
                    toast.error("Already Requested");
                }
            });

        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg border border-gray-200">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-2">
                        Become a Manager
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Fill out the form below to request manager access
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <div className="form-control w-full">
                        <label className="label flex items-center gap-2">
                            <FaUser className="text-purple-600" />
                            <span className="label-text font-semibold text-gray-700">Full Name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Enter your name"
                            className="input input-bordered w-full focus:border-purple-500 focus:ring-1 focus:ring-purple-300 transition"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-control w-full">
                        <label className="label flex items-center gap-2">
                            <FaEnvelope className="text-purple-600" />
                            <span className="label-text font-semibold text-gray-700">Email Address</span>
                        </label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            placeholder="Enter your email"
                            className="input input-bordered w-full focus:border-purple-500 focus:ring-1 focus:ring-purple-300 transition"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div className="form-control w-full">
                        <label className="label flex items-center gap-2">
                            <FaImage className="text-purple-600" />
                            <span className="label-text font-semibold text-gray-700">Profile Photo URL</span>
                        </label>
                        <input
                            type="url"
                            defaultValue={user?.photoURL}
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full focus:border-purple-500 focus:ring-1 focus:ring-purple-300 transition"
                            {...register("photoURL", { required: "Photo URL is required" })}
                        />
                        {errors.photoURL && (
                            <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button className="btn bg-purple-600  w-full py-3 font-semibold text-white text-lg rounded-xl hover:scale-105 transition-transform duration-200">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BecomeAManager;
