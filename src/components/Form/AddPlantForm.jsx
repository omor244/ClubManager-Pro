
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddEventForm = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const { register, handleSubmit, watch, reset } = useForm();
 
  const isPaid = watch("isPaid", false)
  const onSubmit = (data) => {
 
    console.log(data)

    const eventinfo = {
      title: data?.title,
      description: data?.description,
      eventDate: '10/12/2026',
      location: data.location,
      maxAttendee: data.maxAttendees,
      createdAt: new Date().toLocaleDateString(),
      eventFee: 0,
      isPaid: false,
      clubId: data.clubId,
     email: user?.email
      
    }
    console.log(eventinfo)

    axiosSecure.post('/events', eventinfo)
      .then(res => {
        toast.success('Successfully Added event')
        reset() 
      })
      .catch(err => {
      
        if (err) {
          toast.error('there is no Club in this Id, Please check you ClubInfo ')
      }
    })

  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-10 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create New Event
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Event Title</label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="AI Workshop: Beginner to Advanced"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
              />
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Description</label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Write event description..."
                className="block rounded-md w-full h-32 px-4 py-3 border border-gray-300 bg-white focus:outline-primary"
              ></textarea>
            </div>

            {/* Location */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Location</label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="Dhaka Tech Hub"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Club ID</label>
              <input
                {...register("clubId", { required: true })}
                type="text"
                placeholder="Enter associated Club ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
              />
            </div>


          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Max Attendees */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Max Attendees</label>
              <input
                {...register("maxAttendees", { required: true })}
                type="number"
                placeholder="50"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
              />
            </div>

            {/* Paid or Free Toggle */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Is Paid Event?</label>
              <select
                {...register("isPaid")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
              >
                <option value={false}>Free</option>

              </select>
            </div>

            {/* Event Fee - ONLY show if Paid */}
            {String(isPaid) === "true" && (
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Event Fee</label>
                <input
                  {...register("eventFee")}
                  type="number"
                  placeholder="Enter event fee"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-primary"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white rounded-md shadow-md bg-primary hover:bg-primary/90 transition"
            >
              Save Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
