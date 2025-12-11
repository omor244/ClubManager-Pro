import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/images/cover.jpg";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden">

        {/* Cover Image */}
        <div className="relative">
          <img
            src={coverImg}
            alt="Cover"
            className="w-full h-48 object-cover"
          />

          {/* Profile Image */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <img
              src={user?.photoURL}
              alt="profile"
              className="h-28 w-28 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 px-6 py-6 text-center">
          <p className="bg-green-500 text-white px-4 py-1 rounded-full text-xs w-max mx-auto font-semibold">
            Customer
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-3">
            {user?.displayName || "User Name"}
          </h2>

          <p className="text-gray-600 mt-1 text-sm">
            User ID: <span className="font-medium">{user?.uid}</span>
          </p>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user?.displayName}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-lg font-medium text-gray-800 mt-1 break-all">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg transition font-medium shadow-md">
              Update Profile
            </button>

            <button className="bg-gray-800 hover:bg-black text-white px-8 py-2 rounded-lg transition font-medium shadow-md">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
