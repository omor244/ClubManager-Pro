import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CreateClub = () => {
    const { register, handleSubmit, reset } = useForm();
    const axioscecure = useAxiosSecure()
    const onSubmit = async (data) => {
        const clubData = {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
            membershipFee: Number(data.membershipFee),
            status: "pending", // default status
        };

        console.log(clubData)
        try {
            await axioscecure.post("/clubs", clubData);
            toast.success("Club created successfully!");
            reset();
        } catch (error) {
            console.log(error)
            toast.error("Failed to create club");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
                Create a New Club
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Club Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Club Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("clubName", { required: true })}
                        placeholder="Enter club name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Write a short description"
                        className="textarea textarea-bordered w-full h-28"
                    ></textarea>
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Category</span>
                    </label>
                    <select
                        {...register("category", { required: true })}
                        className="select select-bordered w-full"
                    >
                        <option value="">Select category</option>
                        <option>Photography</option>
                        <option>Sports</option>
                        <option>Tech</option>
                        <option>Music</option>
                        <option>Education</option>
                        <option>Gaming</option>
                        <option>Science</option>
                    </select>
                </div>

                {/* Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Location</span>
                    </label>
                    <input
                        type="text"
                        {...register("location", { required: true })}
                        placeholder="City / area"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Banner Image URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Banner Image URL</span>
                    </label>
                    <input
                        type="text"
                        {...register("bannerImage", { required: true })}
                        placeholder="https://example.com/image.jpg"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Membership Fee */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Membership Fee</span>
                    </label>
                    <input
                        type="number"
                        {...register("membershipFee", { required: true })}
                        placeholder="0 for free"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Manager Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Manager Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("managerEmail", { required: true })}
                        placeholder="Manager email"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-full text-lg">
                    Create Club
                </button>
            </form>
        </div>
    );
};

export default CreateClub;
