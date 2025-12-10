import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CreateClub = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const clubData = {
            ...data,
            members: 0, 
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString(),
            membershipFee: Number(data.membershipFee),
            status: "pending",
        };
        console.log(clubData)

        try {
            await axiosSecure.post("/clubs", clubData);
            toast.success("Club created successfully!");
            reset();
        } catch (error) {
            toast.error("Failed to create club");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 my-10">
            <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center text-primary mb-3">
                    Create a New Club
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Fill out the form below to add a new club to ClubManager Pro.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Club Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Club Name
                            </span>
                        </label>
                        <input
                            type="text"
                            {...register("clubName", { required: true })}
                            placeholder="Enter club name"
                            className="input p-1 input-lg input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Description
                            </span>
                        </label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Write a short description"
                            className="textarea p-1 textarea-bordered w-full h-32 rounded-xl"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Category
                            </span>
                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="select p-1 select-bordered w-full rounded-xl"
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
                            <span className="label-text font-semibold text-gray-700">
                                Location
                            </span>
                        </label>
                        <input
                            type="text"
                            {...register("location", { required: true })}
                            placeholder="City / Area"
                            className="input p-1 input-lg input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Banner Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Banner Image URL
                            </span>
                        </label>
                        <input
                            type="url"
                            {...register("bannerImage", { required: true })}
                            placeholder="https://example.com/banner.jpg"
                            className="input p-1 input-lg input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Membership Fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Membership Fee
                            </span>
                        </label>
                        <input
                            type="number"
                            {...register("membershipFee", { required: true })}
                            placeholder="0 for free"
                            className="input p-1 input-lg input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Manager Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Manager Email
                            </span>
                        </label>
                        <input
                            type="email"
                            {...register("managerEmail", { required: true })}
                            placeholder="Manager email"
                            className="input p-1 input-lg input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="btn bg-purple-600 font-medium text-white py-1 w-full btn-lg rounded-xl text-lg tracking-wide hover:scale-[1.02] transition">
                        Create Club
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateClub;
